import styles from "./ProgressBar.module.css";
import React, { useState, useEffect } from "react";

function ProgressBar(props) {
  const [progress, setProgress] = useState("Loading");
  

  useEffect(() => {
    if (props.completion >= 99) {
      setProgress("Ready");
    }
  }, [props.completion]);

  return (
    <div>
      <div className={styles.label}>
        <div type={props.type} className={styles.container}>{progress}</div>
      </div>
    </div>
  );
}

export default ProgressBar;
