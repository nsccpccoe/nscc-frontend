import classes from "./RegisterCard.module.css";
import computerPng from "../../public/computer.png";
import Image from "next/image";
import Link from "next/link";
function RegisterCard() {
  return (
    <div className={classes.container}>
      <div className={classes.contentImg}>
        <div className={classes.content}>
          <p >Coding Contest</p>
          <h1>CodeWars</h1>
          <p>14/03/2023 09:30 PM - 15/03/2023 12:05 AM </p>
        </div>
        <div className={classes.img}>
          <Image src={computerPng} alt="" />
        </div>
      </div>
      <div className={classes.button}>
      <button><Link style={{textDecoration:"none" ,color:"inherit"}} href="/events/register/codewars/">Register</Link></button>
      </div>
    </div>
  );
}

export default RegisterCard;
