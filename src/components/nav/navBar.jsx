import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../nav/navBar.css";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { ImFire } from "react-icons/im";
import { ImHeadphones } from "react-icons/im";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Button } from "@mui/material";

const NavBar = () => {
  const [isPageOpenSelect, setisPageOpenSelect] = useState(false);
  const [isMegaMenuOpenSelect, setMegaMenuOpenSelect] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  const PageOpenSelect = () => {
    if (isPageOpenSelect === true) {
      setisPageOpenSelect(false);
    } else {
      setisPageOpenSelect(true);
    }
  };

  const dropMenudata = [
    "About Us",
    "Contact",
    "My Account",
    "Login",
    "Resister",
    "Forgot Password",
    "Reset Password",
    "Purchase Guide",
    "Privecy Policy",
    "Terms of Service",
    "404 Page",
  ];

  const MegaMenuRes = () => {
    if (isMegaMenuOpenSelect === true) {
      setMegaMenuOpenSelect(false);
    } else {
      setMegaMenuOpenSelect(true);
    }
  };

  return (
    <div className="NavBar">
      <div className="navRight">
        <button className="bAllc">
          <HiOutlineViewGridAdd />
          <span className="broAllC">BROWESE All CATOGERIES</span>
          <HiChevronDown />
        </button>
      </div>
      <div className="navCenter">
        <ul className="navCenter-item">
          <li>
            <ImFire className="fire" />
            <span className="De-als">Deals</span>
          </li>
          <li>Men</li>
          <li>Women</li>
          <li>Kid's</li>

          <li>Electronics</li>
          <ClickAwayListener onClickAway={handleClickAway}>
            <li className="page-res">
              <span onClick={PageOpenSelect}>Pages</span>
              <HiChevronDown />
              {isPageOpenSelect && (
                <div className="drop-down-menu">
                  <ul className="drop-down-menu-list">
                    <li>
                      <Link to="/aboutus">
                        <Button>About Us</Button>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Button>Contact</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/myaccount">
                        <Button>My Account</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <Button>Login</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup">
                        <Button>Resister</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/forgotpassword">
                        <Button>Forgot Password</Button>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Button>Reset Password</Button>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Button>Purchase Guide</Button>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Button>Privecy Policy</Button>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Button>Terms of Service</Button>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <Button>404 Page</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ClickAwayListener>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navCenterRight">
        <div className="phNo">
          <ImHeadphones className="head-phone" />
          <span className="ph-No">
            <p>+91 1900-5006</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
