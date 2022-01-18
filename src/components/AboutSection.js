import React from "react";
import Koi_fish from "../img/Koi_fish.jpg";
//Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
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
const StyledImage = styled.div`
  flex: 1;
  margin-right: -5rem;
  box-shadow: -0.2rem -1rem 1rem 0.2rem #0c0b10;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 5rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export default AboutSection;
