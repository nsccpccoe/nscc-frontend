import classes from "./EventBox.module.css";
import eventImage from "../../public/event.png";
import Image from "next/image";
import LandingContent from "./LandingContent";

function EventBox() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <LandingContent />
      </div>
      <div className={classes.content}>
        <div className={classes.img}>
          <Image src={eventImage} alt="Event image" />
        </div>
      </div>
    </div>
  );
}

export default EventBox;
