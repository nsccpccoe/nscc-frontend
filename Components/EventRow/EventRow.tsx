import React from 'react'
import styles from './EventRow.module.css'

const EventRow = () => {
    return (
        <div className={styles.row}>
            <p>Event Name</p>
            <p>Date</p>
        </div>
    )
}

export default EventRow