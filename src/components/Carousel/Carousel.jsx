import React from "react";
// Import Swiper React components
import FireLight from "../../assets/icons/fire-light.svg";
import Fire from "../../assets/icons/fire.svg";

import ArmLight from "../../assets/icons/arm-light.svg";
import Arm from "../../assets/icons/arm.svg";

import tShirtLight from "../../assets/icons/t-shirt-light.svg";
import tShirt from "../../assets/images/tshirt.png";

import MedalLight from "../../assets/icons/medal-light.svg";
import Medal from "../../assets/icons/medal.svg";

import RepeatLight from "../../assets/icons/reload-light.svg";
import Repeat from "../../assets/icons/reload.svg";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import "./Carousel.scss";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carousel__data = [
    {
      id: 1,
      title: "BURN CALORIES",
      activeTitle: "",
      image: Fire,
      activeImage: FireLight,
      background: {
        bg: "background:linear-gradient(270deg,#d60f00 19.23%,#ffe611 61.83%,rgba(255, 230, 17, 0) 108.54%)",
      },
    },
    {
      id: 2,
      title: "SWEAT",
      activeTitle: "",
      image: Arm,
      activeImage: ArmLight,
    },
    {
      id: 3,
      title: "GRAB YOUR NFT T-SHIRT",
      activeTitle: "",
      image: tShirt,
      activeImage: tShirtLight,
    },
    {
      id: 4,
      title: "GET REWARDED",
      activeTitle: "",
      image: Medal,
      activeImage: MedalLight,
    },
    {
      id: 5,
      title: "REPEAT",
      activeTitle: "",
      image: Repeat,
      activeImage: RepeatLight,
    },
  ];

  return (
    <div>
      <Swiper
        effect={"flip "}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          scale: 0.5,
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        initialSlide="1"
      >
        {
          // Loop through the array of data and render a SwiperSlide for each entry
          carousel__data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={
                  item.id === activeIndex + 1
                    ? "carousel__card"
                    : "carousel__card-active"
                }
              >
                <img
                  src={
                    item.id === activeIndex + 1 ? item.image : item.activeImage
                  }
                  alt="fire"
                />
                <h3>
                  {item.id === activeIndex + 1 ? item.title : item.activeTitle}
                </h3>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="carousel__loading">
        {/* <img src={Loading} alt="loading" height={31} /> */}
      </div>
    </div>
  );
}
