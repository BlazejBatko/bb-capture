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

//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnim}
          // Jesli nie chcemy zeby stagger wplywal na ten komponent wystarczy dodac initial i animate
          // initial="hidden"
          // animate="show"
          src={Koi_fish}
          alt="Koi fish"
        ></motion.img>
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

//Styled Components

export default AboutSection;
