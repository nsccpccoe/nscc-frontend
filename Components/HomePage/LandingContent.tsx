import classes from "./LandingContent.module.css";
import Link from "next/link";
function LandingContent() {
  return (
    <div className={classes.container}>
      <div className={classes.clubHeading}>
        <h3>Newton School</h3>
      </div>
      <div className={classes.title}>
        <h1>Coding Club</h1>
      </div>
      <div className={classes.college}>
        <h3>Pimpri Chinchwad College of Engineering, Pune</h3>
      </div>
      <div className={classes.clubInfo}>
        <h2>Unbelievable Coders for Extraordinary Apps</h2>
        <p>
          Hackathon + Coding Contest + Seminars + Participate to win prices &
          Goodies
        </p>
        <p>We Recruit via our events</p>
      </div>
   
      <Link href="/events">
          <label style={{cursor:"pointer"}}>   <button >Participate</button></label>
      </Link>
    </div>
  );
}

export default LandingContent;
