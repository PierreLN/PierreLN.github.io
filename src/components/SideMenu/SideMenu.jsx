import React from "react";
import styles from "./SideMenu.module.css";
import Button from "../UI/Button";

function SideMenu(props) {

  const homePageHandler = () => {
    props.onMove("home");
  };
  const aboutPageHandler = () => {
    props.onMove("about");
  };
  const ProjectPageHandler = () => {
    props.onMove("project");
  };
  const ContactPageHandler = () => {
    props.onMove("contact");
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
