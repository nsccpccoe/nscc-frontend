import classes from "./Landing.module.css";
import LandingContent from "./LandingContent";
import Navbar from "../Header/Header";

function Landing() {
  const crossClass = `${classes.box} ${classes.cross}`;
  const nClass = `${classes.content} ${classes.active}`;
  return (
    <div className={classes.container}>
      {/* <Navbar /> */}
      <div className={classes.content}>
        <LandingContent />
      </div>
      <div className={nClass}>
        <div className={classes.box}></div>
        <div className={crossClass}></div>
        <div className={classes.box}></div>
      </div>
    </div>
  );
}

export default Landing;
