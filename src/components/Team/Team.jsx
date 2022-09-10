import React from "react";
import angle from "../../assets/icons/team-card-angle.svg";
import eyesImage from "../../assets/images/monkey-eyes.png";
import Subtitle from "../../UI/Subtitle/Subtitle";
import "./Team.scss";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFlip, Navigation, Pagination } from "swiper";

import BlueMonkey from "../../assets/images/Blue.png";
import GreenMonkey from "../../assets/images/Green.png";
import TeamMember1 from "../../assets/images/Team1.png";
import TeamMember2 from "../../assets/images/Team2.png";

function Team() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const carousel__data = [
    {
      id: 1,
      activeTitle: "AlexandEr meuer",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn",
      image: BlueMonkey,
      activeImage: TeamMember2,
    },
    {
      id: 2,
      activeTitle: "Ferhat Kacmaz",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn",
      image: BlueMonkey,
      activeImage: TeamMember1,
    },
    {
      id: 3,
      activeTitle: "Sebastian Menge",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn",
      image: GreenMonkey,
      activeImage: TeamMember1,
    },
  ];

  return (
    <>
      <div className="team__wrapper">
        <div className="team" id="team">
          <div className="app__container">
            <div className="team__subtitle">
              <Subtitle>Team</Subtitle>
            </div>
            <h1 className="team__title">
              <span className="team__title-primary">Fit</span>
              <span>Burn</span>
              <p>
                <span> in </span>
                <img src={eyesImage} alt="" />
                <span> faces </span>
              </p>
            </h1>
            <Swiper
              effect={"flip "}
              grabCursor={true}
              navigation
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
              modules={[EffectFlip, Pagination, Navigation]}
              className="myTeamSwiper"
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
              initialSlide="1"
            >
              {carousel__data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className={
                      item.id === activeIndex + 1
                        ? "team__card-active"
                        : "team__card"
                    }
                  >
                    <div
                      className={
                        item.id === activeIndex + 1 ? "team__card__wrapper" : ""
                      }
                    >
                      <img
                        src={
                          item.id === activeIndex + 1
                            ? item.activeImage
                            : item.image
                        }
                        alt="fire"
                      />
                      <h3>
                        {item.id === activeIndex + 1
                          ? item.activeTitle
                          : item.activeTitle}
                      </h3>
                      <p>{item.id === activeIndex + 1 ? item.text : ""}</p>
                    </div>
                  </div>
                  <img
                    src={angle}
                    alt="angle"
                    className={
                      item.id === activeIndex + 1
                        ? "absolute w-7 h-6 top-0 left-0"
                        : "hidden"
                    }
                  />
                  <img
                    src={angle}
                    alt="angle"
                    className={
                      item.id === activeIndex + 1
                        ? "absolute w-7 h-6 top-0 right-0 rotate-90"
                        : "hidden"
                    }
                  />
                  <img
                    src={angle}
                    alt="angle"
                    className={
                      item.id === activeIndex + 1
                        ? "absolute w-7 h-6 bottom-0 right-0 rotate-180"
                        : "hidden"
                    }
                  />
                  <img
                    src={angle}
                    alt="angle"
                    className={
                      item.id === activeIndex + 1
                        ? "absolute w-7 h-6 bottom-0 left-0 -rotate-90"
                        : "hidden"
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="team__advisors">
            <h2 className="team__title-advisors">Advisors</h2>
            <div className="team__card-advisors relative">
              <div className="team__card__wrapper">
                <img src={TeamMember2} alt="team" />
                <h3>Özlem Kaçmaz</h3>
                <p>
                  FitBurn is going to disrupt the whole fitness industry with
                  the world’s first burn-to-earn
                </p>
                <img
                  src={angle}
                  alt="angle"
                  className="absolute w-7 h-6 top-0 left-0"
                />
                <img
                  src={angle}
                  alt="angle"
                  className="absolute w-7 h-6 top-0 right-0 rotate-90"
                />
                <img
                  src={angle}
                  alt="angle"
                  className="absolute w-7 h-6 bottom-0 right-0 rotate-180"
                />
                <img
                  src={angle}
                  alt="angle"
                  className="absolute w-7 h-6 bottom-0 left-0 -rotate-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
