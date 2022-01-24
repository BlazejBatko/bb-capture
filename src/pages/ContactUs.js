import react from "react";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

import Form from "../components/ContactForm";

const ContactUs = () => {
  return (
    <QWE>
    <Form />
    
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
     
      
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Send an email.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Social Media</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
      </div>
      
      </ContactStyle>
    
    </QWE>
    
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 5rem;
  color: #fff;
  min-height: 90vh;
  
  
  
  

  @media (max-width: 1300px) {
    
    font-size: 1rem;
    padding: 10rem 1rem;
    margin-top: 6rem;
    
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: #ffffff;
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #fff;
  @media (max-width: 1300px) {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    padding: 1rem;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  
  h2 {
    margin: 2rem;
  }

  @media (max-width: 1300px) {
    
    
    h2 {
      font-size: 2rem ;
    }
  }
`;

const QWE = styled(motion.div)`
display: flex;
justify-content: space-between;

@media (max-width: 1300px) {
  display: block;
  margin: 2rem ;
  padding: 2rem ;
}


`

export default ContactUs;
