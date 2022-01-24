import styled from "styled-components";
import react from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { Circle } from "../pages/ContactUs";
import { slider, sliderContainer } from "../animation";
import { Frame4, Frame1, Frame2, Frame3 } from "../pages/OurWork";
import { motion } from "framer-motion";
import { render } from "@testing-library/react";
import { SliderAnimFn } from "../animation";
import Swal from "sweetalert2";
import { pageAnimation, titleAnimation2, fade } from "../animation";
import { Hide } from "../pages/ContactUs";
const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send(
      "service_sb92qir",
      "template_vsfasng",
      toSend,
      "user_eagDPrYS1cQbCTwORGOW2"
    )
      .then((response) => {
        Swal.fire("SUCCESS!", "Your email was sent to us", "success");
        console.log("success");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        Swal.fire("ERROR", "The message could not be sent :(", "error");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <StyledDiv
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Form"
    >
      <MotionDiv variants={titleAnimation2}>
        <Hide>
          <StyledH2 variants={titleAnimation2}>Write to us</StyledH2>
        </Hide>
      </MotionDiv>
      <StyledForm onSubmit={onSubmit} autocomplete="off">
        <Hide>
          <StyledInput
            variants={titleAnimation2}
            className="name_field"
            type="text"
            name="from_name"
            placeholder="Name"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </Hide>
        <Hide>
          <StyledInput
            variants={titleAnimation2}
            className="email"
            type="text"
            name="reply_to"
            placeholder="Your Email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </Hide>
        <Hide>
          <StyledInput
            variants={titleAnimation2}
            className="Message"
            type="text"
            name="message"
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
          />
        </Hide>
        <br></br>
        <Hide>
          <motion.button className="Sub-button" variants={titleAnimation2} type="submit">
            Submit
          </motion.button>
        </Hide>
      </StyledForm>
    </StyledDiv>
  );
};

export default Form;

const StyledH2 = styled(motion.h2)`
  color: white;
`;
const StyledDiv = styled(motion.div)`
  padding: 5rem;
  width: 50%;

  @media (max-width: 1300px) {
    padding: 2rem ;
    margin: 0;
    width: 100%;
  }
`;

const MotionDiv = styled(motion.div)``;

const StyledForm = styled(motion.form)`
  width: 100%;
  height: 30vh;
  display: block;
  padding: rem;
  .name_field {
    height: 5vh;
  }
  .email {
    height: 5vh;
  }
  .Message {
    height: 15vh;
  }

  .Sub-button{
    width: 100%;
    margin-top: 1.5em;

    @media (max-width: 550px) {
      width: 50%;
      text-align: start;
    }
  }
`;

const StyledInput = styled(motion.input)`
  textarea:focus,
  input:focus {
    outline: none;
  }
  border: none;
  color: white;
  text-align: start;
  font-size: 1rem;
  background: #282828;
  height: 10vh;
  width: 100%;
  padding: 2rem 2rem;
  display: block;
  margin-top: 2rem;

  border-radius: 1rem;
`;
