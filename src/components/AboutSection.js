import React from "react";
import Koi_fish from "../img/Koi_fish.jpg";
//Styled
import styled from "styled-components";
import {
  StyledAbout,
  StyledImage,
  StyledHide,
  StyledDescription,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={Koi_fish} alt="Koi fish"></img>
      </StyledImage>
    </StyledAbout>
  );
};

//Styled Components

export default AboutSection;
