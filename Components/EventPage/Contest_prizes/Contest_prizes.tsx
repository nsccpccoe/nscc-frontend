import React from "react";
import styles from "./Contest_prizes.module.css";

const Contest_prizes = () => {
  return (
    <div className={styles.main}>
      <h1>Prizes and Goodies</h1>

      <div className={styles.table}>
        <div className={styles.row}>
          <p>1st Rank - First Year Student</p>
          <p>Rs. 500 /-</p>
        </div>

        <div className={styles.row}>
          <p>1st Rank - Second Year Student</p>
          <p>Rs. 500 /-</p>
        </div>

        <div className={styles.row}>
          <p>1st Rank - Third or Fourth Year Student</p>
          <p>Rs. 500 /-</p>
        </div>

        <div className={styles.row}>
          <p>1st Rank - Girl Student (from PCCOE)</p>
          <p>Rs. 500 /-</p>
        </div>

        <div className={styles.row}>
          <p>2nd Rank - Girl Student (from PCCOE)</p>
          <p>Rs. 500 /-</p>
        </div>

        <div className={styles.row}>
          <p>1st Rank - Girl Student (outside PCCOE)</p>
          <p>Rs. 500 /-</p>
        </div>
      </div>
    </div>
  );
};

export default Contest_prizes;
