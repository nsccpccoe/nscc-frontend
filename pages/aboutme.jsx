import React from 'react'
import   styles from "../styles/aboutme.module.css"

import sampleimg from  "../public/Screenshot 2022-03-01 053227.png"
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FluidContainer } from "../Components/FluidContainer/FluidContainer"
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), './teamsinfo.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return {
    props: objectData
  }
}

const aboutme = (props) => {


  return (
    <>
        <FluidContainer/>
    <div className="aboutme">
       
    <section className={styles.speakerssectionthree}>
        <div className={styles.container}>
           <div className={`${styles.sectitle}  ${styles.textcenter} `}>
            <span className={styles.title}> Our Team</span>
            <span className={styles.title}> Our Team</span>
        </div>
        {props.Teams.map((e) => 
 <div key={e.teamname} className="teamsection">
 <div  className={styles.teamheader}>{e.teamname}</div>
<div className={styles.row}>
    {e.collections.map(ele=> 
    <div   key={ele.id} className={`${styles.speakerblockthree} ${styles.colxl3} ${styles.collg4}  ${styles.colmd6} ${styles.colsm12} ${styles.wow} ${styles.fadeInUp}`}>
               
        <div className={styles.innerbox}>
            <div className={styles.imagebox}>
                <figure className={styles.image}><a><Image  className={styles.img} src={sampleimg} alt=""/></a>
                </figure>
            <div>{ele.name}</div>
            </div>
            <div className={styles.infobox}>
                <h4 className={styles.name}><a href="#">{ele.position}</a></h4><span className={styles.designation}>Team
                    Manager</span>
            </div>
            <div className={styles.socialbox}>
                <ul className={`${styles.sociallinks} ${styles.socialiconcolored}`}>
                <li><a href={ele.linkedinlink}><i >{<LinkedInIcon style={{fontSize:"30px" ,margin:"2px -2px" }}/>}</i></a></li>
                    <li><a href={ele.githublink}><i >{<GitHubIcon style={{fontSize:"30px" ,margin:"2px -2px" }}/>}</i></a></li>
                    <li><a href={ele.twitterlink}><i >{<TwitterIcon style={{fontSize:"30px" ,margin:"2px -2px" }}/>}</i></a></li>
                </ul>
            </div>
        </div>
    </div>
    )}
</div>
</div>
        )}
          
        </div>
    </section>
    </div>
    </>
  )
}

export default aboutme