import Link from "next/link";
import classes from "./EventElement.module.css";

type ElementProps = {
  type: string;
  heading: string;
  duration: string;
  direct: string;
};

function EventElement(props: ElementProps) {

  return (
    <Link className={classes.container} href={props.direct}>
      <div className={classes.type}>
        <p>{props.type}</p>
      </div>
      <div className={classes.heading}>
        <h1>{props.heading}</h1>
      </div>
      <div className={classes.duration}>
        <p>{props.duration}</p>
      </div>
      <button>Register</button>
    </Link>
  );
}

export default EventElement;
