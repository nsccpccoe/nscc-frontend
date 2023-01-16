import React, { useCallback, useEffect, useState } from "react";
import classes from "./RegistrationForm.module.css";
import { FluidContainer } from "../FluidContainer/FluidContainer"
import { ToastContainer } from "react-toastify";
import { style } from "@mui/system";
import { eventNames } from "process";
import { TRUE } from "sass";
import { toast, } from "react-toastify";
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
  const [fields, setfields] = useState<RegestrationFormRequirement[]>([]);
  const [token, settoken] = useState("");



  useEffect(() => {
    // Perform localStorage action
    settoken(localStorage.getItem("accessToken") || "");
  }, []);

  //  console.log(token,"gandu")


  const fetchDataHandler = useCallback(async () => {
    // console.log(token);
    try {
      const response = await fetch(
        `https://asia-south1-nsccpccoe.cloudfunctions.net/register/${props.eventName}/fields`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!! Please try again later.");
      }

      const {data} = await response.json() as {
        isError: boolean,
        data: {
          fields: RegestrationFormRequirement[]
        }
      }
  
      const userData: Record<string, string> = {};
      data.fields.forEach(ele => {
        userData[ele.name] = ele.value;
        if(ele.type == "options") {
          userData[ele.name] = ele.value || String(ele.options[0]);
        }
        else {
          userData[ele.name] = ele.value;
        }
      })

      setData(userData);
      setfields(data.fields)
    } catch (error) {

      setError
    }
  }, [props.eventName,token]);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);
  // console.log(data);

  const handleInputChange = (name: string, value: string) => {

    console.log(name, value)
   
      data[name]=value;
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
      if (!response.ok) {
        throw new Error("Something went wrong!!! Please try again later.");
      }

      const sendedata = await response.json();
      setData(sendedata);

    } catch (error) {
      toast(JSON.stringify(error), {
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
  }, [props.eventName, data,token]);



   console.log(fields);

  return (
    <>
      <div className={classes.formcontainer}>
        <FluidContainer />
        <ToastContainer />
        <div className={classes.regform}>
          <form className={classes.container} onSubmit={handleRegistration}>
            <h1>Registration Form</h1>
            {fields.map((e) => {
              return (

                <div key={e.name} className={classes.labelcontainer}>
                  <label className={classes.labels}>{e.label}</label>
                  {
                    e.type == "options" &&
                    <select
                      name={e.name}
                      required
                      value={data[e.name]}
                      disabled={!e.mutable}
                      onChange={(event) => handleInputChange(e.name, event.target.value)}
                      >
                      {e.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  }
                  {
                    e.type == "text" && <input
                      type="text"
                      name={e.name}
                      required
                      value={data[e.name]}
                      placeholder={e.placeholder}
                      disabled={!e.mutable}
                      pattern={e.regex}
                      onChange={(event) => handleInputChange(e.name, event.target.value)}
                    />
                  }

                </div>
              )
            })}
            <div className="buttonreg">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
