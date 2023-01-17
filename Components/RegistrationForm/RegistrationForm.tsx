import React, { useCallback, useEffect, useState } from "react";
import classes from "./RegistrationForm.module.css";
import { FluidContainer } from "../FluidContainer/FluidContainer"
import { ToastContainer } from "react-toastify";
import { toast, } from "react-toastify";
import { Rings } from "react-loader-spinner";
import Link from "next/link";
import { Event } from "../interfaces/event.interface"

interface ElementProps {
  eventName: string;
}
// interface RegestrationFormRequirement {
//   type:"text" | "options",
//   name: string;
//   label: string;
//   placeholder: string;
//   value: string;
//   mutable: boolean
// }

export interface TextField {
  type: "text"
  name: string
  label: string
  placeholder: string
  value: string
  mutable: boolean
  regex: string
}
export interface SelectField {
  type: "options"
  name: string
  label: string
  options: (string | number)[]
  value: string
  mutable: boolean
}

export type RegestrationFormRequirement = SelectField | TextField

const RegistrationForm = (props: ElementProps) => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Record<string, string>>({});
  const [eventData, setEventData] = useState<Event>()
  const [fields, setfields] = useState<RegestrationFormRequirement[]>([]);
  const [token, settoken] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    // Perform localStorage action
    settoken(localStorage.getItem("accessToken") || "");
  }, []);

  const fetchDataHandler = useCallback(async () => {

    if (Boolean(props.eventName) === false) return

    fetch(`https://asia-south1-nsccpccoe.cloudfunctions.net/events/${props.eventName}`)
      .then(result => result.json() as Promise<{
        isError: boolean,
        data: Event
      }>)
      .then(result => {
        setEventData(result.data)
      })

    if (Boolean(token) === false) return

    fetch(`https://asia-south1-nsccpccoe.cloudfunctions.net/register/${props.eventName}/status`,
      { headers: { authorization: `Bearer ${token}` }, })
      .then(result => result.json())
      .then(status => setIsRegistered(!!status.data.registered));

    fetch(
      `https://asia-south1-nsccpccoe.cloudfunctions.net/register/${props.eventName}/fields`,
      { headers: { authorization: `Bearer ${token}` }, }
    )
      .then(result => result.json() as Promise<{
        isError: boolean,
        data: {
          fields: RegestrationFormRequirement[]
        }
      }>)
      .then(result => {
        const userData: Record<string, string> = {};
        result.data.fields.forEach(ele => {
          userData[ele.name] = ele.value;
          if (ele.type == "options") {
            userData[ele.name] = ele.value || String(ele.options[0]);
          }
          else {
            userData[ele.name] = ele.value;
          }
        })

        setData(userData);
        setfields(result.data.fields)
      })

  }, [props.eventName, token]);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  const handleInputChange = (name: string, value: string) => {

    console.log(name, value)

    data[name] = value;
    setData(JSON.parse(JSON.stringify(data)));

    // console.log(data)
  }

  const handleRegistration = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    console.log(data)
    try {
      const response = await fetch(
        `https://asia-south1-nsccpccoe.cloudfunctions.net/register/${props.eventName}`,
        {

          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",

          },
          body: JSON.stringify(data),
        }
      );

      // console.log(response.text())
      if (!response.ok) {
        if (response.status == 400) {
          const data = await response.json();
          throw new Error(data.errorMessage);
        }else{
          throw new Error(response.status + " " + response.statusText)
        }
      }

      const sendedata = await response.json();
      setData(sendedata);

    } catch (error: any) {
      toast(error.toString(), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }, [props.eventName, data, token]);

  if (error) {
    return (
      <div className={classes.container}>{error}</div>
    )
  }

  if (eventData === undefined) {
    return (
      <div className={classes.container}>
        <Rings
          height="80"
          width="80"
          color="#7a9ce0"
          radius="6"
          wrapperStyle={{ margin: "auto" }}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    )
  }

  console.debug(isRegistered);
  return (
    <div className={classes.formcontainer}>
      <FluidContainer />
      <ToastContainer />
      <div className={classes.regform}>
        <form className={classes.container} onSubmit={handleRegistration}>
          <p className={classes.heading}>Registration Form</p>
          <h1 className={classes.displayName}>{eventData?.displayName}</h1>
          <p className={classes.subtitle}>{eventData?.subtitle}</p>
          <Link className={classes.eventPageLink} href={eventData.eventPage.link || "#"}>Prizes and Goodies - Learn More</Link>
          {fields.map((e) => {
            return (
              <div key={e.name} className={classes.labelcontainer}>
                <label className={classes.labels} htmlFor={e.name}>{e.label}</label>
                {
                  e.type == "options" &&
                  <select
                    id={e.name}
                    name={e.name}
                    required
                    value={data[e.name]}
                    disabled={!e.mutable || eventData.endAt < Date.now() || isRegistered}
                    onChange={(event) => handleInputChange(e.name, event.target.value)}
                  >
                    {e.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                }
                {
                  e.type == "text" && <input
                    id={e.name}
                    type="text"
                    name={e.name}
                    required
                    value={data[e.name]}
                    placeholder={e.placeholder}
                    disabled={!e.mutable || isRegistered}
                    pattern={e.regex}
                    onChange={(event) => handleInputChange(e.name, event.target.value)}
                  />
                }

              </div>
            )
          })}
          {!token &&
            <Link className={classes.loginPageLink} href="/auth?redirect=/events/register/webxplore/">Login to Register for Event</Link>
          }
          {token &&
            <div className="buttonreg">
              <button type="submit" disabled={isRegistered}>
                {
                  isRegistered
                    ? 'Registered'
                    : `Register for ${eventData?.displayName}`
                }
              </button>

            </div>
          }
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
