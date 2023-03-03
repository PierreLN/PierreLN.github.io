import React, { Component } from "react";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import SideMenu from './components/SideMenu/SideMenu';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <SideMenu></SideMenu>
        <MainPage></MainPage>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </HashRouter>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
