import React from "react";
import styles from "./ContactPage.module.css";
import Card from "../UI/Card";

function ContactPage(props) {
  return (
    <div className={styles.contactPage}>
      <Card className={styles.contactPage_element}>LinkedIn</Card>
      <Card className={styles.contactPage_element}>Github</Card>
      <Card className={styles.contactPage_element}>Something else</Card>
    </div>
  );
}

export default ContactPage;
