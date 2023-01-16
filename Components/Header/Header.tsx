import classes from "./Header.module.css";
import Image from "next/image";
import NSCCLogo from "../../assets/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AiFillHome } from "react-icons/ai";
import { MdEmojiEvents } from "react-icons/md";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [active, setactive] = useState(false);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const token = user.accessToken;
        localStorage.setItem("accessToken", token);
        setactive(true);
      } else {
        localStorage.removeItem("accessToken");
        setactive(false);
      }
    });
  }, []);

  const handlelogout = () => {
    if (active) {
      auth.signOut();
      localStorage.removeItem("login");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Image src={NSCCLogo} alt="NSCC PCCOE" />
        </div>
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
            <Link href="/event">
              <div className={classes.icons}>
                <MdEmojiEvents />
              </div>
              <label style={{ cursor: "pointer" }}>Events</label>
            </Link>
          </li>
          {/* <li>
            <Link href="/">Connect</Link>
          </li> */}
          <li>
            <Link
              onClick={handlelogout}
              className={classes.button}
              href="/auth"
            >
              <div className={classes.icons}>
                {active ? <RiLogoutCircleFill /> : <RiLoginCircleFill />}
              </div>
              <label style={{ cursor: "pointer" }}>
                {active ? "logout" : "login"}
              </label>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
