import React, { useState, Fragment } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [location, setlocation] = useState("home");
  const [isMusicOn, setIsMusicOn] = useState(false);

  const locationHandler = (data) => {
    setlocation(data);
  };

  const onMoveProject = () => {
    setlocation("project");
  };

  const musicOn = () => {
    setIsMusicOn(true);
  };

  return (
    <Fragment>
      <div>
        <SideMenu onMove={locationHandler} isMusicOn={isMusicOn}></SideMenu>
        <MainPage
          selectedPage={location}
          onClick={onMoveProject}
          musicOn={musicOn}
        ></MainPage>
      </div>
    </Fragment>
  );
}

export default App;
