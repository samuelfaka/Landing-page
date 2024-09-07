import React from 'react';
import "./Hero.css";
import Img1 from "../../assets/Images/intro-right-mobile.svg";
import Img2 from "../../assets/Images/intro-right-desktop.svg";
import Img3 from "../../assets/Images/intro-mobile.jpg";
import Img4 from "../../assets/Images/intro-desktop.jpg";
import Img5 from "../../assets/Images/intro-left-mobile.svg";
import Img6 from "../../assets/Images/left-desktop.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image hero__image--right-top">
        <picture>
          <source media="(max-width: 767px)" srcSet={Img1} />
          <img src={Img2} alt="Right top illustration" />
        </picture>
      </div>
      
      <div className="hero__wrapper container">
        <div className="hero__content">
          <hr className="hero__divider" />
          <h1 className="hero__title">Humanizing <br /> your insurance.</h1>
          <p className="hero__text">
            Get your life insurance coverage easier and faster. We blend our expertise 
            and technology to help you find the plan that’s right for you. Ensure you 
            and your loved ones are protected.
          </p>
          <button className="hero__button">VIEW PLANS</button>
        </div>
        <div className="hero__image hero__image--main">
          <picture>
            <source media="(max-width: 767px)" srcSet={Img3} />
            <img src={Img4} alt="Main visual" />
          </picture>
        </div>
      </div>

      <div className="hero__image hero__image--left-bottom">
        <picture>
          <source media="(max-width: 767px)" srcSet={Img5} />
          <img src={Img6} alt="Left bottom illustration" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
