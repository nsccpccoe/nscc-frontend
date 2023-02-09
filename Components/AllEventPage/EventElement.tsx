import Link from "next/link";
import classes from "./EventElement.module.css";
import { Event } from "../interfaces/event.interface";
import { useCallback, useEffect, useState } from "react";

type ElementProps = {
  event: Event
  type: string;
  heading: string;
  duration: string;
  direct: string;
};

function EventElement(props: ElementProps) {

  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState("");
  const [token, settoken] = useState("");

  useEffect(() => {
    // Perform localStorage action
    settoken(localStorage.getItem("accessToken") || "");
  }, []);


  // fetch registration status
  useEffect(() => {
    if (props.event.registration.type != "onsite") return;
    if(Boolean(token) === false) return;

    fetch(`https://asia-south1-nsccpccoe.cloudfunctions.net/register/${props.event.id}/status`,
      { headers: { authorization: `Bearer ${token}` }, }
    )
      .then(res => {
        if (!res.ok) {
          throw res.status + res.statusText;
        }
        return res;
      })
      .then(res => res.json())
      .then(res => setIsRegistered(res?.data?.registered))
      .catch(e => { setError(e) })
  }, [props.event.registration.type, props.event.id, token])

  let buttonText = "";

  if (error) {
    buttonText = error.toString();
  } else {
    buttonText = isRegistered ? "Registered" : "Register";
  }

  buttonText = isRegistered ? "Registered" : "Register";

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
      >
        {buttonText}
      </Link>
    </Link>
  );
}

export default EventElement;
