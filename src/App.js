import React, { useState } from "react";
import "./App.css";
import "./scss/index.scss";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tokenmonics from "./components/Tokenomics/Tokenomics";
import Team from "./components/Team/Team";
import Partners from "./components/Partners/Partners";
import Faq from "./components/Faq/Faq";
import News from "./components/News/News";
import Social from "./components/Social/Social";
import Roadmap from "./components/Roadmap/Roadmap";
import { HashLink as Link } from "react-router-hash-link";
import "./layout/Navbar.scss";
import Button from "./UI/Button/Button";
import logo from "./assets/logo/logo.svg";
import Noise from "./components/Noise/Noise";

function App() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <React.Fragment>
      <div className={colorChange ? "navbar__scroll" : "navbar__wrapper"}>
        <div className="app__container">
          <div className="navbar">
            <div className="nav__left">
              <Link to="#main" smooth>
                <img src={logo} alt="Logo" />
              </Link>
              <ul className="nav__menu">
                <li className="nav__item ">
                  <Link to="#about" smooth>
                    About
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="#tokenomics" smooth>
                    Tokenomics
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="#roadmap" smooth>
                    Roadmap
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="#team" smooth>
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav__right">
              <ul className="nav__menu">
                <li className="nav__item">
                  <Link to="#partners" smooth>
                    Partners
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="#faq" smooth>
                    FAQs
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="#social" smooth>
                    Social
                  </Link>
                </li>
              </ul>
              <Button>Let’s Burn</Button>
            </div>
          </div>
        </div>
      </div>
      <Noise>
        <Hero />
        <About />
        <Tokenmonics />
        <Roadmap />
        <Team />
        <Partners />
        <Faq />
        <News />
        <Social />
      </Noise>
    </React.Fragment>
  );
}

export default App;
