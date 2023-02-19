import React from 'react'
import AboutEvent from './AboutEvent';
import EventDetails from './EventDetails';
import Prizes from './Prizes'
import Rules from './Rules'

interface rules {
    id: number,
    text: string;
}

const rules = [
    {
        id: 1,
        text: 'Welcome to the Landing Page Creation and Marketing Event! In this exciting competition, participants will have eight days, starting at 8:00 AM on January 22nd, 2023, to create and submit a landing page.'
    },
    {
        id: 2,
        text: 'Welcome to the Landing Page Creation and Marketing Event! In this exciting competition, participants will have eight days, starting at 8:00 AM on January 22nd, 2023, to create and submit a landing page.'
    },
    {
        id: 3,
        text: 'Welcome to the Landing Page Creation and Marketing Event! In this exciting competition, participants will have eight days, starting at 8:00 AM on January 22nd, 2023, to create and submit a landing page.'
    },
    {
        id: 4,
        text: 'Welcome to the Landing Page Creation and Marketing Event! In this exciting competition, participants will have eight days, starting at 8:00 AM on January 22nd, 2023, to create and submit a landing page.'
    },
    {
        id: 5,
        text: 'Welcome to the Landing Page Creation and Marketing Event! In this exciting competition, participants will have eight days, starting at 8:00 AM on January 22nd, 2023, to create and submit a landing page.'
    },
]

const events = [
    {
        id: 1,
        text: `Welcome to the Landing Page Creation and Marketing Event! In this exciting competition, participants will have eight days, starting at 8:00 AM on January 22nd, 2023, to create and submit a landing page based on a theme that will be provided. The projects will then be displayed on our club's website, where participants can engage in marketing efforts to get more votes for their project. Voting and submission will end at 11:59 PM on February 29th, 2023.`
    }
]

const EventContent = () => {
    return (
        <div>
            <EventDetails />
            <AboutEvent propWhichIsArray={events} />
            <Rules propWhichIsArray={rules} />
            <Prizes />
        </div>
    )
}

export default EventContent