import Navbar from "../Header/Header";
import EventBox from "./EventBox";
import classes from "./Landing.module.css";

interface contestProps {
  name: string,
  type: string,
  date: string,
  content: string
  regLink: string
}

function Landing(props: contestProps) {
  return (
    <div className={classes.container}>
      <EventBox name={props.name} type={props.type} date={props.date} content={props.content} regLink={props.regLink}/>
    </div>
  );
}

export default Landing;
