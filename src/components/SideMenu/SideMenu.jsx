import React, { useState } from 'react';
import styles from './SideMenu.module.css';

function SideMenu() {
  return (
    <div className={styles.side_menu}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default SideMenu;