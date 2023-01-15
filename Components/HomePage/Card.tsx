import classes from "./Card.module.scss";

function Card() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>NSCC WebXplore Hackathon</h1>
      </div>
      <div className={classes.date}>
        <p>22/01/23 8:00 AM IST - 29/01/23 11:59 PM IST</p>
      </div>
      <div className={classes.desc}>
        <p>
          Unleash your web development skills in our 8-day hackathon! Explore
          trending tech, build and showcase your website, win prizes and
          goodies.
        </p>
      </div>
    </div>
  );
}

export default Card;
