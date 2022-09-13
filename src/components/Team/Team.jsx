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
import TeamMember3 from "../../assets/images/Team3.png";
import TeamMember4 from "../../assets/images/Team4.png";
import TeamMember5 from "../../assets/images/Team5.png";
import TeamMember6 from "../../assets/images/Team6.png";
import TeamMember7 from "../../assets/images/Team7.png";

import Advisiors1 from "../../assets/images/advisiors1.png";
import Advisiors2 from "../../assets/images/advisiors2.png"
import Advisiors3 from "../../assets/images/advisiors3.png"
import Advisiors4 from "../../assets/images/advisiors4.png"
import Advisiors5 from "../../assets/images/advisiors5.png"

function Team() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeSwipe, setActiveSwipe] = React.useState(0);

  const carousel__data = [
    {
      id: 1,
      activeTitle: "AlexandEr Meuer",
      text: "CEO",
      image: BlueMonkey,
      activeImage: TeamMember2,
    },
    {
      id: 2,
      activeTitle: "Ferhat Kacmaz",
      text: "CEO",
      image: BlueMonkey,
      activeImage: TeamMember1,
    },
    {
      id: 3,
      activeTitle: "Sebastian Menge",
      text: "CEO",
      image: GreenMonkey,
      activeImage: TeamMember3,
    },
    {
      id: 4,
      activeTitle: "Chris Oldfield",
      text: "CEO",
      image: BlueMonkey,
      activeImage: TeamMember4,
    },
    {
      id: 5,
      activeTitle: "Shelbi Oldfield",
      text: "HEAD OF MARKETING",
      image: GreenMonkey,
      activeImage: TeamMember5,
    },
    {
      id: 6,
      activeTitle: "Dincer Delen",
      text: "Creative director",
      image: BlueMonkey,
      activeImage: TeamMember6,
    },
    {
      id: 7,
      activeTitle: "Praneet Kumar",
      text: "Director-legal & compliance",
      image: GreenMonkey,
      activeImage: TeamMember7,
    }
  ];

  const carousel__advisors = [
    {
      id: 1,
      activeTitle: "Mr. Olympia",
      text: "World's most prestigious fitness industry showcase event",
      image: GreenMonkey,
      activeImage: Advisiors1,
    },
    {
      id: 2,
      activeTitle: "Özlem Kaçmaz",
      text: "Advisor",
      image: BlueMonkey,
      activeImage: Advisiors2,
    },
    {
      id: 3,
      activeTitle: "Mary Pedler",
      text: "PR Advisor",
      image: GreenMonkey,
      activeImage: Advisiors3,
    },
    {
      id: 4,
      activeTitle: "Isculpt",
      text: "Dubai-Based ems fitness studio Özlem Kaçmaz Mary Pedler Ralph Boschung",
      image: BlueMonkey,
      activeImage: Advisiors4,
    },
    {
      id: 5,
      activeTitle: "Ralph Boschung d2 driver",
      text: "Strategic",
      image: GreenMonkey,
      activeImage: Advisiors5,
    }
  ];

  return (
    <>
      <div className="team__wrapper">
        <div className="team__wrapper-bg"/>
        <div className="team" id="team">
          <div className="app__container">
            <div className="team__subtitle" data-aos="zoom-in">
              <Subtitle>Team</Subtitle>
            </div>
            <h1 className="team__title" data-aos="zoom-in">
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
            <h2 className="team__title-advisors" data-aos="zoom-in">Advisors</h2>
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
                setActiveSwipe(swiper.activeIndex);
              }}
              initialSlide="1"
            >
              {carousel__advisors.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className={
                      item.id === activeSwipe + 1
                        ? "team__card-active"
                        : "team__card"
                    }
                  >
                    <div
                      className={
                        item.id === activeSwipe + 1 ? "team__card__wrapper" : ""
                      }
                    >
                      <img
                        src={
                          item.id === activeSwipe + 1
                            ? item.activeImage
                            : item.image
                        }
                        alt="fire"
                      />
                      <h3>
                        {item.id === activeSwipe + 1
                          ? item.activeTitle
                          : item.activeTitle}
                      </h3>
                      <p>{item.id === activeSwipe + 1 ? item.text : ""}</p>
                    </div>
                  </div>
                  <img
                    src={angle}
                    alt="angle"
                    className={
                      item.id === activeSwipe + 1
                        ? "absolute w-7 h-6 top-0 left-0"
                        : "hidden"
                    }
                  />
                  <img
                    src={angle}
                    alt="angle"
                    className={
                      item.id === activeSwipe + 1
                        ? "absolute w-7 h-6 top-0 right-0 rotate-90"
                        : "hidden"
                    }
                  />
                  <img
                    src={angle}
                    alt="angle"
                    className={
                      item.id === activeSwipe + 1
                        ? "absolute w-7 h-6 bottom-0 right-0 rotate-180"
                        : "hidden"
                    }
                  />
                  <img
                    src={angle}
                    alt="angle"
                    className={
                      item.id === activeSwipe + 1
                        ? "absolute w-7 h-6 bottom-0 left-0 -rotate-90"
                        : "hidden"
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
