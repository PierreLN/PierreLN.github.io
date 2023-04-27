import React, { useState, Fragment } from "react";
import styles from "./ProjectItem.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const ProjectItem = (props) => {
  const [projectSelected, setProjectSelected] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const [messageSelected, setMessageSelected] = useState("");

  const imageSelectHandler = (event) => {
    setProjectSelected(true);
    setSelectedProject(event.currentTarget.children[0].innerText);
    setMessageSelected(event.currentTarget.children[2].innerText);
  };

  const modalOff = (event) => {
    setProjectSelected(false);
  };

  return (
    <Fragment>
      {projectSelected && (
        <Modal
          title={selectedProject}
          message={messageSelected}
          onConfirm={modalOff}
        ></Modal>
      )}
      <div className={styles.project_section} onClick={imageSelectHandler}>
        <h3 className={styles.project_name}>{props.title}</h3>
        <img src={props.image} alt={props.title} className={styles.project_image}/>
        <Card className={styles.project_description}>{props.description}</Card>
      </div>
    </Fragment>
  );
};

export default ProjectItem;
