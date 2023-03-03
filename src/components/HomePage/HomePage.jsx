import React from "react";
import styles from "./HomePage.module.css";
import Card from "../UI/Card";

function HomePage(props) {


    return (
      <div>
        <Card> Greetings and welcome to my corner of the internet!!</Card>
        <Card>My name is Pierre</Card>
        <Card>I'm a full stack developer</Card>
      </div>
    );
}

export default HomePage;