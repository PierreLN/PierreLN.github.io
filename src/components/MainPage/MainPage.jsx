import React, { useState, useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";

function MainPage(props) {
  const mainPageRef = useRef(null);

  const selected = () => {
    setCurrentPage(projectPage);
  };

  const homePage = <HomePage onClick={selected}></HomePage>;
  const aboutPage = <AboutPage></AboutPage>;
  const projectPage = <ProjectPage></ProjectPage>;
  const contactPage = <ContactPage></ContactPage>;

  const [currentPage, setCurrentPage] = useState(homePage);

  useEffect(() => {
    if (props.selectedPage === "about") {
      setCurrentPage(aboutPage);
    } else if (props.selectedPage === "home") {
      setCurrentPage(homePage);
    } else if (props.selectedPage === "project") {
      setCurrentPage(projectPage);
    } else if (props.selectedPage === "contact") {
      setCurrentPage(contactPage);
    }
  }, [props.selectedPage]);

  return (
    <div className={styles.main_page} ref={mainPageRef}>
      {currentPage}
    </div>
  );
}

export default MainPage;
