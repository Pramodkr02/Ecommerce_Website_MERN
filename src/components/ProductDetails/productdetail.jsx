import styles from "../ProductDetails/productdetail.module.css";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <div className={styles.imageDetails}></div>
          </div>
          <div className={styles.itemDetail}></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
