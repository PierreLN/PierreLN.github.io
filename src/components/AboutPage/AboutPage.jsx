import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import profilImage from "../../Image/profilImage.jpg";
import styles from "./AboutPage.module.css";

function AboutPage(props) {
  const title = <h2>About me</h2>;
  const presentation = (
    <p>
      <p>Hello there and welcome to my portfolio website! </p>
      <br></br>
      <p>
        <p>
          As a full stack developer, I strive to create web applications that
          not only function efficiently, but also provide a seamless and
          enjoyable user experience. My expertise in both front-end and back-end
          development, coupled with my passion for technology, allows me to
          bring ideas to life and solve complex problems with ease.
        </p>
        <br></br>
        <p>
          From HTML/CSS, JavaScript and React on the front-end, to Python, C#,
          Neo4j, MongoDB, and SQL on the back-end, I have experience working
          with a variety of tools and technologies. Whether it's designing and
          building APIs, creating responsive UIs, or implementing efficient
          database structures, I am always eager to take on new challenges and
          learn new skills.
        </p>
        <br></br>
        <p>
          On this website, you will find a collection of my projects, skills,
          and experiences as a full stack developer. I hope that my work will
          give you a glimpse into my approach to development and my passion for
          creating impactful solutions. Please feel free to explore, and if you
          have any questions or would like to discuss potential opportunities,
          don't hesitate to reach out.
        </p>
      </p>
      <br></br>
      <p>
        Thank you for visiting, and I hope you enjoy your time here! Best
        regards,
      </p>
    </p>
  );

  return (
    <div className={styles.about_page}>
      <Card className={styles.image}>
        <img
          className={styles.profil_image}
          src={profilImage}
          alt="Profil"
        ></img>
      </Card>
      <Card className={styles.description}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.presentation}>{presentation}</p>
      </Card>
    </div>
  );
}

export default AboutPage;
