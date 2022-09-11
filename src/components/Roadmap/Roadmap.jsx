import React, { useState } from "react";
import angle from "../../assets/icons/team-card-angle.svg";
import roadmap1 from "../../assets/images/roadmap/roadmap-1.png";
import roadmap2 from "../../assets/images/roadmap/roadmap-2.png";
import roadmap3 from "../../assets/images/roadmap/roadmap-3.png";
import roadmap4 from "../../assets/images/roadmap/roadmap-4.png";
import roadmap5 from "../../assets/images/social-bg.png";
import Subtitle from "../../UI/Subtitle/Subtitle";
import "./Roadmap.scss";
import { CSSTransition } from "react-transition-group";

import evolution1 from "../../assets/images/roadmap/evolution-1.png";
import evolution2 from "../../assets/images/roadmap/evolution-2.png";
import evolution3 from "../../assets/images/roadmap/evolution-3.png";
import evolution4 from "../../assets/images/roadmap/evolution-4.png";
import evolution5 from "../../assets/images/roadmap/evolution-5.png";
import line from "../../assets/images/line.png"

import Button from "../../UI/Button/Button";

function Roadmap() {
  const [active, setActive] = useState(1);
  const roadmap = [
    {
      id: 1,
      image: roadmap1,
      icon: evolution1,
      title: "Q1 2021",
      text: "The Fit Burn idea was conceived. ",
      list: [],
      frameWidht: "60",
      mt: "259",
    },
    {
      id: 2,
      image: roadmap2,
      icon: evolution2,
      title: "Q2 2022",
      text: "",
      frameWidht: "120",
      list: [
        "Founding Team Formation",
        "Mobile Application Development Commencement",
        "Branding Commencement",
        "Pre-Seed Fundraising",
        "Website Development",
        "NFT Creation Process",
      ],
    },
    {
      id: 3,
      image: roadmap3,
      icon: evolution3,
      title: "Q3 2022",
      text: "",
      frameWidht: "180",
      list: [
        "Company Legal Entity Establishment",
        "Participation in Blockchain Economy",
        "Istanbul Summit",
        "Brand Video Creation",
        "Seed / VC Round",
        "Marketing & PR Commencement",
        "Website Update 3.0",
        "MVP Test Phase",
        "Whitepaper Release",
        "Mobile Application Beta Version Test",
        "NFT Reveal at Blockchain Economy Dubai Summit",

        "CoinMarketCap & CoinGecko Listing",
        "Brand & Tutorial Video Release",
        "Closing of Seed / VC Round",
        "Private / Influencer Round Fundraising",
        "Further Live Events Planning",
        "Partnerships Exploration",
      ],
    },
    {
      id: 4,
      image: roadmap4,
      icon: evolution4,
      title: "Q4 2022  ",
      text: "",
      imgWidth: "484",
      imgHeight: "428",
      frameWidht: "240",
      list: [
        "Exploring Tier 1",
        "Exchange Listings",
        "Events Participations (Formula 1",
        "Abu Dhabi Grand Prix / Mr.",
        "Olympia Las Vegas)",
      ],
    },
    {
      id: 5,
      image: roadmap5,
      icon: evolution5,
      title: "Q5 2023",
      text: "",
      frameWidht: "300",
      list: [
        "Mobile App Marketplace",
        "Integration",
        "NFT Pre-Sale",
        "NFT Mint",
        "Mobile App Release",
        "TGE",
      ],
    },
  ];

  const handleClick = (id) => {
    setActive(id.target.value);
  };

  return (
    <div className="roadmap__wrapper">
      <div className="roadmap pt-[130px]">
        <div className="flex justify-center" id="roadmap">
          <Subtitle>Our Way</Subtitle>
        </div>
        <h2 className="roadmap__title mb-16">Roadmap</h2>
        <div className="app__container">
          <div className="flex" key={roadmap[active - 1].id} timeout={500}>
            <div className="roadmap__card relative px-[21px] py-[51px] ">
              <img
                src={roadmap[active - 1].image}
                alt="roadmap"
                className="flex mx-auto"
                style={{
                  //marginTop: `${roadmap[active - 1]?.mt}px`,
                  //width: `${roadmap[active - 1]?.imgWidth}px`,
                  //height: `${roadmap[active - 1]?.imgHeight}px`,
                }}
              />
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
            <div className="roadmap__line">
              <img src={line} alt="line"/>
            </div>
            <div className="flex">
              <ul className="roadmap__number-list">
                <li className="flex items-center gap-10">
                  <button
                    className="btn__disabled"
                    value="1"
                    onClick={handleClick}
                  >
                    01
                  </button>
                </li>
                <li className="flex items-center gap-10">
                  <button
                    className="btn__disabled"
                    value="2"
                    onClick={handleClick}
                  >
                    02
                  </button>
                </li>
                <li className="flex items-center gap-10">
                  <button
                    className="btn__disabled"
                    value="3"
                    onClick={handleClick}
                  >
                    03
                  </button>
                </li>
                <li className="flex items-center gap-10">
                  <button
                    className="btn__disabled"
                    value="4"
                    onClick={handleClick}
                  >
                    04
                  </button>
                </li>
                <li className="flex items-center gap-10">
                  <button
                    className="btn__disabled"
                    value="5"
                    onClick={handleClick}
                  >
                    05
                  </button>
                </li>
              </ul>
              <CSSTransition timeout={400} classNames="list-transition">
                <div className="roadmap__right">
                  <img
                    src={roadmap[active - 1].icon}
                    alt="roadmap first"
                    width="73"
                    height="114"
                  />
                  <h3>{roadmap[active - 1].title}</h3>
                  {roadmap[active - 1].text.length > 0 ? (
                    <p>{roadmap[active - 1]?.text}</p>
                  ) : null}
                  <ul>
                    {roadmap[active - 1].list.map((list, i) => (
                      <li key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="red"
                          className="w-6 h-6"
                          width="9"
                          height="9"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        {list}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="roadmap__frame"
                    style={{ width: `${roadmap[active - 1].frameWidht}px` }}
                  ></div>
                  <Button>Let's Burn</Button>
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
