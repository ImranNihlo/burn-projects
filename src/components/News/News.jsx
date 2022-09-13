import React, { useEffect } from "react";
import "./News.scss";
import newsImage1 from "../../assets/images/News/news1.png";
import newsImage2 from "../../assets/images/News/news2.png";
import newsImage3 from "../../assets/images/News/news3.png";
import monkeyfire from "../../assets/images/top-fire.png";
import monkeyIyes from "../../assets/images/monkey-eyes.png";
import Button from "../../UI/Button/Button";
import NewsCard from "./components/NewsCard/NewsCard";
import AOS from "aos";
import "aos/dist/aos.css";

function News() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
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
          <div className="events__slider-box">
            <div className="events__slider">
              {news.map((item) => (
                <NewsCard item={item} />
              ))}
            </div>
            <button className="btn__more-news">
              More News
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="red"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className="w-[280px] mx-auto mt-[52px]">
            <Button>Become a partner</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
