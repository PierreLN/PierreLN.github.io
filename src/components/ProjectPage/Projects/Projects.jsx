import React, { Fragment } from "react";
import styles from "./Projects.module.css";
import ProjectItem from "./ProjectItem";

function Projects() {
  const PROJECT_LIST = [
    {
      id: "p1",
      title: "GreenListin",
      description:
        "Application Full Stack - suggesting the personal grocery lists included the location and price information, based on real market database that integrated by an auto search feature through a ternary search tree data structure.",
      image: require("../../../Images/GreenListin1.png"),
      language: "== Python - Flask - HTML/CSS - Javascript - React ==",
    },
    {
      id: "p2",
      title: "Shoppies",
      description:
        "An application that helps manage movie nominations for the upcoming Shoppies event. The search results come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).",
      image: require("../../../Images/Shoppies.png"),
      language: "== HTML/CSS - Javascript - React ==",
    },
    {
      id: "p3",
      title: "Food Order",
      description:
        "A food orders web-based application that allows end-users to place orders and review the invoice.",
      image: require("../../../Images/Food_Order.png"),
      language: "== HTML/CSS - Javascript - React ==",
    },
    {
      id: "p4",
      title: "CRM",
      description:
        "Customer Relationship Management – A web application built with Django that enables businesses to manage customer interactions, monitor sales and marketing projects, and streamline customer communication.",
      image: require("../../../Images/CRM_customer_relationship_management.png"),
      language: "== Python - Django - HTML ==",
    },
    {
      id: "p5",
      title: "GoPiGo3_42", 
      description:
        "A generic library that implements a software framework - State Machine design, which can be used to integrate into GoPiGo3 robot’s tasks.",
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
      id={project.id}
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
