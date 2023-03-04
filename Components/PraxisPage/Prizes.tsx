import React from 'react'
import styles from './Prizes.module.css'

const Prizes = () => {
    return (
        <div className={styles.main}>
            <h1>Prizes and Goodies</h1>

            <div className={styles.table}>
                <div className={styles.row}>
                    <p>Final Round Overall Rank 1</p>
                    <p>Rs. 2,000 /-</p>
                </div>

                <div className={styles.row}>
                    <p>Final Round Overall Rank 2</p>
                    <p>Rs. 1,600 /-</p>
                </div>

                <div className={styles.row}>
                    <p>Final Round Overall Rank 3</p>
                    <p>Rs. 1,400 /-</p>
                </div>

               
            </div>
        </div>
    )
}

export default Prizes