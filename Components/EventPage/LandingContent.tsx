import Link from "next/link";
import classes from "./LandingContent.module.css";

interface contestProps {
  name: string,
  type: string,
  date: string,
  content: string
  regLink: string
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
      {
        props.name === 'CodeHive' &&
        <div>Contest Link : <Link
        className={classes.regButton}
        href="https://www.hackerrank.com/codehive"
      >Enter</Link></div>
        
      }
      {
        props.name === 'Codehive' &&
        <div>Website Theme: Any College Club (Ex: Coding Club, Art Circle, etc)</div>
      }
      <Link
        className={classes.regButton}
        href={props.regLink}
      >Register</Link>
      {
        props.name === 'WebXplore' &&
        <Link
          className={classes.regButton}
          href="/events/webxplore/submissions"
          style={{ marginLeft: '16px' }}
        >Submissions</Link>
      }
    </div>
  );
}

export default LandingContent;
