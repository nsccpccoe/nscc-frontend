import styles from "./ContactDetails.module.css";

function ContactDetails() {
  return (
    <div className={styles.main}>
      <h1>Contact Details</h1>

      <ul className={styles.content}>
        <li>
          <a href="https://chat.whatsapp.com/IzeR7xGsf5270zOvzuHQvD">
            Click Here for Whatsapp group
          </a>
        </li>
        <li>Email : nscc@pccoepune.org</li>
      </ul>
    </div>
  );
}

export default ContactDetails;
