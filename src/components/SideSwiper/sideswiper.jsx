import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";
import "../SideSwiper/sideswiper.css";
import "swiper/css/pagination";

export default function SideSwiper() {
  return (
    <>
      <div className="sideswiper-container">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper3"
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
    </>
  );
}
