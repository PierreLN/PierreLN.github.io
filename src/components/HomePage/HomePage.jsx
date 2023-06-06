import React, { useState } from "react";
import styles from "./HomePage.module.css";
import Card from "../UI/Card";
import ProgressBar from "../UI/ProgressBar";
import Animated from "../SideMenu/Animated";

function HomePage({onClick, musicOn}) {
  const signEnd = ">";
  const signstart = "<";
  const barStart = "{";
  const barEnd = "}";
  const [counter, setCounter] = useState(0);
  const [click, setClick] = useState(0)

  const onClickHandler = () => {
    if (counter >= 99) {
      onClick("project");
    } else {
      setCounter(counter + 100);
      setClick(2)
      musicOn()
    }
    sayHi();
  };

  async function sayHi() {
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

    await fetch('https://react-http-6ae90-default-rtdb.firebaseio.com/portfolio_pierreln/clickedOnPortfolio.json', {
      method: 'POST',
      body: JSON.stringify({click:click, date: montrealTime}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <div className={styles.homepage}>
      <Card className={styles.homepage_section}>
        <div className={styles.welcome}>
          Welcome to my portfolio website!
          <div className={styles.name}>
            {signstart}πr framework={barStart}
            <Animated>props.react</Animated>
            {barEnd}
            {signEnd} I'm Pierre {signstart}/πr{signEnd}
          </div>
        </div>
        <div className={styles.presentation} onClick={onClickHandler}>
          <p className={styles.title}>Full stack developer</p>
          <p className={styles.porfolio}>Portfolio</p>
          <div className={styles.progress}>
            <ProgressBar completion={counter}></ProgressBar>
          </div>
        </div>
      </Card>
      <div className={styles.ownerAndRight}>
        Website built and designed with ♥ by myself
      </div>
    </div>
  );
}

export default HomePage;
