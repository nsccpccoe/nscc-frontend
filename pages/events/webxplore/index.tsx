import Head from "next/head";
import Script from "next/script";
import Landing from "../../../Components/EventPage/Landing";
import { FluidContainer } from "../../../Components/FluidContainer/FluidContainer";
import Eventdescription from "../../../Components/EventPage/Eventdescription";

function Event() {
  const descArray = [{
    id: 1,
    text: 'A hackathon is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program.    Solve real-world problems by participating in WebXplore. Present the topic wisely and creatively to receive maximum score and bag your position on the leaderboard.'
  },
  {
    id: 2,
    text: 'WebXplore is a one week long hackathon which will help participants to enhance their Web Development Skills as well as Marketing skills. We are expecting only one page website based on the theme which will be released on 22nd Jan. Register yourself for any further updates from us. Check more detailed breakdown of this hackathon below:'
  },
  {
    id: 7,
    text: 'For FY and SY students:- Design and implement a simple landing page with basic functionalities.'
  },
  {
    id: 8,
    text: 'For TY and BE students:- Design and implement the landing page with multiple functionalities. Usage of animated containers will be appreciated. Make the page responsive.'
  }]

  const eventDetail = [
    {
      id: 1,
      text: 'Problem Statement will be released on 22nd January at 08:00 AM in the morning.'
    },
    {
      id: 2,
      text: 'Right after the release of problem statement; submissions and voting will start.'
    },
    {
      id: 3,
      text: 'For submissions you need to come back to this page. Starting 22nd till 29th Jan, you see will be allowed to submit your website url from here.'
    },
    {
      id: 4,
      text: 'On Submiting Website URL, our bots will take a screenshot of your site and it will be displayed here for voting. You will also receive one unique url using which you can share your submission with your friends and family to receive maximum votes.'
    },
    {
      id: 5,
      text: 'Submission phase will end on 29th Jan, 11:59:59 PM.'
    }
  ]

  const evaluationArray = [
    {
      id: 1,
      text: 'Evaluation: Final Score = LightHouse Score + Number of Votes'
    },
    {
      id: 2,
      text: '1. Lighthouse score:- We will evaluate this score based on Performance, Accessibility, Best Practices and Optimisation of your website. Check on youtube how to calculate a lighthouse score for any website.'
    },
    {
      id: 3,
      text: '2. Number of Votes:- You can personally promote your Submission and get likes for it. Your friends, family and relatives can help you become a winner by giving you maximum likes on the submission listed on our website. You will also get a unique url to help your maximize your chance of victory!'
    },
    {
      id: 4,
      text: 'The Combination of the above two will make you a winner !'
    }
  ]

  const ruleArray = [
    {
      id: 1,
      text: 'Individual participation only'
    },
    {
      id: 2,
      text: 'Submission of website URL must be done on or before 29/01/2023'
    },
    {
      id: 3,
      text: 'It is allowed to copy paste code snippets (not full website) from any online resources! Make sure your website does not go out of theme'
    },
    {
      id: 4,
      text: 'We reserve the rights to disqualify any spam or invalid submissions'
    }
  ]

  return (
    <>
      <Head>
        <title>
          WebXplore Hackathon | Newton School Coding Club | Pimpri Chinchwad
          College of Engineering
        </title>
        <meta name="description" content="WebXplore Hackathon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FluidContainer />
      <Landing
        name="WebXplore"
        type="Hackathon"
        date="22/01/2023 8:00 PM - 29/01/2023 11:59 PM IST"
        content="Unleash your web development skills in our 8-day hackathon! Explore trending tech, build and showcase your website, win prizes and goodies."
        regLink="/events/register/webxplore" />
      <Eventdescription
        propWhichIsArray={descArray}
        propWhichIsArray2={ruleArray}
        eventDetail={eventDetail}
        evaluationArray={evaluationArray}/>
    </>
  );
}

export default Event;
