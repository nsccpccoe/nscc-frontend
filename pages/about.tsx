
import React, { useState } from 'react'
import style from "../styles/about.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from "next/image";
import img from "../public/event.png"


const About = () => {

  return (
    <>
       <section className={style.speakerssectionthree}>
        <div className={style.container}>
            <div className={`${style.sectitle} ${style.textcenter}`}>
                {/* <span className={style.title}>Team</span> */}
                <h2>Our Team</h2>
            </div>

                <div className={`${style.speakerblockthree} ${style.colxl3} ${style.collg4} ${style.colmd6} ${style.colsm12}  ${style.wow}  ${style.fadeInUp}`}>
                    <div className={style.innerbox}>
                        <div className={style.imagebox}>
                            <figure className={style.image}><a href="#"></a>
                            <Image src={img} alt="Photu" />
                            </figure>
                        </div>
                        <div className={style.infobox}>
                            <h4 className={style.name}><a href="#">Lorem Ipsum</a></h4><span className={style.designation}>Team
                                Manager</span>
                        </div>
                        <div className={style.socialbox}>
                            <ul className={`${style.sociallinks} ${style.socialiconcolored}`}>
                                <li><a href="" className={style.a}><i><LinkedInIcon/></i></a></li>
                                <li><a href="" className={style.a}><i><GitHubIcon/></i></a></li>
                                <li><a href="" className={style.a}><i><InstagramIcon/></i></a></li>
                                <li><a href ="" className={style.a}><i><TwitterIcon/></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

export default About;