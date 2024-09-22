import React from "react";
import styles from "../MyAccount/myaccount.module.css";

import { FaCartArrowDown } from "react-icons/fa";
import { IoArrowRedo } from "react-icons/io5";

const MyAccount = () => {
  return (
    <>
      <div className={styles.MyAccount}>
        <div className={styles.MyAccountLeft}>
          <div className={styles.MyAccountLeftTilte}>
            <div className={styles.TitleLeft}>
              <img
                src="https://w7.pngwing.com/pngs/683/60/png-transparent-man-s-profile-illustration-computer-icons-user-profile-profile-ico-photography-silhouette-desktop-wallpaper-thumbnail.png"
                alt=""
              />
            </div>
            <div className={styles.TitleRight}>
              <span>Hello!</span>
              <br />
              <span className={styles.TitleName}>Pramod Kumar</span>
            </div>
          </div>
          <div className={styles.MyAccountLeftMain}>
            <div className={styles.myorder}>
              <div className={styles.myorderLeft}>
                {" "}
                <span>
                  <FaCartArrowDown />
                </span>
                <span>My Order</span>
              </div>
              <div className={styles.myorderRight}>
                <span>
                  <IoArrowRedo />
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.MyAccountLeftdown}>
            <span>Need help ?</span>
          </div>
        </div>

        <div className={styles.MyAccountright}></div>
      </div>
    </>
  );
};

export default MyAccount;
