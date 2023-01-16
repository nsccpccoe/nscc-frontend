import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.numbers}>
          <div className={styles.numberContainer}>
            <div className={styles.clubInfo}>
              <h1>30+</h1>
              <h3>Club Members</h3>
            </div>
            <div className={styles.clubInfo}>
              <h1>8</h1>
              <h3>Team Leads</h3>
            </div>
            <div className={styles.clubInfo}>
              <h1>5</h1>
              <h3>Core Team Members</h3>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.subContainer}>
            <h1>About NSCC PCCOE</h1>
            <p>
              an outcome-oriented coding community that aims to up skill all its
              members and ultimately make them have successful careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
