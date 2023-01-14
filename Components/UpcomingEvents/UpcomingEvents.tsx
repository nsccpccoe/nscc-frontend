import React from 'react'
import EventRow from '../EventRow/EventRow'
import styles from './UpcomingEvents.module.css'

const UpcomingEvents = () => {
    return (
        <div className={styles.main}>

            <p className={styles.heading}>Upcoming Events</p>

            <div className={styles.tables}>

                <EventRow />

            </div>
        </div>
    )
}

export default UpcomingEvents