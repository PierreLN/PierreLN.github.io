import React, { useState } from 'react';
import styles from './SideMenu.module.css';
import Button from '../UI/Button'

function SideMenu() {
  return (
    <div className={styles.side_menu}>
      <ul>
        <li>
          <Button>HOME</Button>
        </li>
        <li>
          <Button>ABOUT</Button>
        </li>
        <li>
          <Button>SERVICES</Button>
        </li>
        <li>
          <Button>PROJECTS</Button>
        </li>
        <li>
          <Button>CLIENTS</Button>
        </li>
        <li>
          <Button>CONTACT</Button>
        </li>
        <li>
          <Button>FR</Button>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;