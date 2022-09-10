import React from "react";
import gameplayLoading from "../../assets/images/loading.png";
import Subtitle from "../../UI/Subtitle/Subtitle";

function AboutGamePlay() {
  return (
    <>
      <div className="about__gameplay__wrapper">
        <div className="app__container">
          <div className="gameplay">
            <div className="gameplay__left">
              <div>
                <Subtitle>HOW IT WORKS</Subtitle>
                <div className="about__title">
                  game<span>play</span>
                </div>
                <p className="gameplay__text url">
                  FitBurn is going to disrupt the whole fitness industry with
                  the world’s first burn-to-earn
                </p>
              </div>

              <div className="gameplay__cardbox">
                <div className="cardbox__left">
                  <img src={gameplayLoading} alt="" />
                </div>
                <div className="cardbox__right grid grid-cols-2 gap-7">
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
              <ul className="gameplay__right-list">
                <li>
                  <span>01</span>
                  <p>
                    Get your FitBurn NFT and join a GYM membership for free.
                  </p>
                </li>
                <li>
                  <span>02</span>
                  <p>
                    Hit the gym, wear your smartwatch and start your FitBurn
                    App.
                  </p>
                </li>
                <li>
                  <span>03</span>
                  <p>Perform your daily workout routine and burn calories.</p>
                </li>
                <li>
                  <span>04</span>
                  <p>For every burned calorie, earn Calorie tokens.</p>
                </li>
                <li>
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
