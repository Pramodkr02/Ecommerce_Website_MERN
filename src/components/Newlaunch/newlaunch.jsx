import "../Newlaunch/newlaunch.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Autoplay } from "swiper/modules";

const NewLaunch = () => {
  return (
    <>
      <div className="NewLaunch">
        <div className="newlaunchLeft"></div>
        <div className="newlaunchMid">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="Slide Slide1"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Slide Slide2"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Slide Slide3"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Slide Slide4"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Slide Slide5"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Slide Slide6"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Slide Slide7"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="newlaunchRight">hello</div>
      </div>
    </>
  );
};

export default NewLaunch;
