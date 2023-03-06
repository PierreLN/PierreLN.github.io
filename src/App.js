import React, { useState, UseState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [location, setlocation] = useState("contact");
  
  const locationHandler = (data) => {
    setlocation(data);
  };

  return (
    <>
      <div>
        <SideMenu onMove={locationHandler}></SideMenu>
        <MainPage selectedPage={location}></MainPage>
      </div>
    </>
  );
}

export default App;
