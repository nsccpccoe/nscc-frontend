import Navbar from "../HomePage/Navbar";
import EventBox from "./EventBox";
import classes from "./Landing.module.css";

function Landing() {
  return (
    <div className={classes.container}>
      <Navbar />
      <EventBox />
    </div>
  );
}

export default Landing;
