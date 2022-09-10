import React from "react";
import "./Partners.scss";
import Subtitle from "../../UI/Subtitle/Subtitle";
import Button from "../../UI/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import unify from "../../assets/images/partners/unify.svg";
import logic from "../../assets/images/partners/logic.svg";
import aura from "../../assets/images/partners/aura.svg";
import zantic from "../../assets/images/partners/unify.svg";
import orbit from "../../assets/images/partners/orbit.svg";
import coin from "../../assets/images/partners/Coin.png"

import angleLight from "../../assets/icons/angle-light.svg";
import angleDark from "../../assets/icons/angle-dark.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

function Partners() {
  const parters = [
    { id: 1, image: unify, name: "unify" },
    { id: 2, image: logic, name: "logic" },
    { id: 3, image: aura, name: "Aura" },
    { id: 4, image: zantic, name: "zantic" },
    { id: 5, image: orbit, name: "Orbit" },
  ];

  return (
    <>
      <div className="partners__wrapper">
        <div className="partners app__container text-center" id="partners">
          <div className="partners__title-box">
            <Subtitle>partners</Subtitle>
          </div>
          <h1 className="partners__title">PARTNERS</h1>
          <p className="partners__text">
            FitBurn is going to disrupt the whole fitness industry with the
            world’s first burn-to-earn
          </p>
        </div>
        <div className="partners__coin">
          <img src={coin} alt="coin"/>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination]}
          className="swiper__partners"
        >
          {parters.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="partners__card relative">
                <img src={partner.image} alt="partner" />
                <p className="partners__card-name">{partner.name}</p>
                <div className="angles">
                  <img
                    src={angleLight}
                    alt=""
                    className="absolute top-0 right-0 z-50"
                  />
                  <img
                    src={angleLight}
                    alt=""
                    className="absolute top-0 left-0 -rotate-90 z-50"
                  />
                  <img
                    src={angleLight}
                    alt=""
                    className="absolute bottom-0 right-0 rotate-90 z-50"
                  />
                  <img
                    src={angleLight}
                    alt=""
                    className="absolute bottom-0 left-0 -rotate-180 z-50"
                  />
                </div>
                <div className="agnles__dark">
                  <img
                    src={angleDark}
                    alt=""
                    className="absolute bottom-0 left-0 -rotate-90"
                  />
                  <img
                    src={angleDark}
                    alt=""
                    className="absolute bottom-0 right-0 rotate-180 "
                  />
                  <img
                    src={angleDark}
                    alt=""
                    className="absolute top-0 right-0 rotate-90 "
                  />
                  <img
                    src={angleDark}
                    alt=""
                    className="absolute top-0 left-0 rotate-0 "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="partners__actions">
          <Button>Become a partner</Button>
        </div>
      </div>
    </>
  );
}

export default Partners;
