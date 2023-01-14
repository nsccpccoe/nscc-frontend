
import React, { useState } from 'react'

import { ToastContainer } from "react-toastify";
import { toast, } from "react-toastify";
import { auth } from "../firebase";
import { sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { FluidContainer } from "../Components/FluidContainer/FluidContainer"
import styles from "../styles/auth.module.css"
import { FirebaseError } from "firebase/app";
import { style } from '@mui/system';

const Forgetpassword = () => {
  const [email, setEmail] = useState("");

  const forgetpassword = (email: string) => {
    return sendPasswordResetEmail(auth, email, { url: `${location.origin}/auth` })
  }
  return (
    <>
    <div   className={styles.forgetcard} >
      <FluidContainer />
      <ToastContainer />

      <div className={styles.forgetcontainerloginform} id="containerloginform">
        <h1 className={styles.forgetupheader} style={{fontSize:"25px"}}>Forget Password</h1>
        <form  className={styles.formcontainerloginformforget}
          onSubmit={ async (e) => {
            e.preventDefault()
            try {
              const result = await forgetpassword(email);
              toast(`An email is sent to ${email} for password reset instructions`, {
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
            catch (err) {
           toast("Bhai kya kar rha tu ", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              }
              )
            }
          }}
        >
          <div>
          <input type="text"
            name='email'
            autoComplete='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your regestered email id"
          />
          </div>
          <div>
          <button   className={styles.forgetpasswordbutton} type='submit'>Submit</button>
          </div>
        </form>
      </div>

    </div>
    </>
  )
}

export default Forgetpassword;