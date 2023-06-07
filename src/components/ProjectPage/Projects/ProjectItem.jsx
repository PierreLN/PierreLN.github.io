import React, { useState, Fragment } from "react";
import styles from "./ProjectItem.module.css";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

function ProjectItem({ id, title, description, image, language }) {
  const [projectSelected, setProjectSelected] = useState(false);

  const projectSelectHandler = (event) => {
    setProjectSelected(true);
  };

  const modalOff = (event) => {
    setProjectSelected(false);
  };

  return (
    <Fragment>
      {projectSelected && (
        <Modal
          key={id}
          id={id}
          title={title}
          message={description}
          image={image}
          onConfirm={modalOff}
        ></Modal>
      )}
      <div className={styles.project_section}>
        <div className={styles.project_section_2} onClick={projectSelectHandler}>
          <div className={styles.container} data-title={title}>
            <img src={image} alt={title} className={styles.project_image}></img>
          </div>
          <Card className={styles.project_description}>
            <h1 className={styles.title}>{title}</h1> <div>{description}</div>
            <Card className={styles.project_language}>{language}</Card>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectItem;
