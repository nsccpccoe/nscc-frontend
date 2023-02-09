import React from "react";
import Contest_desc from "../EventPage/Contest_desc/Contest_desc";
import Contest_prizes from "../EventPage/Contest_prizes/Contest_prizes";
import ContactDetails from "./ContactDetails";
import Contest_rules from "./Contest_rules/Contest_rules";

interface mainProps {
  propWhichIsArray: {
    id: number,
    text: string;
  }[],
  propWhichIsArray2: {
    id: number,
    text: string;
  }[]
  eventDetail?: {
    id: number,
    text: string;
  }[]
  evaluationArray?: {
    id: number,
    text: string;
  }[]
}

// interface rulesProps {
//   propWhichIsArray: {
//     id: number,
//     text: string;
//   }[]
// }

const test = (props: mainProps) => {
  return (
    <div>
      <Contest_desc propWhichIsArray={props.propWhichIsArray}/>
      {props.eventDetail && <Contest_rules title="Detailed Description" propWhichIsArray={props.eventDetail}/>}
      {props.evaluationArray && <Contest_rules  title="Evaluation" propWhichIsArray={props.evaluationArray}/>}
      <Contest_rules title="Rules of participation" propWhichIsArray={props.propWhichIsArray2}/>
      <Contest_prizes />
      <ContactDetails />
    </div>
  );
};

export default test;
