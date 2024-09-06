import "../MainMenu/mainmenu.css";
import React from "react";

import Catogeroies from "../Catogeroies/catogeroies";

const MainMenu = () => {
  return (
    <>
      <div className="mainmenu">
        <div className="meinmenuUp">
          <div className="mainmenuUpLeft">
            <h4>Today's Trend</h4>
          </div>
          <div className="mainmenuUpRight">
            <h4></h4>
          </div>
        </div>
        <div className="meinmenuDown">
          {/* <MenuItems /> */}
          <Catogeroies />
        </div>
      </div>
      <div className="mainmenu">
        <div className="meinmenuUp">
          <div className="mainmenuUpLeft">
            <h4>Today's Trend</h4>
          </div>
          <div className="mainmenuUpRight">
            <h4>More</h4>
          </div>
        </div>
        <div className="meinmenuDown">{/* <MenuItems /> */}</div>
      </div>
    </>
  );
};

export default MainMenu;
