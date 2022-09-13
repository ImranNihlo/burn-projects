import React from 'react'
import Subtitle from '../../UI/Subtitle/Subtitle'
import Button from '../../UI/Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper'
import CarouselImage3 from '../../assets/images/carousel/carousel-3.png'
import CarouselImage4 from '../../assets/images/carousel/carousel-4.png'
import CarouselImage5 from '../../assets/images/carousel/carousel-5.png'
import CarouselImage1 from '../../assets/images/carousel/carousel-1.png'
import CarouselImage2 from '../../assets/images/carousel/carousel-2.png'

function AboutSecond (props) {
  return (
    <div className="second__about-wrapper" id="about-second">
      <div className="second__about-line-left"></div>
      <div className="second__about-line-right"></div>
      <div className="app__container text-center">
        <div className="second__about">
          <div className="second__about__subtitle" data-aos="fade-left">
            <Subtitle>about fitburn</Subtitle>
          </div>

          <h2 className="about__second__title" data-aos="fade-right">
            sweat,
            <span className="about__second__title-primary">burn</span>
            calories
            <span className="flex items-center gap-4  mx-1">
                  <span className="about__second__title-secondary">and</span>
                  <svg
                    width="60"
                    height="25"
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
                  get
                </span>
            rewarded
          </h2>

          <p className="second__about-text" data-aos="fade-left">
            FitBurn is going to disrupt the whole fitness industry with the
            world’s first burn-to-earn application. FitBurn allows you to
            earn money in the form of our Calorie token (CAL) by holding a
            gamified T-Shirt NFT.
          </p>
          <div className="second__about-button" data-aos="fade-right">
            <Button>Get Your NFT</Button>
          </div>
        </div>
      </div>
      <Swiper
        effect={"flip "}
        className="about__second__swiper"
        slidesPerView={"auto"}
        spaceBetween={10}
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
        data-aos="zoom-in"
      >
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
      </Swiper>
    </div>
  )
}

export default AboutSecond