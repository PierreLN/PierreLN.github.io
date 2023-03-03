import React from "react";
import styles from "./HomePage.module.css";
import Card from "../UI/Card";

function HomePage(props) {
  const sign = "</>";
  return (
    <div className={styles.homepage}>
      <Card className={styles.homepage_section}>
        <p className={styles.welcome}>
          Welcome to my corner of the internet!
          <p className={styles.name}>
            {sign} I'm Pierre {sign}
          </p>
        </p>
        <div className={styles.presentation}>
          <p className={styles.title}>Full stack developer</p>
          <p className={styles.porfolio}>Porfolio</p>
        </div>
      </Card>
    </div>
  );
}

export default HomePage;
