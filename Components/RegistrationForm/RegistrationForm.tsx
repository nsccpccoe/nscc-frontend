import React, { useCallback, useEffect, useState } from "react";
import classes from "./RegistrationForm.module.css";

interface ElementProps {
  eventName: string;
}

const RegistrationForm = (props: ElementProps) => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState([]);

  let token: string = "";
  useEffect(() => {
    // Perform localStorage action
    token = localStorage.getItem("accessToken") || "";
  }, []);

  const fetchDataHandler = useCallback(async () => {
    // console.log(token);
    try {
      const response = await fetch(
        `https://asia-south1-nsccpccoe.cloudfunctions.net/register/${props.eventName}123/fields`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!! Please try again later.");
      }

      const data = await response.json();
      console.log(data);
      setData(data.fields);
    } catch (error) {
      // console.log(error);
      setError
    }
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    // Use formData to send a request to your server or perform other actions
  };
  return (
    <div className={classes.container}>
      <form>
        <h1>Registration Form</h1>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value="abc"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
