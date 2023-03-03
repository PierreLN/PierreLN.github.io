import React from "react";
import styles from "./ProjectPage.module.css";
import Card from '../UI/Card'

function ProjectPage(props) {
  return (
    <div className={styles.project_page}>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>GreenListin</Card>
        <div className={styles.project_image}></div>
        <Card className={styles.project_description}>
          Application suggesting lists of real grocery products according to
          their current price, their supplier and the variation of the market.
          The application has a scraper that will browse all pages of the target
          sites to populate a database with information collected. A UI is
          available offering the possibility of displaying the search elements
          as well as the creation of a user account. An auto search feature is
          integrated through a ternary search tree data structure.
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>GoPiGo3_42</Card>
        <div className={styles.project_image}></div>

        <Card className={styles.project_description}>
          Build a generic library that implements a State Machine design, a
          software framework. The library is integrated into application tasks
          for a GoPiGo3 robot.
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>Dalek</Card>
        <div className={styles.project_image}></div>

        <Card className={styles.project_description}>
          Turn based survival game on the terminal where you have to move the
          player to avoid colliding with enemies.
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>Party Like No Tomorrow</Card>
        <div className={styles.project_image}></div>

        <Card className={styles.project_description}>
          2D platform game where you have to bring the player to an end point
          without coming into contact with enemies.
        </Card>
      </div>
      <div className={styles.project_section}>
        <Card className={styles.project_name}>Android 97 Cartes</Card>
        <div className={styles.project_image}></div>

        <Card className={styles.project_description}>
          Card game on mobile where you have to empty the deck of cards by
          placing them on the game table in ascending and descending order.
        </Card>
      </div>
    </div>
  );
}

export default ProjectPage;
