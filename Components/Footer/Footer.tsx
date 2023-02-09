import React from 'react'
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.upperfooter}>
            <p>Follow Us on Social Media</p>
            <div className={styles.icons}>
                <a href="https://github.com/nsccpccoe" target="_blank" rel="noreferrer">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 31C16.7 32.4 16.7 28.5 15 28M27 33V29.5C27 28.5 27.1 28.1 26.5 27.5C29.3 27.2 32 26.1 32 21.5C31.9988 20.3049 31.5325 19.1573 30.7 18.3C31.0905 17.2619 31.0545 16.1116 30.6 15.1C30.6 15.1 29.5 14.8 27.1 16.4C25.0672 15.8705 22.9328 15.8705 20.9 16.4C18.5 14.8 17.4 15.1 17.4 15.1C16.9455 16.1116 16.9095 17.2619 17.3 18.3C16.4675 19.1573 16.0012 20.3049 16 21.5C16 26.1 18.7 27.2 21.5 27.5C20.9 28.1 20.9 28.7 21 29.5V33" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#E6E6E6"/>
                    </svg>
                </a>

                {/* <a href="#">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34 16.01C33 16.5 32.02 16.699 31 17C29.879 15.735 28.217 15.665 26.62 16.263C25.023 16.861 23.977 18.323 24 20V21C20.755 21.083 17.865 19.605 16 17C16 17 11.818 24.433 20 28C18.128 29.247 16.261 30.088 14 30C17.308 31.803 20.913 32.423 24.034 31.517C27.614 30.477 30.556 27.794 31.685 23.775C32.0218 22.5527 32.189 21.2899 32.182 20.022C32.18 19.773 33.692 17.25 34 16.009V16.01Z" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#E6E6E6"/>
                    </svg>
                </a> */}

                <a href="mailto:nscc@pccoepune.org" target="_blank" rel="noreferrer">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31 17H17C15.8954 17 15 17.8954 15 19V29C15 30.1046 15.8954 31 17 31H31C32.1046 31 33 30.1046 33 29V19C33 17.8954 32.1046 17 31 17Z" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 19L24 25L33 19" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#E6E6E6"/>
                    </svg>
                </a>

                <a href="https://www.linkedin.com/company/nsccpccoe/" target="_blank" rel="noreferrer">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 16H18C16.8954 16 16 16.8954 16 18V30C16 31.1046 16.8954 32 18 32H30C31.1046 32 32 31.1046 32 30V18C32 16.8954 31.1046 16 30 16Z" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 23V28M20 20V20.01M24 28V23M28 28V25C28 24.4696 27.7893 23.9609 27.4142 23.5858C27.0391 23.2107 26.5304 23 26 23C25.4696 23 24.9609 23.2107 24.5858 23.5858C24.2107 23.9609 24 24.4696 24 25" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#E6E6E6"/>
                    </svg>
                </a>

                <a href="https://www.youtube.com/@nsccpccoe" target="_blank" rel="noreferrer">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 17H19C16.7909 17 15 18.7909 15 21V27C15 29.2091 16.7909 31 19 31H29C31.2091 31 33 29.2091 33 27V21C33 18.7909 31.2091 17 29 17Z" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 21L27 24L22 27V21Z" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#E6E6E6"/>
                    </svg>
                </a>
                
            </div>
        </div>
        <div className={styles.lowerfooter}>
            <p>
                © 2021 Newton School Coding Club, <a className={styles.pccoelink} href="http://www.pccoepune.com/" target="_blank" rel="noreferrer">Pimpri Chinchwad College of Engineering, Pune.</a> All Right Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer