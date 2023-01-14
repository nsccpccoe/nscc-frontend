import React from 'react'
import EventRow from '../EventRow/EventRow'
import styles from './OngoingEvents.module.css'

const OngoingEvents = () => {
  return (
    <div className={styles.main}>

            <p className={styles.heading}>Ongoing Events</p>

            <div className={styles.tables}>

                <EventRow/>

            </div>
        </div>
  )
}

export default OngoingEvents