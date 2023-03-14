import React from 'react'
import styles from './EventDetails.module.css'

const EventDetails = () => {
  return (
    <div className={styles.main}>
      <h1>Event Details</h1>

      <div className={styles.content}>
        {/* <div>
                    <p>Registration starts on:-</p>
                    <p>Event starts on:-</p>
                    <p>Results will be declared on:-</p>
                </div>
                <div>
                    <p>Registration ends on :-</p>
                    <p>Event ends on:-</p>
                    <p>Organized by:-</p>
                </div> */}
        <div className={styles.round}>
          <div className={styles.subRound}>
            <h2>Round 1</h2>
          </div>
          <table>
            <tr>
              <td>Mode </td>
              <td>Online</td>
            </tr>
            <tr>
              <td>Venue </td>
              <td>-</td>
            </tr>
            <tr>
              <td>Reporting Time </td>
              <td>14/03/2023 08:30 PM</td>
            </tr>
            <tr>
              <td>Start </td>
              <td>14/03/2023 09:05 PM</td>
            </tr>
            <tr>
              <td>Duration </td>
              <td>3 Hrs</td>
            </tr>
            <tr>
              <td>Problems </td>
              <td>9</td>
            </tr>
            <tr>
              <td>Participation Limit </td>
              <td>Unlimited</td>
            </tr>
          </table>
          <div className={styles.subRound}>
            <h2>Round 2</h2>
          </div>
          <table>
            <tr>
              <td>Mode </td>
              <td>Offline</td>
            </tr>
            <tr>
              <td>Venue </td>
              <td>IT Dept, Labs</td>
            </tr>
            <tr>
              <td>Reporting Time </td>
              <td>17/03/2023 07:00 AM</td>
            </tr>
            <tr>
              <td>Start </td>
              <td>17/03/2023 08:05 AM</td>
            </tr>
            <tr>
              <td>Duration </td>
              <td>3 Hrs</td>
            </tr>
            <tr>
              <td>Problems </td>
              <td>9</td>
            </tr>
            <tr>
              <td>Top Qualified From Round 1</td>
              <td>100</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
