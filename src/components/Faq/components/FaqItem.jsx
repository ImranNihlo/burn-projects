import React, { useState } from "react";
import "./FaqItem.scss";

function FaqItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={open ? "faq__item-active" : "faq__item"}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h2 className={open ? "faq__title-active" : "faq__title"}>
          {props.item.title}
        </h2>
        <button className="text-white font-bold text-lg transition-all">
          {open ? "-" : "+"}
        </button>
      </div>
      {open === true ? (
        <p className="faq__text " aria-haspopup="true">
          {props.item.text}
        </p>
      ) : null}
    </div>
  );
}

export default FaqItem;
