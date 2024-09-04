import React, { useState } from "react";
import "../Navigation/navigation.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { FaMicroblog } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { MdOutlineBakeryDining } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";
import { IoWomanSharp } from "react-icons/io5";
import { GiCosmicEgg } from "react-icons/gi";
import { TiStopwatch } from "react-icons/ti";
import { FaChildDress } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(true);

  return (
    <nav>
      <div className="Nav-container">
        <div className="navPart1">
          <Button
            className="allCatTab"
            onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
          >
            <span className="icon1 ">
              <IoMdMenu />
            </span>
            <span className="text">ALL CATOGERIES</span>
            <span className="icon2">
              <FaAngleDown />
            </span>
          </Button>

          <div
            className={`sidebarNav ${isOpenSidebarVal === true ? "open" : ""}`}
          >
            <ul>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <IoManSharp />
                    </span>
                    Men <FaAngleRight className="angle-fonts" />
                  </Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jwellery</Button>
                  </Link>
                </div>
              </li>

              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <IoWomanSharp />
                    </span>
                    Women <FaAngleRight className="angle-fonts" />
                  </Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jwellery</Button>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <GiCosmicEgg />
                    </span>
                    Beauty <FaAngleRight className=" angle-fonts" />
                  </Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jwellery</Button>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <TiStopwatch />
                    </span>
                    Watches <FaAngleRight className="angle-fonts" />
                  </Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jwellery</Button>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <FaChildDress />
                    </span>{" "}
                    kid's <FaAngleRight className="angle-fonts" />
                  </Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jwellery</Button>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <FaGift />
                    </span>
                    Gifts <FaAngleRight className="angle-fonts" />
                  </Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jwellery</Button>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <IoManSharp />
                    </span>
                    Men
                  </Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jwellery</Button>
                  </Link>
                </div>
              </li>

              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <IoWomanSharp />
                    </span>
                    Women
                  </Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Fragrances</Button>
                  </Link>
                  <Link to="/">
                    <Button>Accesories</Button>
                  </Link>
                  <Link to="/">
                    <Button>jwellery</Button>
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <GiCosmicEgg />
                    </span>
                    Beauty
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <TiStopwatch />
                    </span>
                    Watches
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <FaChildDress />
                    </span>{" "}
                    kid's
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <Button>
                    <span>
                      <FaGift />
                    </span>
                    Gifts
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navPart2 ">
          <ul className="list ">
            <li className=" list-inline-item">
              <Link to="/">
                <IoHome /> &nbsp; Home
              </Link>
            </li>
            <li className=" list-inline-item">
              <Link to="/">
                {" "}
                <GiClothes /> &nbsp; Fashion
              </Link>
              <div className="submenu shadow">
                <Link to="/">
                  <Button>Footwear</Button>
                </Link>
                <Link to="/">
                  <Button>Watches</Button>
                </Link>
                <Link to="/">
                  <Button>Fragrances</Button>
                </Link>
                <Link to="/">
                  <Button>Accesories</Button>
                </Link>
                <Link to="/">
                  <Button>jwellery</Button>
                </Link>
              </div>
            </li>
            <li className=" list-inline-item">
              <Link to="/">
                {" "}
                <FaMobileAlt /> &nbsp; Electronic
              </Link>
              <div className="submenu shadow">
                <Link to="/">
                  <Button>Footwear</Button>
                </Link>
                <Link to="/">
                  <Button>Watches</Button>
                </Link>
                <Link to="/">
                  <Button>Fragrances</Button>
                </Link>
                <Link to="/">
                  <Button>Accesories</Button>
                </Link>
                <Link to="/">
                  <Button>jwellery</Button>
                </Link>
              </div>
            </li>

            <li className=" list-inline-item">
              <Link to="/">
                {" "}
                <MdOutlineBakeryDining /> &nbsp; Bakery
              </Link>
              <div className="submenu shadow">
                <Link to="/">
                  <Button>Footwear</Button>
                </Link>
                <Link to="/">
                  <Button>Watches</Button>
                </Link>
                <Link to="/">
                  <Button>Fragrances</Button>
                </Link>
                <Link to="/">
                  <Button>Accesories</Button>
                </Link>
                <Link to="/">
                  <Button>jwellery</Button>
                </Link>
              </div>
            </li>
            <li className=" list-inline-item">
              <Link to="/">
                {" "}
                <GiFruitBowl /> &nbsp; Grocery
              </Link>
              <div className="submenu shadow">
                <Link to="/">
                  <Button>Footwear</Button>
                </Link>
                <Link to="/">
                  <Button>Watches</Button>
                </Link>
                <Link to="/">
                  <Button>Fragrances</Button>
                </Link>
                <Link to="/">
                  <Button>Accesories</Button>
                </Link>
                <Link to="/">
                  <Button>jwellery</Button>
                </Link>
              </div>
            </li>
            <li className=" list-inline-item">
              <Link to="/">
                {" "}
                <FaMicroblog /> &nbsp; Pages
              </Link>
              <div className="submenu shadow">
                <Link>
                  <Button>My Account</Button>
                </Link>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Resister</Button>
                </Link>
                <Link to="/forgotpassword">
                  <Button>Forgot Password</Button>
                </Link>
                <Link>
                  <Button>Reset Password</Button>
                </Link>
                <Link>
                  <Button>Purchase Guide</Button>
                </Link>
                <Link>
                  <Button>Privecy Policy</Button>
                </Link>
                <Link>
                  <Button>Terms of Service</Button>
                </Link>
                <Link>
                  <Button>404 Page</Button>
                </Link>
              </div>
            </li>
            <li className=" list-inline-item">
              <Link to="/">
                {" "}
                <MdPermContactCalendar /> &nbsp; Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
