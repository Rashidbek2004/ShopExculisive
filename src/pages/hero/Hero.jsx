import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="writes">
          <div className="write">
            <h2>Woman’s Fashion</h2>
          </div>{" "}
          <div className="write">
            <h2>Men’s Fashion</h2>
          </div>{" "}
          <div className="write">
            <h2>Electronics</h2>
          </div>{" "}
          <div className="write">
            <h2>Home & Lifestyle</h2>
          </div>{" "}
          <div className="write">
            <h2>Medicine</h2>
          </div>{" "}
          <div className="write">
            <h2>Sports & Outdoor</h2>
          </div>{" "}
          <div className="write">
            <h2>Baby’s & Toys</h2>
          </div>{" "}
          <div className="write">
            <h2>Groceries & Pets</h2>
          </div>{" "}
          <div className="write">
            <h2>WHealth & Beauty</h2>
          </div>
        </div>
        <div className="images">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/imgs/Frame 560.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/Frame 560.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/Frame 560.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/Frame 560.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/Frame 560.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/Frame 560.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/Frame 560.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
