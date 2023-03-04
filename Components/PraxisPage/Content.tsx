import classes from "./Content.module.css";
import RegisterCard from "./RegisterCard";
import aachal from "../../public/Aachal.png";
import Image from "next/image";

function Content() {
  return (
    <div  className={classes.container}>
      <div className={classes.headingContent}>
        <h1>Pimpri Chinchwad College of Engineering, Pune</h1>
        <p>brings to you the best collaboration of 2023</p>
      </div>
      <div className={classes.collab}>
        <div className={classes.partner}>
          <h2>Newton School</h2>
          <h1>Coding Club</h1>
        </div>
        <div className={classes.add}>
          <h1>+</h1>
        </div>
        <div className={classes.partner}>
          <h2>ITSA</h2>
          <h1>Praxis &apos;23</h1>
        </div>
      </div>
      <div className={classes.present}>
        <p>Presents</p>
      </div>
      <div className={classes.registerCard}>
        <RegisterCard />
      </div>
      <div style={{display:"none"}}  className={classes.sponser}>
        <p>Sponsored by</p>
        <div className={classes.images}>
          <Image src={aachal} alt="" />
          <Image src={aachal} alt="" />
          <Image src={aachal} alt="" />
          <Image src={aachal} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Content;
