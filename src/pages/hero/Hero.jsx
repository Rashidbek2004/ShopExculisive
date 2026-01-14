import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./Hero.css";

const Hero = ({ categoryData }) => {
  return (
    <div className="hero">
      <div className="container">
        {categoryData?.map((item) => {
          return (
            <div className="writes">
              <img src={item?.image} alt="" />
              <div className="write">
                <h2>{item?.title}</h2>
              </div>
            </div>
          );
        })}

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
