import React from "react";
import "./News.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import newsImage1 from "../../assets/images/News/news1.png";
import newsImage2 from "../../assets/images/News/news2.png";
import newsImage3 from "../../assets/images/News/news3.png";
import monkeyfire from "../../assets/images/top-fire.png";
import monkeyIyes from "../../assets/images/monkey-eyes.png";
import Button from "../../UI/Button/Button";
import NewsCard from "./components/NewsCard/NewsCard";

function News() {
  const news = [
    {
      id: 1,
      picture: newsImage1,
      title: "What is a blockchain?",
      subtitle: "news",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going...",
    },
    {
      id: 2,
      picture: newsImage2,
      title: "What is a blockchain?",
      subtitle: "events",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going...",
    },
    {
      id: 3,
      picture: newsImage3,
      title: "What is a blockchain?",
      subtitle: "news",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going...",
    },
    {
      id: 4,
      picture: newsImage1,
      title: "What is a blockchain?",
      subtitle: "events",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going...",
    },
    {
      id: 5,
      picture: newsImage2,
      subtitle: "news",
      title: "What is a blockchain?",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going...",
    },
  ];

  return (
    <div className="news__wrapper">
      <div className="relative">
        <div className="news__box">
          <h2 className="news__title relative" data-aos="zoom-in">
            <span>News</span>
            <span className="relative">
              <img
                src={monkeyfire}
                alt="fire"
                className="absolute -top-[120px] -left-2"
              />
              <img src={monkeyIyes} alt="mokeyEyes" />
            </span>
            <span>EVENTS</span>
          </h2>
          <div className="events__btns">
            <div className="events__btn_wrapper" data-aos="fade-right">
              <button className="btn__events">EVENTS</button>
            </div>

            <div className="events__btn_wrapper" data-aos="fade-left">
              <button className="btn__news">NEWS</button>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={false}
            modules={[FreeMode, Pagination]}
            className="swiper__news"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-[280px] mx-auto mt-[52px]">
            <Button>Become a partner</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
