import Link from "next/link";
import classes from "./EventElement.module.css";
import { Event } from "../interfaces/event.interface";

type ElementProps = {
  event: Event
  type: string;
  heading: string;
  duration: string;
  direct: string;
};

function EventElement(props: ElementProps) {

  return (
    <Link
      className={classes.container}
      href={props.event.eventPage.link}
      target={props.event.eventPage.type === 'offsite' ? '_blank' : '_self'}
      >
      <div className={classes.type}>
        <p>{props.type}</p>
      </div>
      <div className={classes.heading}>
        <h1>{props.heading}</h1>
      </div>
      <div className={classes.duration}>
        <p>{props.duration}</p>
      </div>
      <Link
        className={classes.regButton}
        href={props.event.registration.link}
        target={props.event.registration.type === 'offsite' ? '_blank' : '_self'}
        >Register</Link>
    </Link>
  );
}

export default EventElement;
