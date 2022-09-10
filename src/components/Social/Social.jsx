import React from "react";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import LinkedIn from "../../assets/icons/linkedIn.svg";
import "./Social.scss";

function Social() {
  return (
    <div className="social__wrapper" data-aos="zoom-in" data-aos-duration = "3000">
      <div className="app__container">
        <div className="social__title" id="social">
          <h2>join fitburn</h2>
          <h2>in social MEDIA</h2>
        </div>
        <div className="social__box">
          <div className="flex justify-end">
            <a href="https://www.instagram.com/fitburnio/" target="_blank">
              <button>
                <img src={Instagram} alt="instagram" />
                <span>Instagram</span>
              </button>
            </a>
          </div>
          <div className="my-10 flex">
            <a href="https://facebook.com/fitburnio/" target="_blank">
              <button>
                <img src={Facebook} alt="facebook" />
                <span>Facebook</span>
              </button>
            </a>
          </div>
          <div className="flex justify-center mt-10 ml-12">
            <a
              href="https://www.linkedin.com/company/fitburnio/"
              target="_blank"
            >
              <button>
                <img src={LinkedIn} alt="linkedin" />
                <span>LinkedIn</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
