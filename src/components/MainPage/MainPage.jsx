import React, { useState, useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";

function MainPage({ onClick, selectedPage }) {
  const [visitor, setVisitor] = useState(0);

  const mainPageRef = useRef(null);

  const homePage = <HomePage onClick={onClick}></HomePage>;
  const aboutPage = <AboutPage></AboutPage>;
  const projectPage = <ProjectPage></ProjectPage>;
  const contactPage = <ContactPage></ContactPage>;

  const [currentPage, setCurrentPage] = useState(homePage);
  const [background, setBackground] = useState("backgroundPicture0");

  // async function visitorCounting() {
  //   try {
  //     let response = await fetch(
  //       "https://react-http-6ae90-default-rtdb.firebaseio.com/visitor.json"
  //     );
  //     let data = await response.json();
  //     let count = 0
  //       count = data.length;
  //     setVisitor(count)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function visitorAdded() {
  //   try {
  //     const response = await fetch(
  //       "https://react-http-6ae90-default-rtdb.firebaseio.com/visitor.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(visitor + 1),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     if (response.ok) {
  //       setVisitor((prevVisitor) => prevVisitor + 1);
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  useEffect(() => {
    if (selectedPage === "about") {
      setCurrentPage(aboutPage);
    } else if (selectedPage === "home") {
      setCurrentPage(homePage);
      // visitorCounting()
      // visitorAdded()
    } else if (selectedPage === "project") {
      setCurrentPage(projectPage);
    } else if (selectedPage === "contact") {
      setCurrentPage(contactPage);
    }
  }, [selectedPage]);

  // For picture rotation - not activated
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % 1;
      setBackground(`backgroundPicture${currentIndex}`);
    }, 50000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`${styles.main_page} ${styles[background]} ${styles.backgroundAnimation}`}
      ref={mainPageRef}
    >
      <div>Total Visitors: {visitor}</div>
      {currentPage}
    </div>
  );
}

export default MainPage;
