import { useRouter } from "next/router";
import classes from "./EventElement.module.css";

type ElementProps = {
  type: string;
  heading: string;
  duration: string;
  direct: string;
};

function EventElement(props: ElementProps) {
  const router = useRouter();

  function onClickHandler() {
    if (props.direct == "") {
      router.push("/event");
    }
    router.push(`/event/${props.direct}`);
  }

  return (
    <div className={classes.container} onClick={onClickHandler}>
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
