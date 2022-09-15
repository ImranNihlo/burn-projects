import React from "react";
import gameplayLoading from "../../assets/images/loading.png";
import Subtitle from "../../UI/Subtitle/Subtitle";
import phone from "../../assets/images/fhone.png"
import Maks_group from "../../assets/images/Maks_group.png"

function AboutGamePlay() {
  return (
    <>
      <div className="about__gameplay__wrapper">
        <div className="app__container">
          <div className="gameplay">
            <div className="gameplay__left">
              <div>
                <Subtitle data-aos="fade-left">HOW IT WORKS</Subtitle>
                <div className="about__title" data-aos="fade-right"
                     // data-aos="zoom-in"
                     // data-aos-offset="200"
                     // data-aos-delay="50"
                     // data-aos-duration="1000"
                     // data-aos-easing="ease-in-out"
                >
                  game<span>play</span>
                </div>
                <p className="gameplay__text url" data-aos="fade-left">
                  FitBurn is going to disrupt the whole fitness industry with
                  the world’s first burn-to-earn
                </p>
              </div>

              <div className="gameplay__cardbox" data-aos="fade-left"
                   // data-aos="flip-left"
                   // data-aos-offset="200"
                   // data-aos-delay="50"
                   // data-aos-duration="1000"
                   // data-aos-easing="ease-in-out"
              >
                <div className="cardbox__left">
                  <img src={gameplayLoading} alt="" />
                </div>
                <div className="cardbox__right grid grid-cols-2 gap-7" data-aos="fade-left">
                  <div className="cardbox__card">
                    <p>common</p>
                  </div>
                  <div className="cardbox__card">
                    <p>rare</p>
                  </div>
                  <div className="cardbox__card">
                    <p>epic</p>
                  </div>
                  <div className="cardbox__card">
                    <p>legendary</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gameplay__right">
              {/*<div className="gameplay__phone">*/}
              {/*  <img src={phone} alt="phone"/>*/}
              {/*</div>*/}
              <ul className="gameplay__right-list"
                  // data-aos="flip-right"
                  // data-aos-offset="200"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  // data-aos-easing="ease-in-out"
              >
                <li data-aos="fade-up" className="right-list-li1">
                  <div className="maks">
                    <img src={Maks_group} alt="phone"/>
                  </div>
                  <span>01</span>
                  <p>
                    Get your FitBurn NFT and join a GYM membership for free.
                  </p>
                </li>
                <li data-aos="fade-up" className="right-list-li2">
                  <div className="gameplay__phone">
                    <img src={phone} alt="phone"/>
                  </div>
                  <span>02</span>
                  <p>
                    Hit the gym, wear your smartwatch and start your FitBurn
                    App.
                  </p>
                </li>
                <li data-aos="fade-up" className="right-list-li3">
                  <div className="gameplay__phone">
                    <img src={phone} alt="phone"/>
                  </div>
                  <span>03</span>
                  <p>Perform your daily workout routine and burn calories.</p>
                </li>
                <li data-aos="fade-up" className="right-list-li4">
                  <div className="gameplay__phone">
                    <img src={phone} alt="phone"/>
                  </div>
                  <span>04</span>
                  <p>For every burned calorie, earn Calorie tokens.</p>
                </li>
                <li data-aos="fade-up" className="right-list-li5">
                  <div className="maks">
                    <img src={Maks_group} alt="phone"/>
                  </div>
                  <span>05</span>
                  <p>
                    Use the coin to trade, hold, upgrade your NFT, purchase
                    supplements or get a discount at one of our retail partners.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutGamePlay;
