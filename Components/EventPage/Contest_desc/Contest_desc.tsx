import React from "react";
import styles from "./Contest_desc.module.css";

const Contest_desc = () => {
  return (
    <div className={styles.main}>
      <h1>Description</h1>

      <div className={styles.content}>
        <p>
          Join us in celebrating Republic Day with our coding contest! The
          contest will consist of 8 problems, with 4 easy problems targeting
          first year students, 2 medium problems targeting second year students,
          and 2 hard problems targeting third and fourth year students. Each
          problem will have partial marking, and the winner will be the
          participant who scores the most points the earliest.
        </p>

        <p>
          The problems have been created by top competitive programmers at our
          institute and cover a range of topics in both basic and advanced data
          structures and algorithms. This contest is a great opportunity to
          prepare for the Newton School Grand Coding Contest and the upcoming
          off-campus placement season.
        </p>

        <p>
          After the contest ends, video and text editorials for the problems
          will be provided. Dont miss this chance to challenge yourself and
          improve your coding skills. We cant wait to see your solutions!
        </p>
      </div>
    </div>
  );
};

export default Contest_desc;
