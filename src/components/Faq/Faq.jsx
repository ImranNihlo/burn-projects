import React from "react";
import FaqItem from "./components/FaqItem";
import "./Faq.scss";

function Faq() {
  const faqs = [
    {
      title: "What is CAL token",
      text: "CAL is the FitBurn platform's fundamental utility token. The token's supply will be limited. These are the fundamental essential of the token:",
      description: "Buying products and services on the platform (gym memberships, supplements, accessories, etc.)",
      descriptionLi: "Staking for:, Rewards in CAL token, A multiplier for the calories burned, Fees and product/service price reductions, Entry to exclusive/VIP events, Governance rights, Rewards distribution for:, Active NFT holders, Token stakers, Liquidity suppliers",
    },
    {
      title: "What kind of NFTs are out there?",
      text: "",
      description: "Common, Rare, Epic, Legendary"
    },
    {
      title: "How can I maintain my NFT?",
      text: "NFT holders will have the ability to 'wash' their NFTs in the same manner that one would wash a t-shirt, holders of NFTs will be required at a later point in time to 'wash' their NFTs by paying a nominal price on the platform. This step will only be necessary for the event that the holders make consistent use of their NFTs to accumulate prizes and burn calories. The needed charge, along with other particulars, will be set at a later point in time",
    },
    {
      title: "What will the future hold?",
      text: "Burn some calories to know more!",
    },
  ];
  return (
    <div className="faq__bg" id="faq">
      <div className="relative">
        <div className="faq__wrapper">
          <div className="app__container" data-aos="zoom-in">
            <div className="faq ">
              {faqs.map((item, i) => (
                <FaqItem key={i} item={item} />
              ))}
            </div>
            <div className="faq__answer">
              If you don`t find an answer, <span className="faq__answer-red">contact</span> our experts, please.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
