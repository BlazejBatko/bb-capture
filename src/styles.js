//Styled
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 5rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 5rem 0rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  z-index: 2;
  /* margin-right: -5rem; */
  box-shadow: -0.2rem -1rem 1rem 0.2rem #0c0b10;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    
    img {
      position: flex;
      
    }
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
