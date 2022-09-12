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
    <div className="second__about-wrapper">
      <div className="app__container text-center">
        <div className="second__about" id="about-second">
          <div className="second__about__subtitle">
            <Subtitle>about fitburn</Subtitle>
          </div>

          <h2
            className="about__second__title"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
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
  )
}

export default AboutSecond