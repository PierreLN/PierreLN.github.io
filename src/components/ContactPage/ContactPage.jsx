import React, { useState, useRef } from "react";
import styles from "./ContactPage.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function ContactPage(props) {
  let email = "pierre@g.com";

  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const addEmailHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredMessage = messageRef.current.value;

    if (enteredName.length === 0) {
      setError({ title: "Invalid", messagebox: "Please enter valid name" });
      return;
    }
    if (enteredEmail.length === 0 || !enteredEmail.includes("@")) {
      setError({ title: "Invalid", messagebox: "Please enter valid email" });
      return;
    }
    if (enteredMessage.length === 0) {
      setError({ title: "Invalid", messagebox: "Please enter a message" });
      return;
    }
    setIsValid(true);

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className={styles.contactPage}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.messagebox}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <div className={styles.image}></div>

      <Card className={styles.contact_me}>
        <div className={styles.contact_me_section}>
          <form
            action="mailto:pierre@g.com"
            method="post"
            className={styles.form_main_box}
            onSubmit={addEmailHandler}
          >
            <div className={styles.form_section}>
              <h1>Contact Me</h1>
              <div className={styles.name}>Full Name</div>
              <input
                className={styles.name_input}
                type="text"
                name="name"
                ref={nameRef}
              ></input>
              <div className={styles.email}>Email</div>
              <input
                className={styles.email_input}
                ref={emailRef}
                type="email"
                name="email"
              ></input>
              <div className={styles.message}>Message</div>
              <textarea
                className={styles.message_input}
                type="text"
                name="message"
                placeholder="Any questions?"
                ref={messageRef}
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
