import React from "react";
import styles from "./ContactPage.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function ContactPage(props) {
  return (
    <div className={styles.contactPage}>
      <div className={styles.image}></div>

      <Card className={styles.contact_me}>
        <div className={styles.contact_me_section}>
          <form action="" method="post" className={styles.form_main_box}>
            <div className={styles.form_section}>
              <h1>Contack Me</h1>
              <div className={styles.name}>Full Name</div>
              <input></input>
              <div className={styles.email}>Email</div>
              <input></input>
              <div className={styles.message}>Message</div>
              <input></input>
            </div>
            <div>
              <button className={styles.button_section}>Send</button>
            </div>
          </form>
          <div className={styles.info_section}>
            <div className={styles.info}>
              <div>Email: pierre@g.com</div>
              <div>Based in Montreal</div>
            </div>
            <div className={styles.media}>
              <Card className={styles.contactPage_media}>LinkedIn</Card>
              <Card className={styles.contactPage_media}>Github</Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ContactPage;
