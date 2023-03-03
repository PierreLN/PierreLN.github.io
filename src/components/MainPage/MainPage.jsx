import React, { useState } from "react";
import styles from "./MainPage.module.css";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";

function MainPage(props) {
  const aboutPage = <AboutPage></AboutPage>;
  const homePage = <HomePage></HomePage>;

  const [selectedPage, setSelectedPage] = useState(homePage);


  return <div className={styles.main_page}>{selectedPage}</div>;
}

export default MainPage;
