import React, { useState, useEffect, useRef } from "react";
import styles from "./MainPage.module.css";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";

function MainPage({ onClick, selectedPage }) {
  const now = new Date();
  const options = {
    timeZone: "America/Montreal",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const montrealTime = now.toLocaleString("en-US", options);

  const [visitor, setVisitor] = useState(montrealTime);
  const [isCounted, setIsCounted] = useState(false);

  const mainPageRef = useRef(null);

  const homePage = <HomePage onClick={onClick}></HomePage>;
  const aboutPage = <AboutPage></AboutPage>;
  const projectPage = <ProjectPage></ProjectPage>;
  const contactPage = <ContactPage></ContactPage>;

  const [currentPage, setCurrentPage] = useState(homePage);
  const [background, setBackground] = useState("backgroundPicture0");

  useEffect(() => {
    async function visitorCounting() {
      try {
        let response = await fetch(
          "https://react-http-6ae90-default-rtdb.firebaseio.com/portfolio_pierreln/visitor_counter.json"
        );
        let data = await response.json();
        let count = data ? Object.keys(data).length : 0;
        setVisitor(count);
      } catch (error) {
        console.log(error);
      }
    }
    visitorCounting();
  }, []);

  useEffect(() => {
    async function visitorAdded() {
      try {
        let response = await fetch(
          "https://react-http-6ae90-default-rtdb.firebaseio.com/portfolio_pierreln/visitor_counter.json",
          {
            method: "POST",
            body: JSON.stringify(montrealTime),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          setIsCounted(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (!isCounted) {
      visitorAdded();
    }
  }, []);

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
      <div className={styles["total-visitor"]}>Total Visitors: {visitor}</div>
      {currentPage}
    </div>
  );
}

export default MainPage;
