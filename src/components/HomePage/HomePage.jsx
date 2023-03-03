import React from "react";
import styles from "./HomePage.module.css";
import Card from "../UI/Card";

function HomePage(props) {
  const signEnd = "/>";
  const signstart = "<";

  return (
    <div className={styles.homepage}>
      <Card className={styles.homepage_section}>
        <div className={styles.welcome}>
          Welcome to my corner of the internet!
          <p className={styles.name}>
            {signstart} I'm Pierre {signEnd}
          </p>
        </div>
        <div className={styles.presentation}>
          <p className={styles.title}>Full stack developer</p>
          <p className={styles.porfolio}>Porfolio</p>
        </div>
      </Card>
    </div>
  );
}

export default HomePage;
