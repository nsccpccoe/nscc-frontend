import React from 'react'
import styles from './EventRow.module.css'

type ElementProps = {
    eventName: string;
    date: string;
}
const EventRow: React.FC<ElementProps> = ({ eventName, date }) => {
    return (
        <div className={styles.row}>
            <p>{eventName}</p>
            <p>{date}</p>
        </div>
    )
}

export default EventRow