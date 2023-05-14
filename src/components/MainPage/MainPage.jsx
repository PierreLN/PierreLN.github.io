import React, { useState, useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";

function MainPage({onClick, selectedPage}) {
                   
  const mainPageRef = useRef(null);

  const homePage = <HomePage onClick={onClick}></HomePage>;
  const aboutPage = <AboutPage></AboutPage>;
  const projectPage = <ProjectPage></ProjectPage>;
  const contactPage = <ContactPage></ContactPage>;

  const [currentPage, setCurrentPage] = useState(homePage);
  const [background, setBackground] = useState('backgroundPicture0')

  useEffect(() => {
    if (selectedPage === "about") {
      setCurrentPage(aboutPage);
    } else if (selectedPage === "home") {
      setCurrentPage(homePage);
    } else if (selectedPage === "project") {
      setCurrentPage(projectPage);
    } else if (selectedPage === "contact") {
      setCurrentPage(contactPage);
    }
  }, [selectedPage]);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % 2;
      setBackground(`backgroundPicture${currentIndex}`);
    }, 25000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${styles.main_page} ${styles[background]} ${styles.backgroundAnimation}` } ref={mainPageRef}>
      {currentPage}
    </div>
  );
}

export default MainPage;
