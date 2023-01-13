import classes from "./LandingContent.module.css";

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
        <h3>Pimpri Chinchwad College of Engineering</h3>
      </div>
      <div className={classes.clubInfo}>
        <h2>Unbelievable Coders for Extraordinary Apps</h2>
        <p>
          Hackathon + Coding Contest + Seminars + Participate to win prices &
          Goodies
        </p>
        <p>We Recruitment via our events</p>
      </div>
      <button>Participate</button>
    </div>
  );
}

export default LandingContent;
