import React from "react";
import "./NewsCard.scss";
import Button from "../Button/Button";

function NewsCard(props) {
  return (
    <div>
      <div className={`news__card news__card_${props.id}`} data-aos="zoom-in">
        <div className="subtitle flex items-center gap-3 absolute top-2 left-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <span>{props.item.subtitle}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <img src={props.item.picture} alt={props.item.title} />
        <h2>{props.item.title}</h2>
        <p>{props.item.text}</p>
        <Button />
      </div>
    </div>
  );
}

export default NewsCard;
