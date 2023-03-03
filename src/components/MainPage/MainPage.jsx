import React from 'react';
import styles from './MainPage.module.css';
import Button from '../UI/Button';

function MainPage() {
  return (
    <div className={styles.main_page}>
      <h1>Welcome to My Website</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut tortor non purus dictum consectetur. Maecenas faucibus elit ut elit consequat, in faucibus arcu sodales. Vestibulum tincidunt, augue quis commodo mollis, quam justo ullamcorper magna, in molestie nunc nibh et nisl. Quisque eget mi ut odio varius faucibus eget vel urna.</p>
      <Button>Learn More</Button>
    </div>
  );
}

export default MainPage;