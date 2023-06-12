import React, { useState } from "react";
import styles from "./ContactPage.module.css";
import Card from "../UI/Card";
import useInput from "../hooks/useInput";
import useTimeAndDate from "../hooks/useTimeAndDate";
import useHttp from "../hooks/useHttp";

function ContactPage() {
  const [isSent, setIsSent] = useState(false);

  const { isLoading, error, sendRequest: fetchCustomer_email } = useHttp();

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const timeAndDate = useTimeAndDate();

  const onSubmitHanlder = async (event) => {
    event.preventDefault();

    const fetchMail = async () => {
      await fetchCustomer_email({
        url: "https://react-http-6ae90-default-rtdb.firebaseio.com/portfolio_pierreln/customer_email.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          fullname: enteredName,
          email: enteredEmail,
          message: enteredMessage,
          time: timeAndDate,
        },
      });
    };
    await fetchMail();

    setIsSent(true);
    nameReset();
    emailReset();
    messageReset();
  };

  const socialMediaHandler = (data) => {
    if (data.target.innerHTML === "LinkedIn") {
      window.open("https://www.linkedin.com/in/pierreln/", "_blank");
    } else if (data.target.innerHTML === "Github") {
      window.open("https://github.com/PierreLN", "_blank");
    }
  };

  const nameInputClasses = !nameHasError
    ? styles.name_input
    : `${styles.name_input} ${styles.invalid}`;

  const emailInputClasses = !emailHasError
    ? styles.email_input
    : `${styles.email_input} ${styles.invalid}`;

  const messageInputClasses = !messageHasError
    ? styles.message_input
    : `${styles.message_input} ${styles.invalid}`;

  let content = (
    <div className={styles.contact_me_section}>
      <form onSubmit={onSubmitHanlder} className={styles.form_main_box}>
        <div className={styles.form_section}>
          <h1>Contact Me</h1>
          <label className={styles.name} htmlFor="name">
            <div className={styles["box-main"]}>Full Name</div>
            <div className={styles["box-second"]}>
              {nameHasError && (
                <div className={styles["text-error"]}>- Enter a name</div>
              )}
            </div>
          </label>
          <input
            className={nameInputClasses}
            type="text"
            name="name"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          ></input>
          <label className={styles.email} htmlFor="email">
            <div className={styles["box-main"]}>Email</div>
            <div className={styles["box-second"]}>
              {emailHasError && (
                <div className={styles["text-error"]}>
                  - Enter a valid email
                </div>
              )}
            </div>
          </label>
          <input
            className={emailInputClasses}
            type="email"
            name="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          ></input>
          <label className={styles.message} htmlFor="message">
            <div className={styles["box-main"]}>Message</div>
            <div className={styles["box-second"]}>
              {messageHasError && (
                <div className={styles["text-error"]}>- Enter a message</div>
              )}
            </div>
          </label>
          <textarea
            className={messageInputClasses}
            type="text"
            name="message"
            id="message"
            placeholder="Questions?"
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            value={enteredMessage}
          ></textarea>
        </div>
        <div className={styles.button_section}>
          <button
            className={styles.button_css}
            type="submit"
            disabled={!formIsValid}
          >
            Send
          </button>
        </div>
      </form>
      <div className={styles.info_section}>
        <div className={styles.info}>
          <div className={styles.info_email}></div>
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

  if (isSent) {
    content = (
      <div className={styles.thanks}>
        <div className={styles["thanks-inside"]}>
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
      <div className={styles["image-section"]}>
        <div className={styles.image}></div>
      </div>
      <Card className={styles.contact_me}>{content}</Card>
    </div>
  );
}

export default ContactPage;
