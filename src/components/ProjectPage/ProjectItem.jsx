import React, { useState, Fragment } from "react";
import styles from "./ProjectItem.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const ProjectItem = (props) => {
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
          id={props.id}
          key={props.key}
          title={props.title}
          message={props.description}
          image={props.image}
          onConfirm={modalOff}
        ></Modal>
      )}
      <div className={styles.project_section} onClick={projectSelectHandler}>
        <h3 className={styles.project_name}>{props.title}</h3>
        <img
          src={props.image}
          alt={props.title}
          className={styles.project_image}
        />
        <Card className={styles.project_description}>
          {props.description}
          <Card className={styles.project_language}>{props.language}</Card>
        </Card>
      </div>
    </Fragment>
  );
};

export default ProjectItem;
