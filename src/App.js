import React, { useState, UseState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [location, setlocation] = useState("home");
  
  const locationHandler = (data) => {
    setlocation(data);
  };

  const onMoveProject = () => {
    setlocation("project");
  }

  return (
    <>
      <div>
        <SideMenu onMove={locationHandler}></SideMenu>
        <MainPage selectedPage={location} onClick={onMoveProject}></MainPage>
      </div>
    </>
  );
}

export default App;
