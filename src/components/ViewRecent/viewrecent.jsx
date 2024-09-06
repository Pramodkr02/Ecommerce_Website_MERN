import Styles from "../ViewRecent/viewrecent.module.css";
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
      <div className={Styles.ViewRecent}>
        <div className={Styles.RecentviewTop}>
          <h4>Recently Viewed </h4>
        </div>
        <div className={Styles.RecentviewDown}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={8}
            spaceBetween={10}
          >
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={`${Styles.Slide} ${Styles.slide1}`}>
                <div className={Styles.container}>
                  <div className={Styles.containerUp}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?size=626&ext=jpg&ga=GA1.1.2114228154.1725182854&semt=ais_hybrid"
                      alt=""
                    />
                  </div>
                  <div className={Styles.containerDown}>
                    <p>Women's Ring</p>
                    <div className={Styles.price}>
                      <div className={Styles.currPrice}>$1599</div>
                      <div className={Styles.oldPrice}>2399</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ViewRecent;
