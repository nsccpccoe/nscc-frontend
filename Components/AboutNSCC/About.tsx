import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.main}>

      <div className={styles.pccoe}>
        <div className={styles.numbers}>

          <div>
            <h2>20+</h2>
            <p>Club Members</p>
          </div>

          <div>
            <h2>8</h2>
            <p>Team Leads</p>
          </div>

          <div>
            <h2>5</h2>
            <p>Core Team Members</p>
          </div>

        </div>
      </div>

      <div className={styles.about}>

        <div className={styles.about_inner_div}>
          <div className={styles.title}>
            <p>About NSCC PCCoE</p>
          </div>

          <div className={styles.content}>
            <p>An outcome-oriented coding community that aims to up skill all its members and ultimately make them have successful careers.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About