import React from "react";
import styles from "./ProjectPage.module.css";
import Card from "../UI/Card";

function ProjectPage(props) {
  return (
    <div className={styles.project_page}>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>GreenListin</Card>
        <div
          className={`${styles.project_image} ${styles.imgGreenListin}`}
        ></div>
        <Card className={styles.project_description}>
          Application suggesting lists of real grocery products according to
          their current price, their supplier and the variation of the market.
          The application has a scraper that will browse all pages of the target
          sites to populate a database with information collected. A UI is
          available offering the possibility of displaying the search elements
          as well as the creation of a user account. An auto search feature is
          integrated through a ternary search tree data structure.
          <p>== Python - HTML/CSS - Javascript ==</p>
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>CRM</Card>
        <div className={`${styles.project_image} ${styles.imgCRM}`}></div>
        <Card className={styles.project_description}>
          A CRM (Customer Relationship Management) app built with Django web
          application that enables businesses to manage customer interactions,
          track sales and marketing efforts, and streamline customer
          communication.
          <p>== Python ==</p>
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>GoPiGo3_42</Card>
        <div
          className={`${styles.project_image} ${styles.imgGoPiGo3_42}`}
        ></div>

        <Card className={styles.project_description}>
          Build a generic library that implements a State Machine design, a
          software framework. The library is integrated into application tasks
          for a GoPiGo3 robot.
          <p>== Python ==</p>
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>Shoppies</Card>
        <div className={`${styles.project_image} ${styles.imgShoppies}`}></div>

        <Card className={styles.project_description}>
          App to help manage movie nominations for the upcoming Shoppies. Search
          results come from OMDB's API (free API key:
          http://www.omdbapi.com/apikey.aspx).
          <p>== HTML/CSS - Javascript - React ==</p>
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>Party Like No Tomorrow</Card>
        <div className={`${styles.project_image} ${styles.imgPLNT}`}></div>

        <Card className={styles.project_description}>
          2D platform game where you have to bring the player to an end point
          without coming into contact with enemies.
          <p>== C# - Unity ==</p>
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>Dalek</Card>
        <div className={`${styles.project_image} ${styles.imgDalek}`}></div>

        <Card className={styles.project_description}>
          Turn based survival game on the terminal where you have to move the
          player to avoid colliding with enemies.
          <p>== Python ==</p>
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>Android 97 Cartes</Card>
        <div className={`${styles.project_image} ${styles.img97_Cartes}`}></div>

        <Card className={styles.project_description}>
          Card game on mobile where you have to empty the deck of cards by
          placing them on the game table in ascending and descending order.
          <p>== Java ==</p>
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>Parking Meter</Card>
        <div
          className={`${styles.project_image} ${styles.imgParkingMeter}`}
        ></div>

        <Card className={styles.project_description}>
          Simulation of a parking meter with downtown Montreal time restriction
          and pricing.
          <p>== Java ==</p>
        </Card>
      </div>
    </div>
  );
}

export default ProjectPage;
