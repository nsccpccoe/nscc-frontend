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
      <Contest_rules propWhichIsArray={props.propWhichIsArray2}/>
      <Contest_prizes />
      <ContactDetails />
    </div>
  );
};

export default test;
