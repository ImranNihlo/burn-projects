import React, { useEffect } from "react";
import "./Tokenomics.scss";
import Subtitle from "../../UI/Subtitle/Subtitle";
import headImage from "../../assets/images/monkey-head.png";
import exitIcon from "../../assets/icons/exit.svg";
import Button from "../../UI/Button/Button";

function Tokenomics() {
  return (
    <div className="relative">
      <div className="tokenomics__wrapper" data-aos="zoom-in" data-aos-duration = "3000">
        <div className="app__container">
          <div className="tokenomics" id="tokenomics">
            <div className="tokenomics__left">
              <div className="tokenomics__left-content">
                <Subtitle>our token</Subtitle>
                <div className="tokenomics__title">
                  <p>CAL</p>
                  <p className="flex items-center">
                    <span>T </span>
                    <img src={headImage} alt="monkey" />
                    <span>KEN</span>
                  </p>
                  <p>SETUP</p>
                </div>
              </div>
            </div>
            <div className="tokenomics__right">
              <ul className="tokenomics__right-list">
                <li>
                  <h2>Buying products and services on the platform</h2>
                  <p>(gym memberships, supplements, accessories, etc.)</p>
                </li>
                <li>
                  <h2>Staking for:</h2>
                  <ul>
                    <li>
                      <span>
                        <img src={exitIcon} alt="exit" />
                      </span>
                      <span>Rewards in CAL token</span>
                    </li>
                    <li>
                      <span>
                        <img src={exitIcon} alt="exit" />
                      </span>
                      <span>A multiplier for the calories burned</span>
                    </li>
                    <li>
                      <span>
                        <img src={exitIcon} alt="exit" />
                      </span>
                      <span>Fees and product/service price reductions</span>
                    </li>
                    <li>
                      <span>
                        <img src={exitIcon} alt="exit" />
                      </span>
                      <span>Entry to exclusive/VIP events</span>
                    </li>
                    <li>
                      <span>
                        <img src={exitIcon} alt="exit" />
                      </span>
                      <span>Governance rights</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>Rewards distribution for:</h2>
                  <ul>
                    <li>
                      <span>
                        <img src={exitIcon} alt="exit" />
                      </span>
                      <span>Active NFT holders </span>
                    </li>
                    <li>
                      <span>
                        <img src={exitIcon} alt="exit" />
                      </span>
                      <span>Token stakers</span>
                    </li>
                    <li>
                      <span>
                        <img src={exitIcon} alt="exit" />
                      </span>
                      <span>Liquidity suppliers</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="tokemonics__btn">
                <Button>Let's Burn</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
