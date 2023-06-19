import { useState, useEffect, useRef } from "react";
import music from "../../Audio/Asian_spirit_1.mp3";
import styles from './Audio.module.css'

const Audio = ({ isMusicOn }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  useEffect(() => {
    if (isMusicOn) {
      audioRef.current.play()
    }
  },[isMusicOn])

  return (
    <div className={styles['audioPage']}>
      <audio controls ref={audioRef} className={styles.audio}>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Audio;
