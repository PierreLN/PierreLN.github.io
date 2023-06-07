import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import styles from "./MainPage.module.css";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import ContactPage from "../ContactPage/ContactPage";
import useHttp from "../hooks/useHttp";

const ProjectPage = lazy(() => import("../ProjectPage/ProjectPage"));

function MainPage({ onClick, selectedPage, musicOn }) {
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

  const homePage = <HomePage onClick={onClick} musicOn={musicOn}></HomePage>;
  const aboutPage = <AboutPage></AboutPage>;
  const projectPage = (
    <Suspense fallback="Loading...">
      <ProjectPage></ProjectPage>
    </Suspense>
  );
  const contactPage = <ContactPage></ContactPage>;

  const [currentPage, setCurrentPage] = useState(homePage);
  const [background, setBackground] = useState("backgroundPicture0");

  const { isLoading, error, sendRequest: fetchNumberOfVisitor } = useHttp();

  useEffect(() => {
    const visitorCounting = async (data) => {
      let count = data ? Object.keys(data).length : 0;
      setVisitor(count);
    };

    fetchNumberOfVisitor(
      {
        url: "https://react-http-6ae90-default-rtdb.firebaseio.com/portfolio_pierreln/visitor_counter.json",
      },
      visitorCounting
    );
  }, []);

  const addingVisitor = async () => {
    fetchNumberOfVisitor({
      url: "https://react-http-6ae90-default-rtdb.firebaseio.com/portfolio_pierreln/visitor_counter.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(montrealTime),
    });
  };

  useEffect(() => {
    if (!isCounted) {
      addingVisitor();
      setIsCounted(true);

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
  // useEffect(() => {
  //   let currentIndex = 0;
  //   const intervalId = setInterval(() => {
  //     currentIndex = (currentIndex + 1) % 1;
  //     setBackground(`backgroundPicture${currentIndex}`);
  //   }, 50000);

  //   return () => clearInterval(intervalId);
  // }, []);

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
