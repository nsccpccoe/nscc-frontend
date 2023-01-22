import React from 'react'
import   styles from "../styles/aboutme.module.css"

import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FluidContainer } from "../Components/FluidContainer/FluidContainer"
import dronimg from  "../public/Dronphotu.jpg"
import surajimg from "../public/suraj.jpg";
import viarjimg from  "../public/Viraj.png"
import aachalimg from "../public/Aachal.png"
import sarveshimg from "../public/Sarvesh.png"
import sarthakimg from "../public/Sarthak.png"
import vedangimg from  "../public/Vedang.png"
import pranvaimg from "../public/Pranav.png"
import sakshimg from "../public/sakshi.png"
import vedatnimg from "../public/Vedant.png"
import vyankatesh from "../public/Vyankatesh.png"
import gayatri from "../public/Gayatri.png"
import rajimg from  "../public/Rajpate.png"
import harhimg from "../public/Harsh.png"
import maithilimg from "../public/Maithilisude.png"
import aditya from  "../public/adiya.png"
import dhananjayimg from "../public/Dhananjay.png"
import onkarimg from  "../public/Onkar.png"
import vaishnaviimg from "../public/vaishanvi.png"
import rohannoobimg from "../public/Rohannoob.png"
import manthanimg from  "../public/Manthan.png"
import kavihsreeimg from "../public/kavishree.png"
import athravaimg from "../public/atharva.png"
import ruchimg from "../public/Rucha.png"
import darshanimg from  "../public/Darshan.png"
import karteekimg from "../public/karteek.png"
import ashishimg from  "../public/ashish.png"
import niveditaimg from "../public/Nivedita.png"
import shrunotiimg  from "../public/shrunoti.png"


const exportdata=[
    {
        Team:"Core Team",
        collections:[
            {
                id: 1,
                name: "Suraj Jha",
                position: "President",
                githublink: "https://github.com/jhasuraj01/",
                twitterlink: "https://twitter.com/jhasuraj01/",
                linkedinlink: "https://www.linkedin.com/in/jhasuraj01/",
                img:surajimg
            },
            {
                id: 2,
                name: "Aachal Modak",
                position: "Vice President",
                githublink: " https://github.com/aachal01",
                img:aachalimg
            },
            {
                id: 3,
                name: "Dron Rahangdale",
                position: "Content and Pr head",
                githublink: "https://github.com/Drontitan",
                twitterlink: "https://twitter.com/dron_rahangdale?t=xsGIQoduN2ZZBY6elPBrKA&s=08",
                linkedinlink: "https://www.linkedin.com/in/drontitan/",
                img:dronimg
            },
            {
                id: 4,
                name: "Sakshi Pore",
                position: "Marketing Head",
                githublink: "https://github.com/sakshipore",
                twitterlink: "https://twitter.com/sakshii_spamm28?t=2KtWPofahkzXme5SuBL9og&s=09",
                linkedinlink: "https://www.linkedin.com/in/sakshi-pore-9ab17a219/",
                img:sakshimg
            },
            {
                id: 5,
                name: "Pranav Masekar",
                position: "Technical Head",
                githublink: "https://github.com/PranavMasekar",
                twitterlink: "https://twitter.com/Pranav18vk?t=RbKra21IQ-XmqjAOIQg_SQ&s=09",
                linkedinlink: "https://www.linkedin.com/in/pranav-masekar-556534214",
                img:pranvaimg
            }
        ]
    },
    {
        Team:"Leads",
        collections:[
            {
                id: 6,
                name: "Karteek Ati",
                position: "DSA/CP Content Lead",
                githublink: "https://github.com/KarteekAti",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/karteekati/",
                img:karteekimg
            },
            {
                id: 7,
                name: "Vyankatesh Nyati",
                position: "DSA/CP Content Lead",
                githublink: "https://github.com/vyankatesh-nyati",
                twitterlink: "",
                linkedinlink: " https://www.linkedin.com/in/vyankatesh-nyati-a1aba0202/",
                img:vyankatesh
            },
            {
                id: 8,
                name: "Ashish Dhane",
                position: "DSA/CP Challenge Lead",
                githublink: "https://github.com/ashishbdhane",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/ashish-dhane/",
                img:ashishimg
            },
            {
                id: 9,
                name: "Onkar Jadhav",
                position: "Full Stack Development Lead",
                githublink: "https://github.com/Omkar76",
                twitterlink: "",
                linkedinlink: "https://linkedin.com/in/onkar76",
                img:onkarimg
            },
            {
                id: 10,
                name: "Dhananjay Gavali",
                position: "Mobile Development Lead",
                githublink: "https://github.com/dhgavali",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/dhgavali/",
                img:dhananjayimg
            },
            {
                id: 11,
                name: "Darshan Kasar",
                position: "Event Lead",
                githublink: "https://github.com/drshn-k/",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/darshan-kasar/",
                img:darshanimg
            },
            {
                id: 12,
                name: "Kavishree Meshram",
                position: "Design Lead",
                githublink: "https://github.com/Kavishree-M11",
                twitterlink: "https://twitter.com/kavishree_m?t=A-51wRsMtVQ_Pahw9f-qhw&s=08",
                linkedinlink: "https://www.linkedin.com/in/kavishree-meshram-2219b421b/",
                img:kavihsreeimg
            },
            {
                id: 13,
                name: "Rohan Chaudhari",
                position: "Design Lead",
                githublink: "https://github.com/rohan77988",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/rohan-chaudhari-b81803211/",
                img:rohannoobimg
            },
        ]
    },
    {
        Team:"Cordinators",
        collections:[
           
            {
                id: 14,
                name: "Atharva Khule",
                position: "Full Stack Development Co-Lead",
                githublink: " https://github.com/AtharvaKhule-12",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/atharva-khule-99b84a213",
                img:athravaimg
            },
           
            {
                id: 15,
                name: "Viraj Jadhav",
                position: "Dsa/Cp Content Co-lead",
                githublink: "https://github.com/virajjadhao5566",
                twitterlink: "https://twitter.com/viraj_jadhao__",
                linkedinlink: "https://www.linkedin.com/in/viraj-jadhao-67b222244/",
                img:viarjimg
            },
            {
                id: 16,
                name: "Sarvesh Powar",
                position: "Dsa/Cp Content Co-lead",
                githublink: "https://github.com/SA365-B?tab=repositories",
                twitterlink: "https://twitter.com/SarveshPowar7",
                linkedinlink: "https://www.linkedin.com/in/sarvesh-powar-a97a12209/",
                img:sarveshimg
            },
            {
                id: 17,
                name: "Gayatri Sharma",
                position: "Web-Development Co-lead",
                githublink: "https://github.com/gayatri228 ",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/gayatri-sharma-44944521b/ ",
                img:gayatri
            },
            {
                id: 18,
                name: "Manthan Patil",
                position: "Web-Development Co-lead",
                githublink: "https://github.com/Mpatil12",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/manthan-patil-15b67820b/  ",
                img:manthanimg
            },
            {
                id: 19,
                name: "Harsh Dandge",
                position: "Design & Social-Media Co-lead",
                githublink: "https://github.com/Harsh-dandge",
                twitterlink: "https://twitter.com/HarshDandge",
                linkedinlink: "https://www.linkedin.com/in/harsh-dandge-919888214/",
                img:harhimg
            },
            {
                id: 20,
                name: "Rucha Bachal",
                position: "Mobile Development Co-lead",
                githublink: "https://github.com/Ruchab25",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/rucha-bachal-34a93a223/",
                img:ruchimg
            },
            {
                id: 21,
                name: "Raj Pate",
                position: "Dsa/Cp Contest Co-lead",
                githublink: "https://github.com/rajpate77725",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/raj-pate-b54793221",
                img:rajimg
            },
            {
                id: 22,
                name: "Vedant Patil",
                position: "Dsa/Cp Contest Co-lead",
                githublink: "https://github.com/vedantpatil25",
                twitterlink: "https://twitter.com/vedantpatil2002",
                linkedinlink: " https://www.linkedin.com/in/vedant-patil-047194224/",
                img:vedatnimg
            },
            {
                id: 23,
                name: "Vedang Dadape",
                position: "Dsa/Cp Contest Co-lead",
                githublink: "https://github.com/Vedang12d",
                twitterlink: "",
                linkedinlink: "http://www.linkedin.com/in/vedangdadape",
                img:vedangimg
            },
            {
                id: 24,
                name: "Nivedita Birajdar",
                position: "Dsa/Cp Content Co-lead",
                githublink: "https://github.com/niveditavb05",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/nivedita-birajdar-2a29b4219/",
                img:niveditaimg
            },
            {
                id: 25,
                name: "Aditya Gavali",
                position: "Dsa/Cp Content Co-lead",
                githublink: "https://github.com/AdityaGavali",
                twitterlink: "https://twitter.com/adityagavali03?t=ruboghPF5JXWGpMxBmfs7A&s=09",
                linkedinlink: "https://www.linkedin.com/in/aditya-gavali-893931206/",
                img:aditya
            },
            {
                id: 27,
                name: "Shrunoti Deshmukh",
                position: "Full-Stack Development Co-lead",
                githublink: "https://github.com/Shrunoti-Deshmukh",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/shrunoti-deshmukh-0840451b5/",
                img:shrunotiimg
            },
            {
                id: 26,
                name: "Sarthak Gunjal",
                position: "Full-Stack Development Co-lead",
                githublink: "https://github.com/SarthakGunja",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/sarthak-gunjal-41368720a",
                img:sarthakimg
            },
            {
                id: 27,
                name: "Maithili Sude",
                position: "Event Management Co-lead",
                githublink: "https://github.com/Maithiligithub19",
                twitterlink: "",
                linkedinlink: "https://www.linkedin.com/in/maithili-sude-92b60023a",
                img:maithilimg
            },
            {
                id: 28,
                name: "Vaishanvi Jadhav",
                position: "Full Stack Development Co-lead",
                githublink: "https://github.com/Vaishnavijadhav31",
                twitterlink: "",
                linkedinlink: " https://www.linkedin.com/in/vaishnavi-jadhav-2a8bb7227/",
                img:vaishnaviimg
            },
           
        ]
    },
]

const team = () => {


  return (
    <>
        <FluidContainer/>
    <div className="aboutme">
       
    <section className={styles.speakerssectionthree}>
        <div className={styles.container}>
           <div className={`${styles.sectitle}  ${styles.textcenter} `}>
            <h1 className={styles.title}> Our Team</h1>
            <h1 className={styles.title}> Our Team</h1>
        </div>
        {exportdata.map((e) => 
 <div key={e.Team} className="teamsection">
 <div  className={styles.teamheader}>{e.Team}</div>
<div className={styles.row}>
    {e.collections.map(ele=> 
    <div   key={ele.id} className={`${styles.speakerblockthree} ${styles.colxl3} ${styles.collg4}  ${styles.colmd6} ${styles.colsm12} ${styles.wow} ${styles.fadeInUp}`}>
               
        <div className={styles.innerbox}>
            <div className={styles.imagebox}>
                <figure className={styles.image}><a><Image className={styles.img} src={ele.img} alt=""/></a>
                </figure>
            <div>{ele.name}</div>
            </div>
            <div className={styles.infobox}>
                <h4 className={styles.name}>{ele.position}</h4>
            </div>
            <div className={styles.socialbox}>
                <ul className={`${styles.sociallinks} ${styles.socialiconcolored}`}>
                <li><a href={ele.linkedinlink}><i >{<LinkedInIcon style={{fontSize:"24px" ,margin:"4px -2px" }}/>}</i></a></li>
                    <li><a href={ele.githublink}><i >{<GitHubIcon style={{fontSize:"24px" ,margin:"3px -2px" }}/>}</i></a></li>
                    <li><a href={ele.twitterlink}><i >{<TwitterIcon style={{fontSize:"24px" ,margin:"3px -2px" }}/>}</i></a></li>
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

export default team
