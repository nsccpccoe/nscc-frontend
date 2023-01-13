import classes from "./Header.module.css";
import Image from "next/image";
import NSCCLogo from "../../assets/logo.svg";
import Link from "next/link";

function Navbar() {
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
            <Link href="/">Home</Link>
          </li>
          {/* <li>
            <Link href="/">Opportunities</Link>
          </li>
          <li>
            <Link href="/">Resources</Link>
          </li> */}
          <li>
            <Link href="/event">Events</Link>
          </li>
          {/* <li>
            <Link href="/">Connect</Link>
          </li> */}
          <li>
            <Link className={classes.button} href="/auth">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
