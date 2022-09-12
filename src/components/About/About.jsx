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
import AboutSecond from './AboutSecond'

function About() {
  return (
    <div className="relative">
      <div className="about__wrapper">
        <div className="about app__container">
          <div className="about__left">
            <div className="about__left__content" id="about">
              <Subtitle>about fitburn</Subtitle>
              <h1
                className="about__title"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >Burn To EARN</h1>
              <p className="about__text">
                Get paid for every drop of your sweat .
              </p>
              <Button>Let’s Burn</Button>
            </div>
          </div>
          <div className="about__right"
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
          >
            <Carousel />
          </div>
        </div>
        <AnimationRed />
        <AnimationWhite />
      </div>
      <div className="relative">
        <AboutSecond />
      </div>
      <AboutGamePlay />
    </div>
  );
}

export default About;
