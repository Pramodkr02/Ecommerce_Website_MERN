import "../ViewRecent/viewrecent.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const ViewRecent = () => {
  return (
    <>
      <div className="ViewRecent">
        <div className="RecentviewTop">
          <h4>Recently Viewed </h4>
        </div>
        <div className="RecentviewDown">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={10}
            spaceBetween={10}
          >
            <SwiperSlide>
              {" "}
              <div className="Slide slide1"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide2"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide3"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide4"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide5"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide6"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide7"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide8"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide9"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide10"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide11"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide12"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide13"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide14"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide15"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide16"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide17"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide18"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide19"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide20"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="Slide slide21"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ViewRecent;
