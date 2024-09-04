import "../MainMenu/mainmenu.css";
import React from "react";
import MenuItems from "../MenuItems/menuitems";

const MainMenu = () => {
  return (
    <>
      <div className="mainmenu">
        <div className="meinmenuUp">
          <div className="mainmenuUpLeft">
            <h4>Today's Trend</h4>
          </div>
          <div className="mainmenuUpRight">
            <h4>More</h4>
          </div>
        </div>
        <div className="meinmenuDown">
          <MenuItems />
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
        <div className="meinmenuDown">
          <MenuItems />
        </div>
      </div>
    </>
  );
};

export default MainMenu;
