import classes from "./EventElement.module.css";

type ElementProps = {
  type: string;
  heading: string;
  duration: string;
};

function EventElement(props: ElementProps) {
  return (
    <div className={classes.container}>
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
    </div>
  );
}

export default EventElement;
