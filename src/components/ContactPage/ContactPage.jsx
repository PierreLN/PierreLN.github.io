import React, { useState, useRef, useEffect } from "react";
import styles from "./ContactPage.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

function ContactPage() {
  const [error, setError] = useState(null);
  const [sentMail, setSentMail] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmitHanlder = async (event) => {
    event.preventDefault();
    try {
      await fetch(
        "https://react-http-6ae90-default-rtdb.firebaseio.com/portfolio_pierreln/customer_email.json",
        {
          method: "POST",
          body: JSON.stringify(sentMail),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = () => {
    const now = new Date();
    const options = {
      timeZone: "America/Montreal",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const montrealTime = now.toLocaleString("en-US", options);

    setSentMail({
      fullname: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      time: montrealTime,
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  const socialMediaHandler = (data) => {
    if (data.target.innerHTML === "LinkedIn") {
      window.location.href = "https://www.linkedin.com/in/pierreln/";
    } else if (data.target.innerHTML === "Github") {
      window.location.href = "https://github.com/PierreLN";
    }
  };

  let content = (
    <div className={styles.contact_me_section}>
      <form
        onSubmit={onSubmitHanlder}
        encType="text/plain"
        className={styles.form_main_box}
      >
        <div className={styles.form_section}>
          <h1>Contact Me</h1>
          <label className={styles.name} htmlFor="name">
            Full Name
          </label>
          <input
            className={styles.name_input}
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            onChange={onChangeHandler}
          ></input>
          <label className={styles.email} htmlFor="email">
            Email
          </label>
          <input
            className={styles.email_input}
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            onChange={onChangeHandler}
          ></input>
          <label className={styles.message} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.message_input}
            type="text"
            name="message"
            id="message"
            placeholder="Any questions?"
            ref={messageRef}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className={styles.button_section}>
          <button className={styles.button_css} type="submit">
            Send
          </button>
        </div>
      </form>
      <div className={styles.info_section}>
        <div className={styles.info}>
          <div className={styles.info_email}>
            {/* <h2>Email</h2>
            <div className={styles.info_email_text}>{email}</div> */}
          </div>

          <div className={styles.info_location}>
            <h2>Based in</h2>
            <div className={styles.info_location_text}>
              <div>Montreal</div>
              <div>Quebec</div>
            </div>
          </div>
        </div>
        <div className={styles.media} onClick={socialMediaHandler}>
          <Card className={styles.contactPage_media}>LinkedIn</Card>
          <Card className={styles.contactPage_media}>Github</Card>
        </div>
      </div>
    </div>
  );

  if (!isSent) {
    content = (
      <div className={styles.thanks}>
        <div className={styles['thanks-inside']}>
        <div className={styles["thanks-top"]}>Thank you for the email</div>

        <div className={styles["thanks-bottom"]}>
          I'll be back to you shortly!
        </div>

        </div>
      </div>
    );
  }

  return (
    <div className={styles.contactPage}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.messagebox}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <div className={styles["image-section"]}>
        <div className={styles.image}></div>
      </div>
      <Card className={styles.contact_me}>{content}</Card>
    </div>
  );
}

export default ContactPage;
