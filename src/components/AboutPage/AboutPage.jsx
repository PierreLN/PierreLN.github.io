import React, { Fragment } from "react";
import Card from "../UI/Card";
import styles from "./AboutPage.module.css";

function AboutPage() {
  const title = <h2>About me</h2>;
  const presentation = (
    <Fragment>
      <div>Hello there and welcome to my portfolio website! </div>
      <br />
      <div>
        <div>
          As a full stack developer, I strive to create <b>web applications</b>{" "}
          that not only function efficiently, but also provide a seamless and
          enjoyable user experience. My expertise in both front-end and back-end
          development, coupled with my passion for technology, allows me to
          bring ideas to life and solve complex problems with ease.
        </div>
        <br />
        <div>
          From <b>HTML/CSS, JavaScript and React</b> on the front-end, to{" "}
          <b>Python, Flask, Django and C# </b>
          on the back-end, I have experience working with a variety of tools and
          technologies. Whether it's designing and building APIs, creating
          responsive UIs, or implementing efficient database structures, I am
          always eager to take on new challenges and learn new skills.
        </div>
        <br />
        <div>
          On this website, you will find a collection of my projects, skills,
          and experiences as a full stack developer. I hope that my work will
          give you a glimpse into my approach to development and my passion for
          creating impactful solutions. Please feel free to explore, and if you
          have any questions or would like to discuss potential opportunities,
          don't hesitate to <b>reach out on the Contact section</b>.
        </div>
      </div>
      <br />
      <div>
        Thank you for visiting, and I hope you enjoy your time here!
        <br />
        <br />
        <div>Best regards,</div>
      </div>
    </Fragment>
  );

  return (
    <div className={styles.about_page}>
      <Card className={styles.image}>
        <div className={styles.profil_image}></div>
      </Card>
      <Card className={styles.description_section}>
        <div className={styles.description_section_2}>
          <div className={styles.description}>
            <div className={styles.title}>{title}</div>
            <div className={styles.presentation}>{presentation}</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AboutPage;
