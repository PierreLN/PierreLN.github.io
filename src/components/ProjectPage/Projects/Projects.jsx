import React, { useState, Fragment } from "react";
import styles from "./Projects.module.css";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const PROJECT_LIST = [
    {
      id: "p1",
      title: "GreenListin",
      description:
        "Application suggesting lists of real grocery products according to their current price, their supplier and the variation of the market. The application has a scraper that will browse all pages of the target sites to populate a database with information collected. A UI is available offering the possibility of displaying the search elements as well as the creation of a user account. An auto search feature is integrated through a ternary search tree data structure.",
      image: require("../../../Images/GreenListin1.png"),
      language: "== Python - Flask - HTML/CSS - Javascript - React ==",
    },
    {
      id: "p2",
      title: "Shoppies",
      description:
        "App to help manage movie nominations for the upcoming Shoppies. Search results come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).",
      image: require("../../../Images/Shoppies.png"),
      language: "== HTML/CSS - Javascript - React ==",
    },
    {
      id: "p3",
      title: "Food Order",
      description:
        "A food web-based application. Users can place orders and pay for them directly through the app.",
      image: require("../../../Images/Food_Order.png"),
      language: "== HTML/CSS - Javascript - React ==",
    },
    {
      id: "p4",
      title: "CRM",
      description:
        "A CRM (Customer Relationship Management) app built with Django web application that enables businesses to manage customer interactions, track sales and marketing efforts, and streamline customer communication.",
      image: require("../../../Images/CRM_customer_relationship_management.png"),
      language: "== Python - Django - HTML ==",
    },
    {
      id: "p5",
      title: "GoPiGo3_42",
      description:
        "Build a generic library that implements a State Machine design, software framework. The library is integrated into application tasks for a GoPiGo3 robot.",
      image: require("../../../Images/GoPiGo3_42.jpg"),
      language: "== Python ==",
    },
    {
      id: "p6",
      title: "Dalek",
      description:
        "Turn based survival game on the terminal where you have to move the player to avoid colliding with enemies.",
      image: require("../../../Images/dalek.jpg"),
      language: "== Python ==",
    },
    {
      id: "p7",
      title: "Android 97 Cartes",
      description:
        "Card game on mobile where you have to empty the deck of cards by placing them on the game table in ascending and descending order.",
      image: require("../../../Images/97_cartes.jpg"),
      language: "== Java - Android Studio ==",
    },
    {
      id: "p8",
      title: "Parking Meter",
      description:
        "Simulation of a parking meter with downtown Montreal time restriction and pricing.",
      image: require("../../../Images/parking_meter.png"),
      language: "== Java ==",
    },
    {
      id: "p9",
      title: "Party Like No Tomorrow",
      description:
        "2D platform game where you have to bring the player to an end point without coming into contact with enemies.",
      image: require("../../../Images/2_party.png"),
      language: "== C# - Unity ==",
    },
  ];

  const projectList = PROJECT_LIST.map((project) => (
    <ProjectItem
      key={project.id}
      title={project.title}
      description={project.description}
      language={project.language}
      image={project.image}
    ></ProjectItem>
  ));

  return (
    <Fragment>
      <div className={styles.styles}>{projectList}</div>
    </Fragment>
  );
};

export default Projects;
