import React from 'react'
import styles from './ClubActivities.module.css'

const ClubActivities = () => {
    return (
        <div className={styles.main}>

            <div className={styles.activities}>

                <div className={styles.content}>
                    <p>We are always looking for talent hotbeds through our events! We never stop our onboarding process. Participate and perform well in our events to get noticed by our team!!</p>
                </div>

                <div className={styles.width}>
                    <div className={styles.title}>Club Activities</div>
                    <div className={styles.points}>
                        <ul>
                            <li>DSA & Competitive Programming</li>
                            <li>UI UX Designing</li>
                            <li>Web Frontend Development Projects</li>
                            <li>Mobile App Development Projects</li>
                            <li>Backend End Development Projects</li>
                            <li>Machine Learning Projects</li>
                            <li>Digital Marketing</li>
                            <li>Event Management</li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ClubActivities