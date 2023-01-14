import classes from "./EventBoxContent.module.css";

function EventBoxContent() {
  return (
    <div className={classes.content}>
      <div className={classes.organizer}>
        <h3>NSCCs</h3>
      </div>
      <div className={classes.heading}>
        <h1>Pandora Tech Festival</h1>
      </div>
      <div className={classes.date}>
        <p>22/01/2023 - 29/01/2023</p>
      </div>
      <div className={classes.descriptiion}>
        <p>Hackathon + Coding Contest + Inauguration </p>
        <p>Prize Pool more than 7000 & Goodies</p>
        <p>Club Recruitment Drive</p>
      </div>
    </div>
  );
}

export default EventBoxContent;
