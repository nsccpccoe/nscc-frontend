import classes from "./LandingContent.module.css";

function LandingContent() {
  return (
    <div className={classes.container}>
      <div className={classes.clubHeading}>
        <h3>NSCC</h3>
      </div>
      <div className={classes.title}>
        <h1>CodeHive</h1>
      </div>
      <div className={classes.clubHeading}>
        <h3>Coding Contest</h3>
      </div>
      <div className={classes.clubInfo}>
        <h2>26/01/2023, 02:00 PM - 05:00 PM IST</h2>
        <p>
          Unlock your coding potential with our Coding Contest! 8 challenging
          problems tailored for all levels. Perfect opportunity to prepare for
          competitions and placements. Curated by top competitive programmers.
        </p>
      </div>
      <button>Register</button>
    </div>
  );
}

export default LandingContent;
