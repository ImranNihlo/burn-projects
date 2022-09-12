import React from "react";
import "./Hero.scss";
import Social from "./Social/Social";
import logo from '../../assets/logo/logo.svg'
import { HashLink as Link } from 'react-router-hash-link'

function Hero() {
  return (
    <div className="hero__radial">
      <div className="hero__vector__bg" id="main">
        <div className="hero__wrapper app__container">
          <div className="hero__content" data-aos="zoom-in"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
          >
            <p className="hero__title">
              <span className="hero__title__primary">World</span>
              <span>First BURN-TO-EARN</span>
            </p>
            <p className="hero__subtitle">Lifestyle REVOLUTION</p>
          </div>
          <Social />
        </div>
        <Link to="#about" smooth>
          <div className="scroll__box"/>
          <p className="scroll__text">scroll</p>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
