import React from "react";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImage1 from "../../assets/images/carousel/carousel-1.png";
import CarouselImage2 from "../../assets/images/carousel/carousel-2.png";
import CarouselImage3 from "../../assets/images/carousel/carousel-3.png";
import CarouselImage4 from "../../assets/images/carousel/carousel-4.png";
import CarouselImage5 from "../../assets/images/carousel/carousel-5.png";
import Button from "../../UI/Button/Button";
import Subtitle from "../../UI/Subtitle/Subtitle";
import Carousel from "../Carousel/Carousel";
import "./About.scss";
import AboutGamePlay from "./AboutGamePlay";
import AnimationRed from "./components/AnimationRed";
import AnimationWhite from "./components/AnimationWhite";
import ReactFullpage from '@fullpage/react-fullpage'

function About() {
  return (
    <div className="relative">
      <div className="about__wrapper">
        <div className="about app__container">
          <div className="about__left">
            <div className="about__left__content" id="about">
              <Subtitle>about fitburn</Subtitle>
              <h1 className="about__title">Burn To EARN</h1>
              <p className="about__text">
                Get paid for every drop of your sweat .
              </p>
              <Button>Let’s Burn</Button>
            </div>
          </div>
          <div className="about__right">
            <Carousel />
          </div>
        </div>
        <AnimationRed />
        <AnimationWhite />
      </div>
      <div className="relative">
        <div className="second__about-wrapper">
          <div className="app__container text-center">
            <div className="second__about">
              <div className="second__about__subtitle">
                <Subtitle>about fitburn</Subtitle>
              </div>

              <h2 className="about__second__title">
                <span>
                  sweat,
                  <span className="about__second__title-primary">burn</span>
                  calories
                </span>
                <span className="flex items-center justify-evenly">
                  <span className="flex items-center gap-4 about__second__title-secondary">
                    and
                    <svg
                      width="60"
                      height="35"
                      viewBox="0 0 76 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 20.5H70M70 20.5L52.5 3M70 20.5L52.5 38"
                        stroke="#EF1000"
                        strokeWidth="8"
                      />
                    </svg>
                  </span>
                  get rewarded
                </span>
              </h2>

              <p className="second__about-text">
                FitBurn is going to disrupt the whole fitness industry with the
                world’s first burn-to-earn application. FitBurn allows you to
                earn money in the form of our Calorie token (CAL) by holding a
                gamified T-Shirt NFT.
              </p>
              <div className="second__about-button">
                <Button>Get Your NFT</Button>
              </div>
            </div>
          </div>
          <Swiper
            effect={"flip "}
            className="about__second__swiper"
            slidesPerView={4}
            spaceBetween={16}
            pagination={false}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            modules={[Pagination, EffectCoverflow]}
            coverflowEffect={{
              scale: 0.5,
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
          >
            <SwiperSlide>
              <div className="second__carousel__card">
                <img src={CarouselImage3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="second__carousel__card">
                <img src={CarouselImage4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="second__carousel__card">
                <img src={CarouselImage5} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="second__carousel__card">
                <img src={CarouselImage1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="second__carousel__card">
                <img src={CarouselImage2} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <AboutGamePlay />
    </div>
  );
}

export default About;
