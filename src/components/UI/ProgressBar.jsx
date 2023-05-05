import styles from "./ProgressBar.module.css";
import React, { useState, useEffect } from "react";

function ProgressBar(props) {
  const [progress, setProgress] = useState("Loading");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (props.completion >= 99) {
      setProgress("Ready");
      setIsReady(true);
    }
  }, [props.completion]);

  return (
    <div>
      <div className={styles.label}>
        <div type={props.type} className={`${!isReady ? styles['container-red'] : styles.container}`}>
          {progress}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
