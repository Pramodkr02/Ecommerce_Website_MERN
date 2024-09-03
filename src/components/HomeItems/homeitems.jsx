import React from "react";
import "../HomeItems/homeitems.css";
import SideSwiper from "../SideSwiper/sideswiper";
import MainMenu from "../MainMenu/mainmenu";

const HomeiIems = () => {
  return (
    <>
      <div className="HomeItems">
        <div className="homeItemLeft">
          <SideSwiper />
        </div>
        <div className="homeItemRight">
          <MainMenu />
        </div>
      </div>
    </>
  );
};

export default HomeiIems;
