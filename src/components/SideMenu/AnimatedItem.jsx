import React, { Fragment } from "react";
import styles from "./AnimatedItem.module.css";

function AnimatedItem ({children, delayTime}) {
  const delay = parseFloat(delayTime/5)
  return (
    <Fragment>
      <div className={styles.animated} style={{animationDelay: `${delay}s`}}>{children}</div>
    </Fragment>
  );
};

export default AnimatedItem;
