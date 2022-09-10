import React from "react";
import "./Noise.scss";

function Noise(props) {
  return (
    <div className="relative overflow-hidden">
      <div className="noise__wrapper">
        <div className="noise">{props.children}</div>
      </div>
    </div>
  );
}

export default Noise;
