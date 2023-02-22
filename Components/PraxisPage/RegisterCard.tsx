import classes from "./RegisterCard.module.css";
import computerPng from "../../public/computer.png";
import Image from "next/image";
import Link from "next/link";
function RegisterCard() {
  return (
    <div className={classes.container}>
      <div className={classes.contentImg}>
        <div className={classes.content}>
          <p>Coding Contest</p>
          <h1>Coding Wars</h1>
          <p>29/01/2023 11:59 PM IST</p>
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
