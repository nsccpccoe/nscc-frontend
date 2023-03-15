import Head from "next/head";
import { useRouter } from "next/router";
import RegisterationForm from "../../../Components/RegistrationForm/RegistrationForm";

function Register() {
  const router = useRouter();
  // console.log(router);
  const eventName =
    typeof router.query.eventName == "string" ? router.query.eventName : "";
  // console.log(eventName);
  return (
    <>
      <Head>
        <title>Event Registration Form</title>
        <meta name="description" content="NSCC Registeration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterationForm eventName={eventName} />
    </>
  );
}

export default Register;
