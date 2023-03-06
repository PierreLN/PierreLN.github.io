import React from "react";
import styles from "./ContactPage.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function ContactPage(props) {
  let email = "pierre@g.com";

  return (
    <div className={styles.contactPage}>
      <div className={styles.image}></div>

      <Card className={styles.contact_me}>
        <div className={styles.contact_me_section}>
          <form
            action="mailto:pierre@g.com"
            method="post"
            className={styles.form_main_box}
          >
            <div className={styles.form_section}>
              <h1>Contact Me</h1>
              <div className={styles.name}>Full Name</div>
              <input
                className={styles.name_input}
                type="text"
                name="name"
              ></input>
              <div className={styles.email}>Email</div>
              <input
                className={styles.email_input}
                type="email"
                name="email"
              ></input>
              <div className={styles.message}>Message</div>
              <textarea
                className={styles.message_input}
                type="text"
                name="message"
                placeholder="Any questions?"
              ></textarea>
            </div>
            <div>
              <button className={styles.button_section} type="submit">
                Send
              </button>
            </div>
          </form>
          <div className={styles.info_section}>
            <div className={styles.info}>
              <div className={styles.info_email}>
                <h2>Email</h2>
                <div className={styles.info_email_text}>{email}</div>
              </div>

              <div className={styles.info_location}>
                <h2>Based in</h2>
                <div className={styles.info_location_text}>
                  <div>Montreal</div>
                  <div>Quebec</div>
                </div>
              </div>
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
