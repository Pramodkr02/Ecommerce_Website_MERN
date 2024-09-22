import styles from "../Catogeroies/catogeries.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

const Catogeroies = () => {
  return (
    <>
      <div className={styles.Catogeroies}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={6}
          spaceBetween={10}
        >
          <SwiperSlide className={styles.slide}>
            {" "}
            <div className={styles.container}>
              <Link to="/shopingsection">
                <div className={styles.containerUp}>
                  <img
                    src="https://t3.ftcdn.net/jpg/07/84/97/36/240_F_784973611_6TOCANcQdm8NAGIG6bCgqBJdTBKiJSjF.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.containerDown}>
                  <p>Headphone</p>
                  <h6>Grab</h6>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide} ${styles.slide2}`}>
            {" "}
            <div className={styles.container}>
              <div className={styles.containerUp}>
                <img
                  src="https://t3.ftcdn.net/jpg/04/87/59/10/240_F_487591053_1gMK8oVwGaygolMPDTpVTtPYJhKCpTQQ.jpg"
                  alt=""
                />
              </div>
              <div className={styles.containerDown}>
                <p>Laptop</p>
                <h6>Grab</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide} ${styles.slide3}`}>
            {" "}
            <div className={styles.container}>
              <div className={styles.containerUp}>
                <img
                  src="https://t4.ftcdn.net/jpg/07/73/29/65/240_F_773296542_CqLAZn6JfyxOmkh90zcJbJjw30OgUC4g.jpg"
                  alt=""
                />
              </div>
              <div className={styles.containerDown}>
                <p>Primium Bed</p>
                <h6>Grab</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide} ${styles.slide4}`}>
            {" "}
            <div className={styles.container}>
              <div className={styles.containerUp}>
                <img
                  src="https://t4.ftcdn.net/jpg/06/86/41/77/240_F_686417749_hML0fMptb8D3CLWVzGsMUtDV6Q6m1HPs.jpg"
                  alt=""
                />
              </div>
              <div className={styles.containerDown}>
                <p>Men's Coat</p>
                <h6>Grab</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide} ${styles.slide5}`}>
            {" "}
            <div className={styles.container}>
              <div className={styles.containerUp}>
                <img
                  src="https://t3.ftcdn.net/jpg/08/28/27/86/240_F_828278646_ZV752n6a28W0JPOqbd5Ic2vRRgP03EPS.jpg"
                  alt=""
                />
              </div>
              <div className={styles.containerDown}>
                <p>Mobile</p>
                <h6>Grab</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide} ${styles.slide6}`}>
            {" "}
            <div className={styles.container}>
              <div className={styles.containerUp}>
                <img
                  src="https://t4.ftcdn.net/jpg/07/87/62/79/240_F_787627909_a44XqBlMzOygUZtxHi0MVyPCWPP23p1U.jpg"
                  alt=""
                />
              </div>
              <div className={styles.containerDown}>
                <p>Saree Colection</p>
                <h6>Grab</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide} ${styles.slide7}`}>
            {" "}
            <div className={styles.container}>
              <div className={styles.containerUp}>
                <img
                  src="https://t3.ftcdn.net/jpg/07/84/97/36/240_F_784973611_6TOCANcQdm8NAGIG6bCgqBJdTBKiJSjF.jpg"
                  alt=""
                />
              </div>
              <div className={styles.containerDown}>
                <p>Headphone</p>
                <h6>Grab</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide} ${styles.slide8}`}>
            {" "}
            <div className={styles.container}>
              <div className={styles.containerUp}>
                <img
                  src="https://t3.ftcdn.net/jpg/07/84/97/36/240_F_784973611_6TOCANcQdm8NAGIG6bCgqBJdTBKiJSjF.jpg"
                  alt=""
                />
              </div>
              <div className={styles.containerDown}>
                <p>Headphone</p>
                <h6>Grab</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.Lastslide} ${styles.slide9}`}>
            {" "}
            <div className={styles.container}>
              <div className={styles.viewMore}>
                <div className={styles.viewBox}>
                  <div className={styles.more}>More</div>
                  <div>
                    <FaCircleArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Catogeroies;
