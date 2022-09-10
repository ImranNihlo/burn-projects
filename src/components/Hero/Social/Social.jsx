import React from "react";
import "./Social.scss";
import Behance from "../../../assets/icons/behance.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Linkedin from "../../../assets/icons/linkedIn.svg";

export default function Social() {
  return (
    <>
      <div className="social">
        <a target="_blank" href="http://behance.com">
          <img src={Behance} alt="behance" />
        </a>
        <a target="_blank" href="https://www.facebook.com/Fitburnio/">
          <img src={Facebook} alt="facebook" />
        </a>
        <a target="_blank" href="https://www.instagram.com/fitburnio/">
          <img src={Instagram} alt="instagram" />
        </a>
        <a target="_blank" href="http://linkedin.com">
          <img src={Linkedin} alt="linkedin" />
        </a>
      </div>
    </>
  );
}
