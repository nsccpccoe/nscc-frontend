import React from "react";
import styles from "./AboutEvent.module.css";

interface descProps {
  propWhichIsArray: {
    id: number,
    text: string;
  }[]
}

const AboutEvent = (props: descProps) => {

  const array = props.propWhichIsArray
  return (
    <div className={styles.main}>
      <h1>About Event</h1>
      <div className={styles.content}>
        {array.map((item) => (<p key={item.id}>{item.text}</p>))}
      </div>
    </div>
  );
};

export default AboutEvent;
