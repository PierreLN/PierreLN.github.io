import React, { useState } from "react";
import styles from "./SideMenu.module.css";
import Button from "../UI/Button";

function SideMenu(props) {
  // const [movingTo, setMovingTo] = useState()

  let locationHome = "home";
  let locationAbout = "about";

  const homePageHandler = () => {
    props.onMove(locationHome);
  };
  const aboutPageHandler = () => {
    props.onMove(locationAbout);
  };
  const ProjectPageHandler = () => {
    console.log("projects...");
  };
  const ContactPageHandler = () => {
    console.log("contact...");
  };

  return (
    <div className={styles.side_menu}>
      <ul>
        <li>
          <Button onClick={homePageHandler}>HOME</Button>
        </li>
        <li>
          <Button onClick={aboutPageHandler}>ABOUT</Button>
        </li>
        <li>
          <Button onClick={ProjectPageHandler}>PROJECTS</Button>
        </li>
        <li>
          <Button onClick={ContactPageHandler}>CONTACT</Button>
        </li>
        {/* <li>
          <Button>SERVICES</Button>
        </li>
        <li>
          <Button>CLIENTS</Button>
        </li>
        <li>
          <Button>FR</Button>
        </li> */}
      </ul>
    </div>
  );
}

export default SideMenu;
