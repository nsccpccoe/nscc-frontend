import React from 'react'
import EventRow from '../EventRow/EventRow'
import styles from './PastEvents.module.css'

const PastEvents = () => {
    return (
        <div className={styles.main}>

            <p className={styles.heading}>Past Events</p>

            <div className={styles.tables}>

                <EventRow/>

            </div>
        </div>
    )
}

export default PastEvents