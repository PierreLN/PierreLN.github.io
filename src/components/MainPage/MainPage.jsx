import React from "react";
import styles from "./MainPage.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import profilImage from "../../Image/profilImage.jpg";

function MainPage() {
  const name = <h1>Pierre Long Nguyen</h1>;
  const description = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut tortor
      non purus dictum consectetur. Maecenas faucibus elit ut elit consequat, in
      faucibus arcu sodales. Vestibulum tincidunt, augue quis commodo mollis,
      quam justo ullamcorper magna, in molestie nunc nibh et nisl. Quisque eget
      mi ut odio varius faucibus eget vel urna.
    </p>
  );

  return (
    <div className={styles.main_page}>
      <Card>
        <img className={styles.profil_image} src={profilImage} alt="Profil"></img>
      </Card>
      <Card>{name}</Card>
      <Card>{description}</Card>

      <Button>Learn More</Button>
    </div>
  );
}

export default MainPage;
