import React from "react";
import "./Button.scss";
import Arrow from "../../assets/icons/arrow.svg";
import ButtonIcon from "../../assets/icons/button-icon.svg";

function Button(props) {
  return (
    <>
      <div className="btn__box">
        <div className="button__icon">
          <img className="button__icon-svg" src={ButtonIcon} alt="" />
        </div>
        <div className="button__wrap">
          <button className="btn__primary">
            <span>{props.children}</span>
            <img src={Arrow} alt="arrow"/>
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
