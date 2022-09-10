import React from "react";
import { Link } from "react-router-hash-link";
import logo from "../assets/logo/logo.svg";
import Button from "../UI/Button/Button";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar__wrapper">
      <div className="app__container">
        <div className="navbar">
          <div className="nav__left">
            <Link to="">
              <img src={logo} alt="Logo" />
            </Link>
            <ul className="nav__menu">
              <li className="nav__item ">
                <Link href="about__section" smooth>
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="">Tokenomics</Link>
              </li>
              <li className="nav__item">
                <Link to="">Roadmap</Link>
              </li>
              <li className="nav__item">
                <Link to="">Team</Link>
              </li>
            </ul>
          </div>
          <div className="nav__right">
            <ul className="nav__menu">
              <li className="nav__item">
                <Link to="">Partners</Link>
              </li>
              <li className="nav__item">
                <Link to="">FAQs</Link>
              </li>
              <li className="nav__item">
                <Link to="">Social</Link>
              </li>
            </ul>
            <Button>Let’s Burn</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
