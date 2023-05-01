import React, { Fragment } from "react";
import styles from "./AnimatedItem.module.css";

const AnimatedItem = (props) => {
  const delayTime = parseFloat(props.delayTime/5)
  return (
    <Fragment>
      <div className={styles.animated} style={{animationDelay: `${delayTime}s`}}>{props.children}</div>
    </Fragment>
  );
};

export default AnimatedItem;
