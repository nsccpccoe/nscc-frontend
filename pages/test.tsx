import React from 'react'
import Contest_desc from '../Components/Contest_desc/Contest_desc'
import Contest_prizes from '../Components/Contest_prizes/Contest_prizes'
import OngoingEvents from '../Components/OngoingEvents/OngoingEvents'
import PastEvents from '../Components/PastEvents/PastEvents'
import UpcomingEvents from '../Components/UpcomingEvents/UpcomingEvents'

const test = () => {
  return (
    <div>
      <OngoingEvents />
      <UpcomingEvents />
      <PastEvents />
    </div>
  )
}

export default test