import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";

import { auth } from "../firebase";
import styles from "../styles/auth.module.css"
import { toast, ToastOptions } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

import { FirebaseError } from "firebase/app";
import GoogleIcon from '@mui/icons-material/Google';

import GitHubIcon from '@mui/icons-material/GitHub';
import { FluidContainer } from "../Components/FluidContainer/FluidContainer"

import "firebase/compat/auth";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendEmailVerification,sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router'
import Link from "next/link";
import { signOut } from "@firebase/auth";


interface InitialState {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const initialState: InitialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const Auth = () => {
  let router = useRouter()
  const [state, setState] = useState<InitialState>(initialState);
  const [signUp, setSignUp] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [googleuser, setgogleuser] = useAuthState(auth);
  const [activeuser, setActiveuser] = useState("login");
  // const [googleuser, setgoogleUser] = useState<any | null>(null);

  const redirectPath = typeof router.query["redirect"] === "string" ? router.query["redirect"] : "/";

  const googleauth = new GoogleAuthProvider();

  const googleSignin = async () => {
    try {
      // console.log("hello")
      const result = await signInWithPopup(auth, googleauth);
        
      toast("login successfull", toastOptions);
      router.push(redirectPath)
    } catch (err) {
      if (err instanceof FirebaseError) toast(err.code, toastOptions);
    }
  }
  const googlesignOut = async () => {
    await auth.signOut();

    toast("signout successfull", toastOptions);
  }

  const githubauth = new GithubAuthProvider();

  const githubSignin = async () => {
    try {
      const result = await signInWithPopup(auth, githubauth);

      toast("login successfull", toastOptions);
      router.push(redirectPath)
    } catch (err) {
      if (err instanceof FirebaseError) toast(err.code, toastOptions);
    }
  }
  const githubSignout = async () => {
    await auth.signOut();

    toast("signout successfull", toastOptions);
  }

  const { email, password, firstName, lastName, confirmPassword } = state;

  // const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        try {
          const { user } = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

         
          
          if(auth.currentUser?.emailVerified){
            toast.success("signin successfull");
            router.push(redirectPath)}
          else {
            if(auth.currentUser)await sendEmailVerification(auth.currentUser);
            toast(`Verification mail sent to ${user.email}`, toastOptions);
            setState(initialState) 
             signOut(auth);
          }
          
          

        }
        catch (err) {
          if (err instanceof FirebaseError)
            toast(err.code, toastOptions);
        }

      } else {
        toast("All fields are mandatory to fill", toastOptions);
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Password don't match");
      }
      if (firstName && lastName && email && password) {
        try {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          await updateProfile(user, {
            displayName: firstName + " " + lastName
          });

          if(auth.currentUser)await sendEmailVerification(auth.currentUser);
          toast(`Verification mail sent to ${user.email}`, toastOptions);
          setState(initialState)      
          
    
        } catch (err) {
          // console.error(err);
          if (err instanceof FirebaseError) toast.error(err.code)
        }

      } else {
        toast("All fields are mandatory to fill", toastOptions);
      }
    }
  };


  const handleAddClassName = () => {
    setState(initialState)
    setIsActive(current => !current);
  };

  return (
    <>
      <FluidContainer />
      <ToastContainer />

      <div className={styles.loginsignupform}>
        <div className={` ${styles.containerloginform}  ${isActive ? "" : `${styles.rightpanelactive}`}`} id="containerloginform">
          <div className={`${styles.formcontainerloginform} ${styles.signupcontainerloginform}`}>
            <form onSubmit={handleAuth}>
              <h1 className={styles.Loginsignupheader}>Create Account</h1>
              <div className={styles.socialcontainerloginform}>
                <div className={styles.social}>

                  <GoogleIcon onClick={googleSignin} />

                </div>
                <div className={styles.social}>
                  <GitHubIcon onClick={githubSignin} />

                </div>
              </div>
              <span className={styles.loginspan}>or use your email for registration</span>
              <div className={styles.adjustname}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                // style={{ width: "12vw" }}
                />
                <input
                  type="text"
                  className="formcontrol inputtextbox"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  // style={{ width: "12vw" }}
                  onChange={handleChange}

                />
              </div>
              <div className={styles.emailpass}>
                <input
                  type="email"
                  className="formcontrol inputtextbox"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="formcontrol inputtextbox"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="formcontrol inputtextbox"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
                <button className={styles.signupsubmit} onClick={() => setSignUp(true)}>Sign Up</button>

              </div>
            </form>
          </div>
          <div className={`${styles.formcontainerloginform} ${styles.signincontainerloginform}`}>
            <form onSubmit={handleAuth}>
              <h1 className={styles.singinheader}  >Sign in</h1>
              <div className={` ${styles.socialcontainerloginform} ${styles.adjustsocial}  `}>

                <div className={styles.social}>
                  <GoogleIcon onClick={googleSignin} />
                </div>
                <div className={styles.social}>
                  <GitHubIcon onClick={githubSignin} />
                </div>
              </div>
              <span className={`{ ${styles.loginspan} ${styles.adjustloginspan}`}>or use your account</span>
              <div className={`{ ${styles.signinadjust}  ${styles.adjustinputtext}`}>
                <input type="email"
                  className={`{ ${styles.formcontrol} ${styles.inputtextbox}}`}
                  placeholder="Email"
                  name="email"
                  value={email}
                  // style={{ width: "24vw" }}
                  onChange={handleChange} />
                <input type="password"
                  className={`{ ${styles.formcontrol} ${styles.inputtextbox}}`}
                  placeholder="Password"
                  // style={{ width: "24vw" }}
                  name="password"
                  value={password}
                  onChange={handleChange} />
                <Link href="/forgetpassword" style={{ margin: "2vh 0vw", cursor: "pointer", color: "white" }}>Forgot password?</Link>

                <button className={styles.signinbutton} onClick={() => setSignUp(false)}>Sign In</button>
              </div>
            </form>
          </div>
          <div className={styles.overlaycontainerloginform}>
            <div className={styles.overlay}>
              <div className={`${styles.overlaypanel} ${styles.overlayleft}`}>
                <h1 className={styles.welcomeback} >Welcome Back!</h1>
                <p className={styles.connected}>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={() => { handleAddClassName() }}
                  className={`${styles.ghost} ${styles.signghost}`} id="signIn">
                  Sign In
                </button>
              </div>
              <div className={`${styles.overlaypanel} ${styles.overlayright}`}>
                <h1 className={styles.hello}>Hello, Friend!</h1>
                <p className={styles.startjou}>Enter your personal details and start journey with us</p>
                <button
                  onClick={() => { handleAddClassName() }}
                  className={`${styles.ghost} ${styles.signupghost}`} id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
