import React, { Fragment } from "react";
import styles from "./AnimatedItem.module.css";

const AnimatedItem = (props) => {
  return (
    <Fragment>
      <div className={styles.animated} style={{animationDelay: props.key + 'ms'}}>{props.children}</div>
    </Fragment>
  );
};

export default AnimatedItem;
