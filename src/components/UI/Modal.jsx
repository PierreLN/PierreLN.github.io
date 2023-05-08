import React, { Fragment } from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = ({onConfirm}) => {
  return <div className={styles.backdrop} onClick={onConfirm}></div>;
};

const Overlay = ({title, message, image}) => {
  return (
    <Card className={styles.modal}>
      <header>
        <h2>{title}</h2>
      </header>
      <div>
        <div className={styles.image_section}>
          <img className={styles.image} src={image} alt={image} />
        </div>
        <p>{message}</p>
      </div>
    </Card>
  );
};

const Modal = ({onConfirm, title, message, image}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={title}
          image={image}
          message={message}
          onConfirm={onConfirm}
        ></Overlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
