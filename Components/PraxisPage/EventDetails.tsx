import React from 'react'
import styles from './EventDetails.module.css'

const EventDetails = () => {
    return (
        <div className={styles.main}>
            <h1>Event Details</h1>


            <div className={styles.content}>
                <div>
                    <p>Registration starts on:- 27/11/2023</p>
                    <p>Event starts on:- 27/11/2023</p>
                    <p>Results will be declared on:- 27/11/2023</p>
                </div>
                <div>
                    <p>Registration ends on :- 27/11/2023</p>
                    <p>Event ends on:- 27/11/2023</p>
                    <p>Organized by:- 27/11/2023</p>
                </div>
            </div>
        </div>
    )
}

export default EventDetails