import classes from "./Landing.module.css";
import { FluidContainer } from "../FluidContainer/FluidContainer";
import EventBox from "./EventBox";

function Landing() {
  return (
    <div className={classes.mainContainer}>
      <FluidContainer>
        <div className={classes.container}>
          <EventBox />
        </div>
      </FluidContainer>
    </div>
  );
}

export default Landing;
