import React from "react";
import styles from "./Contest_desc.module.css";

interface descProps {
  propWhichIsArray: {
    id: number,
    text: string;
  }[]
}

const Contest_desc = (props: descProps) => {

  const array = props.propWhichIsArray
  return (
    <div className={styles.main}>
      <h1>Description</h1>
      <div className={styles.content}>
        {array.map((item) => (<p key={item.id}>{item.text}</p>))}
      </div>
    </div>
  );
};

export default Contest_desc;
