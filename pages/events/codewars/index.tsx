import Head from "next/head";
import Content from "../../../Components/PraxisPage/Content";
import EventContent from "../../../Components/PraxisPage/EventContent";

function PraxisPage() {
  return (
    <>
      <Head>
        <title>NSCC - PRAXIS Event</title>
        <meta name="description" content="Praxis event" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{background: 'linear-gradient(0deg, #161326 0%, rgba(22, 19, 38, 0) 100%)'}}>
        <Content />
        <EventContent />
      </div>
    </>
  );
}

export default PraxisPage;
