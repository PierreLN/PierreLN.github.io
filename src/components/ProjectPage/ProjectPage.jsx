import React, { Fragment } from "react";
import styles from "./ProjectPage.module.css";
import Projects from "./Projects/Projects";

function ProjectPage() {
  return (
    <Fragment>
      <div className={styles.project_page}>
        <Projects></Projects>
      </div>
    </Fragment>
  );
}

export default ProjectPage;
