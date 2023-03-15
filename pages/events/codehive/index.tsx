import Head from "next/head";
import Script from "next/script";
import Landing from "../../../Components/EventPage/Landing";
import { FluidContainer } from "../../../Components/FluidContainer/FluidContainer";
import Eventdescription from "../../../Components/EventPage/Eventdescription"


const eventDetail = [
  {
    id: 1,
    text: 'The Contest will be of total 3 hrs conducted on HackerRank Platform.'
  },
  {
    id: 2,
    text: 'It will consist of total 8 DSA problems.'
  },
  {
    id: 3,
    text: 'First 3 problems will be easy based on computer programming fundamentals like if...else, loop, functions, etc.'
  },
  {
    id: 4,
    text: 'Next 3 problems will be of medium level where you will find problems based on basic DSA like Array, Searching, Sorting and Number Theory.'
  },
  {
    id: 5,
    text: 'The last 2 problems will be NSCC Special :)'
  }
]

const descArray = [{
  id: 1,
  text: 'Experience the adrenaline rush by participating in CodeHive.Participate in CodeHive on the day by solving 8 challenging problems tailored for all levels curated by our top programmers. It is a perfect opportunity to grind yourself for programming contests and placements. Results will be announced after running a plagiarism check.'
},
{
  id: 2,
  text: 'oin us in celebrating Republic Day with our first ever coding contest! The 3 hours contest comprises 8 problems, 4 cake-walk problems,  2 medium-level problems, and 2 hard-level problems. You have the freedom to choose any language of your choice. Each problem will have partial marking, and the winner will be the participant who scores maximum points at the earliest.'
},
{
  id: 3,
  text: 'The problems have been framed by top competitive programmers at our institute and cover a wide range of topics, in both basic and advanced data structures and algorithms. These problems will be beneficial to brush up your concepts and find your loopholes. This contest also provides a great opportunity to prepare for CodeRush-X, which is a Grand Coding Contest conducted by Newton School. It will also assist in the upcoming off-campus placement season.'
},
{
  id: 4,
  text: `We will also be sharing text and video editorials after the contest. Don't miss this chance to challenge yourself and improve your coding skills. Waiting eagerly to see your solutions!`
}]

const rulesArray = [
  {
    id: 1,
    text: 'Should be an enthusiastic coder.'
  },
  {
    id: 2,
    text: 'Should have an account on HackerRank platform.'
  },
  {
    id: 3,
    text: 'To be eligible for prices, make sure you register on our NSCC Website.'
  }
]

function Event() {
  return (
    <>
      <Head>
        <title>Praxis CodeWars | Newton School Coding Club | Pimpri Chinchwad College of Engineering</title>
        <meta name="description" content="Codehive coding contest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FluidContainer />
      <Landing name='CodeHive' type='Coding Contest' date='26/01/2023, 02:00 PM - 05:00 PM IST' content='Unlock your coding potential with our Coding Contest! 8 challenging
          problems tailored for all levels. Perfect opportunity to prepare for
          competitions and placements. Curated by top competitive programmers.' regLink="/events/register/codehive" />
      <Eventdescription
        propWhichIsArray={descArray}
        propWhichIsArray2={rulesArray}
        eventDetail={eventDetail} />

    </>
  );
}

export default Event;
