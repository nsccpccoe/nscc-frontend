
import classes from "./CardElements.module.css";

import { useState, useEffect } from 'react'
import Link from "next/link";
function CardElements() {

  interface EventStore {
    id: string
    subtitle: string
    description: string
    endAt: number
    startAt: number
    displayName: string
    eventPage: {
      link: string
      type: "onsite" | "offsite",
    }
  }
  useEffect(() => {
    setLoading(true)
    fetch('https://asia-south1-nsccpccoe.cloudfunctions.net/events')
      .then((res) => res.json())
      .then((result) => {
        setData(result.data)
        setLoading(false)
      })
  }, [])

  const [data, setData] = useState<EventStore[]>([])
  const [isLoading, setLoading] = useState(false)

  return (
    <div className={classes.cardcontainer}>
      {
        data ? data.map((e) => {
          return (<>
            <Link key={e.id} className={classes.linkcard} href={e.eventPage.link}>
              <div className={classes.container}>
                <div className={classes.heading}>
                  <h1>{e.displayName}</h1>
                </div>
                <div className={classes.date}>
                  <p>{new Date(e.startAt).toLocaleDateString('en-IN')} {new Date(e.startAt).toLocaleTimeString('en-IN')} -  {new Date(e.endAt).toLocaleDateString('en-IN')} {new Date(e.endAt).toLocaleTimeString('en-IN')}</p>
                </div>
                <div className={classes.desc}>
                  <p>
                    {e.description}
                  </p>
                </div>
              </div>
            </Link>
          </>)
        }) : <p>loading...</p>
      }
    </div>
  );
}

export default CardElements;
