import styles from "../MainMenu/mainmenu.module.css";
import React from "react";
import MenuItems from "../MenuItems/menuitems";

const MainMenu = () => {
  return (
    <>
      <div className={styles.mainmenu}>
        <div className={styles.meinmenuUp}>
          <div className={styles.mainmenuUpLeft}>
            <h4>Today's Trend</h4>
          </div>
          <div className={styles.mainmenuUpRight}>
            <h4>More</h4>
          </div>
        </div>
        <div className={styles.meinmenuDown}>
          <MenuItems />
        </div>
      </div>
      <div className={styles.mainmenu}>
        <div className={styles.meinmenuUp}>
          <div className={styles.mainmenuUpLeft}>
            <h4>Today's Trend</h4>
          </div>
          <div className={styles.mainmenuUpRight}>
            <h4>More</h4>
          </div>
        </div>
        <div className={styles.meinmenuDown}>
          <MenuItems />
        </div>
      </div>
    </>
  );
};

export default MainMenu;
