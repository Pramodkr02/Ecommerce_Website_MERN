import React from "react";
import "../Footer/footer.css";
import { GiPoloShirt } from "react-icons/gi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="conatiner">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <GiPoloShirt />
            </span>
            <span className="ml-2">Every Fresh Products</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <MdOutlineDeliveryDining />
            </span>
            <span className="ml-2">Free delivery for order over $70</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <MdDiscount />
            </span>
            <span className="ml-2">Daily Mega Discount</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <FaDollarSign />
            </span>
            <span className="ml-2">Best Price on The Market</span>
          </div>
        </div>

        <div className="row mt-4 linkWrap">
          <div className="col">
            <h5>FRUITS & VEGITABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegitable</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies </Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUITS & VEGITABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegitable</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies </Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUITS & VEGITABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegitable</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies </Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUITS & VEGITABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegitable</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies </Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUITS & VEGITABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegitable</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasoning</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & Veggies </Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyRight mt-3 pt-3 pb-3">
          <p className="mb-0">
            Copyright 2024 Bocola WordPress Theme. All rights are reserevd.
          </p>
          <ul className=" list list-inline">
            <li className="list-inline-item">
              <Link to="#">
                <FaFacebook />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <AiFillInstagram />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
