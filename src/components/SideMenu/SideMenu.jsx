import React, { useState } from 'react';
import styles from './SideMenu.module.css';
import Button from '../UI/Button'

function SideMenu() {
  return (
    <div className={styles.side_menu}>
      <ul>
        <li><Button>Home</Button></li>
        <li><Button>About</Button></li>
        <li><Button>Service</Button></li>
        <li><Button>Project</Button></li>
        <li><Button>Clients</Button></li>
        <li><Button>Contact</Button></li>
      </ul>
    </div>
  );
}

export default SideMenu;