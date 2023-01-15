import React from 'react'

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