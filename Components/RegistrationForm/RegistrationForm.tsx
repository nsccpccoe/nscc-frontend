import React, { useCallback, useEffect, useState } from "react";
import classes from "./RegistrationForm.module.css";
import { FluidContainer } from "../FluidContainer/FluidContainer"
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Rings } from "react-loader-spinner";
import Link from "next/link";
import { Event } from "../interfaces/event.interface"

interface ElementProps {
  eventName: string;
}

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
      const request = fetch(
        `https://asia-south1-nsccpccoe.cloudfunctions.net/register/${props.eventName}`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",

          },
          body: JSON.stringify(data),
        }
      )
      .then(res => res.json())
      .then(sendedata => {
        setData(sendedata);
        setIsRegistered(true);
      })
      .catch(err => {
        throw new Error(err.errorMessage || err.message || JSON.stringify(err))
      })

      toast.promise(request, {
        pending: isRegistered ? "Updating Profile" : "Registration in Progress",
        error: isRegistered ? "Failed to Update Profile" : "Registration Failed",
        success: isRegistered ? "Profile Updated Successfully" : "Registration Successfull"
      }, {
        position: "top-right",
        theme: "dark",
      })

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

  const formLocked = isRegistered && eventData.startAt < Date.now();
  const eventEnded = eventData.endAt < Date.now();

  return (
    <div className={classes.formcontainer}>
      <FluidContainer />
      <ToastContainer />
      <div className={classes.regform}>
        <form className={classes.container} onSubmit={handleRegistration}>
          <p className={classes.heading}>Registration Form</p>
          <p className={classes.title}>Newton School Coding Club</p>
          <h1 className={classes.displayName}>{eventData?.displayName}</h1>
          <p className={classes.subtitle}>{eventData?.subtitle}</p>
          <Link className={classes.eventPageLink} href={eventData.eventPage.link || "#"}>Prizes and Goodies - Learn More</Link>
          {
            eventEnded &&
            <p>{eventData.displayName} has Ended!!!</p>
          }
          { !eventEnded &&
            fields.map((e) => {
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
                    disabled={!e.mutable || formLocked}
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
                    disabled={!e.mutable || formLocked}
                    pattern={e.regex}
                    onChange={(event) => handleInputChange(e.name, event.target.value)}
                  />
                }

              </div>
            )
          })}
          {!token && !eventEnded &&
            <Link className={classes.loginPageLink} href={`/auth?redirect=${eventData.registration.link}`}>Login to Register for Event</Link>
          }
          {
            token && fields.length == 0 &&
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
          }
          {
            !eventEnded && isRegistered &&
            <Link className={classes.eventPageLink} href={eventData.community.link}>{eventData.community.displayText}</Link>
          }
          {token && fields.length > 0 && !eventEnded &&
            <div className="buttonreg">
              <button type="submit" disabled={formLocked}>
                {
                  isRegistered
                    ? eventData.startAt < Date.now()
                      ? 'Registered'
                      : 'Update Your Profile'
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
