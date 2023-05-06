import React, { useState, Fragment } from "react";
import styles from "./ProjectItem.module.css";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

const ProjectItem = (id, key, title, description, image, language) => {
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
          id={id}
          key={key}
          title={title}
          message={description}
          image={image}
          onConfirm={modalOff}
        ></Modal>
      )}
      <div className={styles.project_section} onClick={projectSelectHandler}>
        <h3 className={styles.project_name}>{title}</h3>
        <img
          src={image}
          alt={title}
          className={styles.project_image}
        />
        <Card className={styles.project_description}>
          {description}
          <Card className={styles.project_language}>{language}</Card>
        </Card>
      </div>
    </Fragment>
  );
};

export default ProjectItem;
