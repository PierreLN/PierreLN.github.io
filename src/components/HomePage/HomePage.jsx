import React, { useState } from "react";
import styles from "./HomePage.module.css";
import Card from "../UI/Card";
import ProgressBar from "../UI/ProgressBar";

function HomePage(props) {
  const signEnd = ">";
  const signstart = "<";
  const barStart = "{";
  const barEnd = "}";
  let [counter, setCounter] = useState(0);

  const onClickHandler = () => {
    if (counter >= 99) {
      props.onClick("project");
    } else {
      setCounter(counter + 33);
    }
  };

  return (
    <div className={styles.homepage}>
      <Card className={styles.homepage_section}>
        <div className={styles.welcome}>
          Welcome to my porfolio website!
          <p className={styles.name}>
            {signstart}πr framework={barStart}
            <div className={styles.reactAnimation}>
            <div className={`${styles['react-1']} ${styles.animated}`}>p</div>
              <div className={`${styles['react-2']} ${styles.animated}`}>r</div>
              <div className={`${styles['react-3']} ${styles.animated}`}>o</div>
              <div className={`${styles['react-4']} ${styles.animated}`}>p</div>
              <div className={`${styles['react-5']} ${styles.animated}`}>s</div>
              <div className={`${styles['react-1']} ${styles.animated}`}>.</div>
              <div className={`${styles['react-2']} ${styles.animated}`}>r</div>
              <div className={`${styles['react-3']} ${styles.animated}`}>e</div>
              <div className={`${styles['react-4']} ${styles.animated}`}>a</div>
              <div className={`${styles['react-5']} ${styles.animated}`}>c</div>
              <div className={`${styles['react-6']} ${styles.animated}`}>t</div>
            </div>
            {barEnd}
            {signEnd} I'm Pierre {signstart}/πr{signEnd}
          </p>
        </div>
        <div className={styles.presentation} onClick={onClickHandler}>
          <p className={styles.title}>Full stack developer</p>
          <p className={styles.porfolio}>Porfolio</p>
          <ProgressBar completion={counter}></ProgressBar>
        </div>
      </Card>
    </div>
  );
}

export default HomePage;
