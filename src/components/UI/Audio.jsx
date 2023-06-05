import { useState, useEffect, useRef } from "react";
import music from "../../Audio/homepage_soundtrack.mp3";
import styles from './Audio.module.css'

const Audio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.play()
      audioRef.current.volume = 0.2;
    }
  }, []);
  return (
    <div className={styles['audio-page']}>
      <audio autoPlay ref={audioRef} className={styles.audio}>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Audio;
