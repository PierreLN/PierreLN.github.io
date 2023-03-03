import React from "react";
import styles from "./HomePage.module.css";
import Card from "../UI/Card";

function HomePage(props) {

    const sign = '</>'
  return (
    <div className={styles.homepage}>
      <Card className={styles.homepage_section}>
        <p>Welcome to my corner of the internet!!</p>
        <p>My name is Pierre</p>
        <p>Full stack {sign}</p>
        <p>developer</p>
        <p>Porfolio</p>
      </Card>
    </div>
  );
}

export default HomePage;
