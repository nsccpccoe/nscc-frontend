import classes from "./Landing.module.css";
import { FluidContainer } from "../FluidContainer/FluidContainer";
import EventBox from "./EventBox";
import EventList from "../EventList/EventList";
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
  return events
    .filter((event: Event) => event.endAt < Date.now())
    .sort((a, b) => b.endAt - a.endAt)
}

const getUpcomingEvents = (events: Event[]): Event[] => {
  return events
    .filter((event: Event) => event.startAt > Date.now())
    .sort((a, b) => a.startAt - b.startAt)
}

const getOngoingEvents = (events: Event[]): Event[] => {
  return events
    .filter((event: Event) => event.startAt < Date.now() && event.endAt > Date.now())
    .sort((a, b) => b.endAt - a.endAt)
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

  const ongoingEvents = getOngoingEvents(events)
  const upcomingEvents = getUpcomingEvents(events)
  const pastEvents = getPastEvents(events)

  return (
    <div className={classes.mainContainer}>
      <FluidContainer />
      <div className={classes.container}>
          {
            <EventBox events={events} errorMessage={errorMessage} />
          }
        </div>
        {errorMessage.length != 0
          ? <ErrorAlert errorMessage={errorMessage} />
          : <div>
            {ongoingEvents.length > 0 && <EventList heading="Ongoing Events" events={getOngoingEvents(events)} />}
            {upcomingEvents.length > 0 && <EventList heading="Upcoming Events" events={getUpcomingEvents(events)} />}
            {pastEvents.length > 0 && <EventList heading="Past Events" events={getPastEvents(events)} />}
          </div>
        }
    </div>
  );
}

export default Landing;
