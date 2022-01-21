import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Import Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

const OurWork = () => {
  return (
    <div>
      <Work
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{ background: "#fff" }}
      >
        <motion.div variants={sliderContainer}>
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>
        <Movie>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="the-athlete">
            <Hide>
              <motion.img variants={photoAnim} src={athlete} alt="athlete" />
            </Hide>
          </Link>
        </Movie>
        <Movie>
          <h2>The Racer</h2>
          <div className="line"></div>
          <Link to="the-racer">
            <img src={theracer} alt="theracer" />
          </Link>
        </Movie>
        <Movie>
          <h2>Good times</h2>
          <div className="line"></div>
          <Link to="good-times">
            <img className="goodtimes" src={goodtimes} alt="goodtimes" />
          </Link>
        </Movie>
      </Work>
    </div>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  padding-bottom: 10rem;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #c5501a;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    object-position: center;
  }
  .goodtimes {
    object-position: bottom;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame animation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
