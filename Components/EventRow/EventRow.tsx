import Link from 'next/link';
import React from 'react'
import { Event } from '../interfaces/event.interface';
import styles from './EventRow.module.css'

type ElementProps = {
    event: Event
    eventName: string;
    date: string;
}

const EventRow: React.FC<ElementProps> = ({ event, eventName, date }) => {
    return (
        <Link
            href={event.eventPage.link}
            target={event.eventPage.type === "offsite" ? "_blank" : "_self"}
            className={styles.row}>
            <p>{eventName}</p>
            <p>{new Date(event.startAt).toLocaleString("en-IN")} - {new Date(event.endAt).toLocaleString("en-IN")}</p>
        </Link>
    )
}

export default EventRow