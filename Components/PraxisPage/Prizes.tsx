import React from 'react'
import styles from './Prizes.module.css'

const Prizes = () => {
    return (
        <div className={styles.main}>
            <h1>Prizes and Goodies</h1>

            <div className={styles.table}>
                <div className={styles.row}>
                    <p>Rank 1</p>
                    <p>Rs. 2,100 /-</p>
                </div>

                <div className={styles.row}>
                    <p>Rank 2</p>
                    <p>Rs. 1,700 /-</p>
                </div>

                <div className={styles.row}>
                    <p>Rank 3</p>
                    <p>Rs. 1,500 /-</p>
                </div>

                <div className={styles.row}>
                    <p>Rank 4</p>
                    <p>Rs. 1,200 /-</p>
                </div>

                <div className={styles.row}>
                    <p>Rank 5</p>
                    <p>Rs. 1000 /-</p>
                </div>
            </div>
        </div>
    )
}

export default Prizes