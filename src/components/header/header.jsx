import React, { useState, useEffect } from "react";
import "../header/header.css";
import DropDown from "../DropDown/DropDown";
import axios from "axios";
import { ImSearch } from "react-icons/im";
import ShoppingLogo from "../../assets/images/ShoppingLogo.png";
import { MdCompare } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { RiSaveLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { VscSignOut } from "react-icons/vsc";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import NavBar from "../nav/navBar";
import Navigation from "../Navigation/navigation";

const Header = () => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);

  const [Categories, setCategories] = useState([
    "Milk & Drinks",
    "Wine & Drinks",
    "Clothings & Beauty",
    "Fresh Seafood",
    "Pet Foods & toy",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          // console.log(res.data.data);
          res.data.data.map((item) => {
            countryList.push(item.country);
            //console.log(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="Header-Nav">
        <div className="logo-header">
          <img src={ShoppingLogo} alt="#" className="Logo1" />
        </div>
        <div className="searchbar">
          <DropDown data={Categories} placeholder={"All categories"} />

          <input
            type="text"
            placeholder="Search Something..."
            className="InputSearch"
          />
          <ImSearch className="SearchIcon" />
        </div>
        {/* <div className="getLocation">
          <DropDown data={countryList} placeholder={"Your Location"} />
        </div> */}
        <div className="YourLocation" data={countryList}>
          <IoLocationSharp />
          <span className="YLocation">Your Loaction</span>
          <IoIosArrowDown />
        </div>

        <ul className="headerTabs">
          <li className="navItems">
            <MdCompare className="navIcon" />
            <span className="navItems-list">Compare</span>
          </li>
          <li className="navItems">
            <FaHeart className="navIcon" />
            <span className="navItems-list">Wishlist</span>
          </li>
          <li className="navItems">
            <FaCartArrowDown className="navIcon" />
            <span className="navItems-list">Cart</span>
          </li>
          <li
            className="navItems"
            onClick={() => setisOpenDropDown(!isOpenDropDown)}
          >
            <RiAccountPinBoxFill className="navIcon" />
            <span className="navItems-list">Account</span>

            {isOpenDropDown !== false && (
              <ul className="dropdownMenu">
                <li>
                  <RiAccountCircleLine />
                  <span className="navItems-list">My account</span>
                </li>
                <li>
                  <MdOutlineSpatialTracking />
                  <span className="navItems-list">Order Tracking</span>
                </li>
                <li>
                  <RiSaveLine />
                  <span className="navItems-list">My Voucher</span>
                </li>
                <li>
                  <FiSettings />
                  <span className="navItems-list">Setting</span>
                </li>
                <li>
                  <VscSignOut />
                  <span className="navItems-list">Sign out</span>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      {/* <NavBar /> */}
      <Navigation />
    </>
  );
};
export default Header;
