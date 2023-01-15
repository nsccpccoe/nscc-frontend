import classes from "./EventBox.module.css";
import EventBoxContent from "./EventBoxContent";
import EventElement from "./EventElement";

function EventBox() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <EventBoxContent />
      </div>
      <div className={classes.events}>
        <EventElement
          type="Web Development + Marketing Hackathon"
          direct="webxplore"
          heading="WebXplore"
          duration="22/01/2023 8:00 PM - 29/01/2023 11:59 PM IST"
        />
        <EventElement
          type="Competitive Programming Contest"
          direct="codehive"
          heading="CodeHive"
          duration="26/01/2023, 02:00 PM - 05:00 PM IST"
        />
        <EventElement
          type="Competitive Programming + Hiring Contest"
          direct=""
          heading="CodeRush-X"
          duration="29/01/2023, 09:00 PM - 12:00 AM IST"
        />
      </div>
    </div>
  );
}

export default EventBox;
