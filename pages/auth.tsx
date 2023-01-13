import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import type { AppProps } from 'next/app'
import { auth } from "../firebase";
import styles from "../styles/auth.module.css"
import { toast, } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { json } from "stream/consumers";
import { FirebaseError } from "firebase/app";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import {FluidContainer} from "../Components/FluidContainer/FluidContainer"

interface InitialState {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
}
const initialState: InitialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const Auth = () => {
  const [state, setState] = useState<InitialState>(initialState);
  const [signUp, setSignUp] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
          toast.success("signin successfull");
        }
        catch (err) {
          if (err instanceof FirebaseError) toast.error(err.code)

        }
        // setUser(user);
        // setActive("home");
      } else {

        toast.error("All fields are mandatory to fill");
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
          toast.success("signup successfull");
        } catch (err) {
          console.error(err);
          if (err instanceof FirebaseError) toast.error(err.code)
        }
        // await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        // setActive("home");
      } else {
        toast.error("All fields are mandatory to fill");
      }
    }
    // navigate("/");

  };
  const handleaddclassName = () => {
    setIsActive(current => !current);
  };
  return (

    <>
       <FluidContainer/>
      <ToastContainer />
      <div className={styles.loginsignupform}>
     
        <div className={` ${styles.containerloginform}  ${isActive ? "" : `${styles.rightpanelactive}`}`} id="containerloginform">
          <div className={`${styles.formcontainerloginform} ${styles.signupcontainerloginform}`}>
            <form onSubmit={handleAuth}>
              <h1 className={styles.Loginsignupheader}>Create Account</h1>
              <div className={styles.socialcontainerloginform}>
                <a href="" className={styles.social}>
                  {/* <i className="fab fafacebook"></i> */}
                  <GoogleIcon />
                </a>
                <a href="" className={styles.social}>
                  <FacebookIcon />
                  {/* <i className="fab fagoogleplusg"></i> */}
                </a>
                <a href="" className={styles.social}>
                  <GitHubIcon />
                  {/* <i className="fab falinkedinin"></i> */}
                </a>
              </div>
              <span className={styles.loginspan}>or use your email for registration</span>
              <div className={styles.adjustname}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="formcontrol inputtextbox"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  />
              </div>
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
              <button onClick={() => setSignUp(true)}>Sign Up</button>
            </form>
          </div>
          <div className={`${styles.formcontainerloginform} ${styles.signincontainerloginform}`}>
            <form onSubmit={handleAuth}>
              <h1>Sign in</h1>
              <div className={styles.socialcontainerloginform}>

                <a href="" className={styles.social}>
                  {/* <i className="fab fafacebook"></i> */}
                  <GoogleIcon />
                </a>
                <a href="" className={styles.social}>
                  <FacebookIcon />
                  {/* <i className="fab fagoogleplusg"></i> */}
                </a>
                <a href="" className={styles.social}>
                  <GitHubIcon />
                  {/* <i className="fab falinkedinin"></i> */}
                </a>
              </div>
              <span className={styles.loginspan}>or use your account</span>
              <input type="email"
                className="formcontrol inputtextbox"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange} />
              <input type="password"
                className="formcontrol inputtextbox"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange} />
              <a href="">Forgot your password?</a>
              <button onClick={() => setSignUp(false)}>Sign In</button>
            </form>
          </div>
          <div className={styles.overlaycontainerloginform}>
            <div className={styles.overlay}>
              <div className={`${styles.overlaypanel} ${styles.overlayleft}`}>
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={() => { handleaddclassName() }}
                  className={styles.ghost} id="signIn">
                  Sign In
                </button>
              </div>
              <div className={`${styles.overlaypanel} ${styles.overlayright}`}>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  onClick={() => { handleaddclassName() }}
                  className={styles.ghost} id="signUp">
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
