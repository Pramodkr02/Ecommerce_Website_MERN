import React from "react";
import Cursoal from "../../../components/Homebanner/cursoal";
import HomeCat from "../../../components/HomeCat";
import HomeiIems from "../../../components/HomeItems/homeitems";
import ViewRecent from "../../../components/ViewRecent/viewrecent";
import MegaSell from "../../../components/MegaSell/megacell";
import NewLaunch from "../../../components/Newlaunch/newlaunch";

function MainMenu() {
  return (
    <>
      <Cursoal />
      <HomeCat />
      <HomeiIems />
      <ViewRecent />
      <MegaSell />
      <NewLaunch />
    </>
  );
}

export default MainMenu;
