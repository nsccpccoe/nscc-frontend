import classes from "./Landing.module.css";
import { FluidContainer } from "../FluidContainer/FluidContainer";
import EventBox from "./EventBox";

import OngoingEvents from  "../OngoingEvents/OngoingEvents"
import UpcomingEvents from  "../UpcomingEvents/UpcomingEvents"
import PastEvents  from  "../PastEvents/PastEvents"



function Landing() {
  return (
    <div className={classes.mainContainer}>
      <FluidContainer>
        <div className={classes.container}>
          <EventBox />
          
        </div>
        <OngoingEvents />
          <UpcomingEvents />
          <PastEvents />
      </FluidContainer>
    </div>
  );
}

export default Landing;
