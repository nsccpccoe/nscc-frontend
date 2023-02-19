import React from 'react'
import styles from './EventDetails.module.css'

const EventDetails = () => {
    return (
        <div className={styles.main}>
            <h1>Event Details</h1>


            <div className={styles.content}>
                <div>
                    <p>Registration starts on:-</p>
                    <p>Event starts on:-</p>
                    <p>Results will be declared on:-</p>
                </div>
                <div>
                    <p>Registration ends on :-</p>
                    <p>Event ends on:-</p>
                    <p>Organized by:-</p>
                </div>
            </div>
        </div>
    )
}

export default EventDetails