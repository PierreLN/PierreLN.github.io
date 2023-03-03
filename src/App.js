import React from "react";
import "./App.css";
import SideMenu from './components/SideMenu/SideMenu';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <>
      <div>
        <SideMenu></SideMenu>
        <MainPage></MainPage>
      </div>
    </>
  );
}

export default App;
