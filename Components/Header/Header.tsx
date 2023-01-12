
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

import styles from "./Header.module.css"

export default function Home() {
  return (
    <>
       
      {/* <main className={styles.main}> */}
        {/* Header *********************************** */}
       <div className={styles.Homepage}>
        <div className={styles.header}>
          <div className={styles.leftheader}>
              <div className={styles.logo}></div>
              <div className={styles.logocontent}>
              <div>NSCC</div>
              <div>Newton School Coding Club Pccoe</div> 
              </div>
          </div>
          <div className={styles.rightheader}>
            <ul>
              <li>Opportunnites</li>
              <li>About</li>
              <li>Events</li>
              <li>Contact</li>
            </ul>
            <div >
              <button className={styles.btn}>login</button>
            </div>
          </div>
        </div>

        {/*Content**************************************/}
        <div className={styles.homecontent}>
          <div className="contents">
               <div className={styles.content1}>Newton School Coding Club</div> 
               <div className={styles.content2}>Pimpri Chinchwad College Of Engineering</div>
               <div className={styles.content3}>An outcome-oriented coding community that aims to up skill all its members and ultimately make them have successful
careers.</div>
          </div>
        </div>
       </div>

       
      {/* </main> */}
    </>
  )
}
