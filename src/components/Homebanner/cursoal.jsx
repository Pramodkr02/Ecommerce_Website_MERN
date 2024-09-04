import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "../Homebanner/cursoal.css";
import "swiper/css/pagination";

const Cursoal = () => {
  return (
    <>
      <div className="cursolContainer">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "40px",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-size": "12px",
          }}
          pagination={{ clikable: true }}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            {" "}
            <div className="slide slide1"></div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide slide2"></div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide slide3"></div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide slide4"></div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide  slide5"></div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide  slide6"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Cursoal;
