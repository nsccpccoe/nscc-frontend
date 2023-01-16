import classes from "./LandingContent.module.css";

interface contestProps {
  name: string,
  type: string,
  date: string,
  content: string
}

function LandingContent(props: contestProps) {
  return (
    <div className={classes.container}>
      <div className={classes.clubHeading}>
        <h3>NSCC</h3>
      </div>
      <div className={classes.title}>
        <h1>{props.name}</h1>
      </div>
      <div className={classes.clubHeading}>
        <h3>{props.type}</h3>
      </div>
      <div className={classes.clubInfo}>
        <h2>{props.date}</h2>
        <p>
          {props.content}
        </p>
      </div>
      <button>Register</button>
    </div>
  );
}

export default LandingContent;
