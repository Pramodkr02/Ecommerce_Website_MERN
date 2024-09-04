import "../MenuItems/menuitems.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItems/index";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function MenuItems() {
  return (
    <>
      <div className="menuItems"></div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={10}
      >
        <SwiperSlide>
          <div className="slide slide1">
            <div className="view">
              <Link to="/login">View</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <Link to="/login"></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide5">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide6">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide7">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide8">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide9">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide10">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide11">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide12">1</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
