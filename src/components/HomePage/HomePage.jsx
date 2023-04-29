import React, { useState } from "react";
import styles from "./HomePage.module.css";
import Card from "../UI/Card";
import ProgressBar from "../UI/ProgressBar";
import Animated from "../SideMenu/Animated";

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
            <Animated>props.react</Animated>
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
