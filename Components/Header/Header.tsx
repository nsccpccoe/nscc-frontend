import classes from "./Header.module.css";
import Image from "next/image";
import NSCCLogo from "../../assets/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, OAuthCredential } from "firebase/auth";
import { AiFillHome } from "react-icons/ai";
import { MdEmojiEvents } from "react-icons/md";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { useRouter } from "next/router";
import PersonIcon from '@mui/icons-material/Person';
import { signOut ,sendEmailVerification} from "@firebase/auth";
import { toast, ToastOptions } from "react-toastify";
function Navbar() {
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
  const scrollThreshold = 40;

  const router = useRouter();
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem("accessToken", token);

        // refresh token after every 5 minute
        setTimeout(async () => {
          const token = await user.getIdToken();
          localStorage.setItem("accessToken", token);
        }, 5*60*1000);
        if(!auth.currentUser)signOut(auth);
         
        if(auth.currentUser?.emailVerified)setActive(true);

      } else {
        localStorage.removeItem("accessToken");
        setActive(false);
      }
    });
  }, [auth.currentUser?.emailVerified]);


  useEffect(() => {
    const scrollHandler = () => {
      const offset = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
      
      setIsScrolled(offset > scrollThreshold);
    }

    window.addEventListener("scroll", scrollHandler);

    // cleanup
    return () => window.addEventListener("scroll", scrollHandler);

  }, [isScrolled]);

  const handlelogout = () => {
    if (active) {
      auth.signOut();
      localStorage.removeItem("login");
    }
  };

  return (
    <div className={classes.container + (isScrolled ? " " + classes.scrolled : "")}>
      <div className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={NSCCLogo} alt="NSCC Logo" width={250}/>
        </Link>
      </div>
      <div className={classes.navigators}>
        <ul>
          <li>
            <Link href="/">
              <div className={classes.icons}>
                <AiFillHome />
              </div>
              <label style={{ cursor: "pointer" }}>Home</label>
            </Link>
          </li>
          {/* <li>
            <Link href="/">Opportunities</Link>
          </li>
          <li>
            <Link href="/">Resources</Link>
          </li> */}
          <li>
            <Link href="/events">
              <div className={classes.icons}>
                <MdEmojiEvents />
              </div>
              <label style={{ cursor: "pointer" }}>Events</label>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <div className={classes.icons}>
                <PersonIcon style={{fontSize:"36px"}} />
              </div>
              <label style={{ cursor: "pointer" }}>Team</label>
            </Link>
          </li>
          {/* <li>
            <Link href="/">Connect</Link>
          </li> */}
          <li>
            <Link
              onClick={handlelogout}
              className={classes.button}
              href={`/auth?redirect=${router.asPath.split('?')[0]}`}
              >
              <div className={classes.icons}>
                {active ? <RiLogoutCircleFill /> : <RiLoginCircleFill />}
              </div>

              <label  className={classes.button} style={{ cursor: "pointer" }} >{active ? "logout" : "login"}</label>

            </Link>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
