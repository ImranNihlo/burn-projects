import React from "react";
import FaqItem from "./components/FaqItem";
import "./Faq.scss";

function Faq() {
  const faqs = [
    {
      title: "What is a blockchain?",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn",
    },
    {
      title: "What is a blockchain?",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn",
    },
    {
      title: "What is a blockchain?",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn",
    },
    {
      title: "What is a blockchain?",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn",
    },
    {
      title: "What is a blockchain?",
      text: "FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn. FitBurn is going to disrupt the whole fitness industry with the world’s first burn-to-earn",
    },
  ];
  return (
    <div className="faq__bg">
      <div className="relative" id="faq">
        <div className="faq__wrapper">
          <div className="app__container" data-aos="zoom-in">
            <div className="faq ">
              {faqs.map((item, i) => (
                <FaqItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
