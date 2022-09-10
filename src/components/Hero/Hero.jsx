import React from "react";
import "./Hero.scss";
import Social from "./Social/Social";

function Hero() {
  return (
    <div className="hero__radial">
      <div className="hero__vector__bg" id="main">
        <div className="hero__wrapper app__container">
          <div className="hero__content">
            <p className="hero__title">
              <span className="hero__title__primary">World</span>
              <span>First BURN-TO-EARN</span>
            </p>
            <p className="hero__subtitle">Lifestyle REVOLUTION</p>
          </div>
          <Social />
        </div>
        <div className="scroll__box">
        </div>
        <p className="scroll__text">scroll</p>
      </div>
    </div>
  );
}

export default Hero;
