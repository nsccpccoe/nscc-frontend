import classes from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../public/Group.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Image src={logo} alt="NSCC LOGO" />
        </div>
        <div className={classes.title}>
          <div className={classes.head}>NSCC PCCOE</div>
          <div className={classes.subHead}>Newton School Coding Club</div>
        </div>
      </div>
      <div className={classes.navigators}>
        <ul>
          <li>
            <Link href="/">Opportunities</Link>
          </li>
          <li>
            <Link href="/">Resources</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/">Connect</Link>
          </li>
        </ul>
        <button>login</button>
      </div>
    </div>
  );
}

export default Navbar;
