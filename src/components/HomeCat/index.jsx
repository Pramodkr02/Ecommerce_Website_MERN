import React, { useState } from "react";
import "../HomeCat/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ef",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#ecffec",
    "#fff3ef",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ef",
    "#f2fce4",
  ]);
  return (
    <section className="homeCat">
      <div className="">
        <h3 className="">Featured Categories</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={9}
          navigation={true}
          slidesPerGroup={3}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide>
                <div
                  className="item text-center cursor"
                  style={{ background: item }}
                  key={index}
                >
                  <img
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png"
                    alt=""
                  />
                  <h6>Burger</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
