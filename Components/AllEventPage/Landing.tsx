import classes from "./Landing.module.css";
import { FluidContainer } from "../FluidContainer/FluidContainer";
import EventBox from "./EventBox";

import EventList from "../EventList/EventList";
// import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
// import PastEvents from "../PastEvents/PastEvents";
import { Alert, AlertTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { EventResponse, Event } from "../interfaces/event.interface";

const ErrorAlert = (props: { errorMessage: string }) => {
  return (
    <Alert severity="error" >
      <AlertTitle>Error while fetching events! </AlertTitle>
      {props.errorMessage}
    </Alert>
  );
};


const getPastEvents = (events: Event[]): Event[] => {
  return events.filter((event: Event) => event.endAt < Date.now());
}

const getUpcomingEvents = (events: Event[]): Event[] => {
  return events.filter((event: Event) => event.startAt > Date.now());
}

const getOngoingEvents = (events: Event[]): Event[] => {
  return events.filter((event: Event) => event.startAt < Date.now() && event.endAt > Date.now());
}

function Landing() {
  const [events, setEvents] = useState<Event[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    fetch('https://asia-south1-nsccpccoe.cloudfunctions.net/events')
      .then(res => {
        if (!res.ok) {
          throw res.status + " " + res.statusText;
        }
        return res.json();
      })
      .then((eventResponse: EventResponse) => {
        if (eventResponse.isError) {
          setErrorMessage(eventResponse.errorCode + " - " + eventResponse.errorMessage);
        } else {
          setEvents(eventResponse.data);
        }
      })
      .catch(error => {
        setErrorMessage(error)
      });
  }, []);

  return (
    <div className={classes.mainContainer}>
      <FluidContainer>
        <div className={classes.container}>
          {
            errorMessage.length != 0
              ? <ErrorAlert errorMessage={errorMessage} />
              : <EventBox events={events} />
          }
        </div>
        <EventList heading="Ongoing Events" events={events}/>
        <EventList heading="Upcoming Events" events={events}/>
        <EventList heading="Past Events" events={events}/>
      </FluidContainer>
    </div>
  );
}

export default Landing;
