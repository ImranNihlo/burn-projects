import React from "react";
import exitIcon from "../../assets/icons/exit.svg";

function Subtitle(props) {
  return (
    <>
      <p className="about__subtitle">
        <span>
          <img src={exitIcon} alt="exit" />
        </span>
        <p>{props.children}</p>
        <span>
          <img src={exitIcon} alt="exit" />
        </span>
      </p>
    </>
  );
}

export default Subtitle;
