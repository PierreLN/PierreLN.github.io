import styles from "./ProgressBar.module.css";
import React, { useState, useEffect } from "react";

function ProgressBar({completion, type}) {
  const [progress, setProgress] = useState("Loading");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (completion >= 99) {
      setProgress("Ready");
      setIsReady(true);
    }
  }, [completion]);

  return (
    <div>
      <div className={styles.label}>
        <div type={type} className={`${styles.container} ${!isReady ? styles.red : '' }`}>
          {progress}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
