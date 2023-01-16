import classes from "./EventBox.module.css";
import EventBoxContent from "./EventBoxContent";
import EventElement from "./EventElement";

import { EventResponse, Event } from "../interfaces/event.interface";

const epochToString = (epoch: number) => new Date(epoch)
  .toLocaleString("en-IN")
  .toUpperCase();

type ElementProps = {
  events: Event[];
}


const EventBox: React.FC<ElementProps> = ({ events }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <EventBoxContent />
      </div>
      <div className={classes.events}>
        {
          events.map(event => {
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
