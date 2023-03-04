import classes from "./EventBoxContent.module.css";

function EventBoxContent() {
  return (
    <div className={classes.content}>
      <div className={classes.organizer}>
        <h3>Department of Information Technology&apos;s</h3>
      </div>
      <div className={classes.heading}>
        <h1>Praxis</h1>
      </div>
      <div className={classes.date}>
        <p>11/03/2023 - 18/03/2023</p>
      </div>
      <div className={classes.descriptiion}>
        <p>Hackathon + Coding Contest + On Stage + Off Stage + Gaming </p>
        <p>Prize Pool more than 80,000 & Goodies</p>
      </div>
    </div>
  );
}

export default EventBoxContent;
