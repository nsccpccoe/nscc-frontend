import { Alert, AlertTitle } from "@mui/material";
import { useEffect, useState } from "react";
import classes from "./EventBox.module.css";
import EventBoxContent from "./EventBoxContent";
import EventElement from "./EventElement";


interface Organizer {
  shortName: string;
  displayName: string;
}


interface Registration {
  link: string;
  type: string;
}

interface Event {
  id: string;
  subtitle: string;
  displayName: string;
  description: string;
  endAt: number;
  startAt: number;
  organizers: Organizer[];
  registration: Registration;
}

interface EventResponse {
  isError: boolean;
  data: Event[];
}

const ErrorAlert = (props: { errorMessage: string }) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error while fetching events!</AlertTitle>
      {props.errorMessage}
    </Alert>
  );
};

const epochToString = (epoch: number) => new Date(epoch).toLocaleString("en-IN");

function EventBox() {
  const [events, setEvents] = useState<Event[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    fetch('https://asia-south1-nsccpccoe.cloudfunctions.net/events')
      .then(res => {
        if (!res.ok) {
          throw res.statusText;
        }
        return res.json();
      })
      .then((eventResponse: EventResponse) => {
        if (eventResponse.isError) {
          setErrorMessage("Unknown error occured while fetching event details");
        } else {
          setEvents(eventResponse.data);
        }
      })
      .catch(error => {
        setErrorMessage(error)
      });
  }, []);


  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <EventBoxContent />
      </div>
      <div className={classes.events}>
        {
          (errorMessage.length != 0) ? <ErrorAlert errorMessage={errorMessage} /> : events.map(event => {
            return <EventElement
              key={event.id}
              type={event.subtitle}
              heading={event.displayName}
              duration={epochToString(event.startAt) + " - " + epochToString(event.endAt)}
            />
          })
        }
      </div>
    </div>
  );
}

export default EventBox;
