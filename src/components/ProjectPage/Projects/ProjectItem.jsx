import React, { useState, Fragment } from "react";
import styles from "./ProjectItem.module.css";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

function ProjectItem({id, title, description, image, language}) {
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
      <div className={styles.project_section} onClick={projectSelectHandler}>
        <div className={styles.project_name}>{title}</div>
        <img
          src={image}
          alt={title}
          className={styles.project_image}
        ></img>
        <Card className={styles.project_description}>
          {description}
          <Card className={styles.project_language}>{language}</Card>
        </Card>
      </div>
    </Fragment>
  );
};

export default ProjectItem;
