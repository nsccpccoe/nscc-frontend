import classes from "./EventBox.module.css";
import eventImage from "../../public/event.png";
import Image from "next/image";
import LandingContent from "./LandingContent";

interface contestProps {
  name: string,
  type: string,
  date: string,
  content: string
  regLink: string
}

function EventBox(props: contestProps) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <LandingContent name={props.name} type={props.type} date={props.date} content={props.content} regLink={props.regLink} />
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
