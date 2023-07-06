import React, { useState } from "react";
import styles from "./SideMenu.module.css";
import Button from "../UI/Button";
import Audio from "../UI/Audio";

function SideMenu({ onMove, isMusicOn }) {
  const [selected, setSelected] = useState("home");

  const homePageHandler = () => {
    onMove("home");
    setSelected("home");
  };
  const aboutPageHandler = () => {
    onMove("about");
    setSelected("about");
  };
  const ProjectPageHandler = () => {
    onMove("project");
    setSelected("project");
  };
  const ContactPageHandler = () => {
    onMove("contact");
    setSelected("contact");
  };

  return (
    <div className={styles.side_menu}>
      <div className={styles.audio}>
        <Audio isMusicOn={isMusicOn}></Audio>
      </div>
      <div className={styles.elements}>
        <ul>
          <li>
            {selected === "home" ? (
              <Button onClick={homePageHandler}>{"<HOME />"}</Button>
            ) : (
              <Button onClick={homePageHandler}>Home</Button>
            )}
          </li>
          <li>
            {selected === "project" ? (
              <Button onClick={ProjectPageHandler}>{"<PROJECTS />"}</Button>
            ) : (
              <Button onClick={ProjectPageHandler}>Projects</Button>
            )}
          </li>
          <li>
            {selected === "about" ? (
              <Button onClick={aboutPageHandler}>{"<ABOUT />"}</Button>
            ) : (
              <Button onClick={aboutPageHandler}>About</Button>
            )}
          </li>
          <li>
            {selected === "contact" ? (
              <Button onClick={ContactPageHandler}>{"<CONTACT />"}</Button>
            ) : (
              <Button onClick={ContactPageHandler}>Contact</Button>
            )}
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
