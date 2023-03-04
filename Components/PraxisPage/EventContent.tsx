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
        text: 'The coding contest is open to college students, including those pursuing undergraduate, diploma, and high school education.'
    },
    {
        id: 2,
        text: 'All college students who meet the eligibility criteria mentioned above are eligible to participate in Round 1.'
    },
    {
        id: 3,
        text: 'Overall top 100 participants from the leaderboard will be eligible to participate in Round 2. Participants with confirmed invalid participation will be excluded from the leaderboard.'
    },
    {
        id: 4,
        text: 'All participants are expected to abide by the code of conduct during the contest. Participants found to be violating the code of conduct will be disqualified from the contest.'
    },
    {
        id: 5,
        text: 'The results of the contest will be declared within a week of the completion of Round 2. The results will be final and binding on all participants.'
    },
    {
        id: 6,
        text: 'The top five participants in the contest will be awarded cash prizes, as announced before the start of the contest. Additionally, all participants who successfully complete the contest will be awarded a participation certificate.'
    },
    {
        id: 7,
        text: 'Any disputes or issues regarding the contest or its rules will be resolved by the organizing committee, and their decision will be final and binding on all participants.'
    },
    {
        id: 8,
        text: 'The organizing committee reserves the right to make changes to the rules at any time before or during the contest. Any changes made will be communicated to the participants in advance.'
    },
]

const events = [
    {
        id: 1,
        text: `Join the biggest coding competition of the year!`
    },
    {
        id: 2,
        text: `The Newton School Coding Club, in collaboration with CodeChef PCCOE Chapter, PCCOE IEEE student branch, and Information Technology Student Association, presents a major intercollege coding event as part of the "Praxis" flagship event.`
    },
    {
        id: 3,
        text: ` This two-round competition is open to all students from various colleges and branches. The competition features online and offline rounds with challenging problems. Don't miss your chance to participate and showcase your coding skills!`
    },
    {
        id: 4,
        text: `Don't miss your chance to participate and showcase your coding skills!`
    },
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