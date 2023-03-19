import TimelineF from "../Components/Timeline/Timeline";
import Header from "../Components/Header/Header";

import Head from "next/head";
import About from "../Components/AboutNSCC/About";
import ClubActivities from "../Components/ClubActivites/ClubActivities";
import Footer from "../Components/Footer/Footer";

import Landing from "../Components/HomePage/Landing";

// import { Inter } from '@next/font/google'
import { auth } from "../firebase";

import { useState, useEffect } from "react";
import CardElements from "../Components/HomePage/CardElements";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Head>
        <title>
          Newton School Coding Club | Pimpri Chinchwad College of Engineering
        </title>
        <meta name="description" content="NSCC Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
        <CardElements />
        <About />
        <TimelineF />
        <ClubActivities />
      </main>
    </>
  );
}
