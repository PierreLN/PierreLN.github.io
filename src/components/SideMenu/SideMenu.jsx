import React from "react";
import styles from "./SideMenu.module.css";
import Button from "../UI/Button";
import Audio from "../UI/Audio";

function SideMenu({ onMove, isMusicOn }) {
  const homePageHandler = () => {
    onMove("home");
  };
  const aboutPageHandler = () => {
    onMove("about");
  };
  const ProjectPageHandler = () => {
    onMove("project");
  };
  const ContactPageHandler = () => {
    onMove("contact");
  };

  return (
    <div className={styles.side_menu}>
      <div className={styles.audio}>
        <Audio isMusicOn={isMusicOn}></Audio>
      </div>
      <div className={styles.elements}>
        <ul>
          <li>
            <Button onClick={homePageHandler}>HOME</Button>
          </li>
          <li>
            <Button onClick={ProjectPageHandler}>PROJECTS</Button>
          </li>
          <li>
            <Button onClick={aboutPageHandler}>ABOUT</Button>
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
    </div>
  );
}

export default SideMenu;
