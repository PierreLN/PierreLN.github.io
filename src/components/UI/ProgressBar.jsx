import styles from "./ProgressBar.module.css";
import React, { useState, useEffect } from "react";

function ProgressBar(props) {
    const [progress, setProgress] = useState('Loading')

    useEffect(() => {
        if (props.completion >= 99) {
            setProgress('Ready')
        }        
    }, [props.completion])

  return (
    <div type={props.type} className={styles.container}>
      <div className={styles.filler} style={{ width: props.completion}}>
        <div className={styles.label}>{progress}</div>
      </div>
    </div>
  );
}

export default ProgressBar;
