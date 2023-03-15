import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { FluidContainer } from "../../../Components/FluidContainer/FluidContainer";
import WebXploreSubmissionsPage from "../../../Components/WebXploreSubmissionsPage";

function WebXploreSubmissions() {

  return (
    <>
      <Head>
        <title>
          WebXplore Hackathon Submissions | Newton School Coding Club | Pimpri Chinchwad College of Engineering
        </title>
        <meta name="description" content="Webexplorer hackathon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <FluidContainer /> */}
      <ToastContainer />
      <WebXploreSubmissionsPage />
    </>
  );
}

export default WebXploreSubmissions;
