import styles from "./ContactDetails.module.css";

function ContactDetails() {
  return (
    <div className={styles.main}>
      <h1>Contact Details</h1>

      <ul className={styles.content}>
        <li>
          WhatsApp Group: <a style={{ color: '#7a9ce0', textDecoration: 'none' }} href="https://chat.whatsapp.com/IzeR7xGsf5270zOvzuHQvD">https://chat.whatsapp.com/IzeR7xGsf5270zOvzuHQvD</a>
        </li>
        <li>Email: <a style={{ color: '#7a9ce0', textDecoration: 'none' }} href="mailto:nscc@pccoepune.org">nscc@pccoepune.org</a></li>
      </ul>
    </div>
  );
}

export default ContactDetails;
