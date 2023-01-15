import React from "react";
import Contest_desc from "../EventPage/Contest_desc/Contest_desc";
import Contest_prizes from "../EventPage/Contest_prizes/Contest_prizes";
import ContactDetails from "./ContactDetails";
import Contest_rules from "./Contest_rules/Contest_rules";

const test = () => {
  return (
    <div>
      <Contest_desc />
      <Contest_rules />
      <Contest_prizes />
      <ContactDetails />
    </div>
  );
};

export default test;
