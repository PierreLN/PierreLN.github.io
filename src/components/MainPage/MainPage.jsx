import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.css";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";

function MainPage(props) {
  const homePage = <HomePage></HomePage>;
  const aboutPage = <AboutPage></AboutPage>;

  const [currentPage, setCurrentPage] = useState(aboutPage);

  useEffect(() => {
    if (props.selectedPage === "about") {
      setCurrentPage(aboutPage);
    } else if (props.selectedPage === "home") {
      setCurrentPage(homePage);
    }
  }, [props.selectedPage]);

  return <div className={styles.main_page}>{currentPage}</div>;
}

export default MainPage;
