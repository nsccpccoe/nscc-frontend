import Head from "next/head";
import Landing from "../../Components/AllEventPage/Landing";

function EventPage() {
  return (
    <>
      <Head>
        <title>NSCC PCCOE Event</title>
        <meta name="description" content="NSCC Events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}

export default EventPage;
