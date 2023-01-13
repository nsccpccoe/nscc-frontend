import Navbar from "../Header/Header";
import EventBox from "./EventBox";
import classes from "./Landing.module.css";

function Landing() {
  return (
    <div className={classes.container}>
      <EventBox />
    </div>
  );
}

export default Landing;
