import classes from "./EventBox.module.css";
import EventBoxContent from "./EventBoxContent";
import EventElement from "./EventElement";

import { EventResponse, Event } from "../interfaces/event.interface";
import { Alert, AlertTitle } from "@mui/material";

const epochToString = (epoch: number) => new Date(epoch)
  .toLocaleString("en-IN")
  .toUpperCase();

const ErrorAlert = (props: { errorMessage: string }) => {
  return (
    <Alert severity="error" >
      <AlertTitle>Error while fetching events! </AlertTitle>
      {props.errorMessage}
    </Alert>
  );
};

type ElementProps = {
  events: Event[];
  errorMessage: string;
}

const EventBox: React.FC<ElementProps> = ({ events, errorMessage }) => {

  events.sort((a, b) => a.startAt - b.startAt)

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <EventBoxContent />
      </div>
      <div className={classes.events}>
        {
          errorMessage.length != 0 ? <ErrorAlert errorMessage={errorMessage} /> : events.filter(e => e.featured).map(event => {
            return <EventElement
              event={event}
              key={event.id}
              type={event.subtitle}
              heading={event.displayName}
              direct={event.eventPage.link}
              duration={epochToString(event.startAt) + " - " + epochToString(event.endAt)}
            />
          })
        }
      </div>
    </div>
  );
}

export default EventBox;
