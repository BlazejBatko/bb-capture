import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import Koi_fish2 from "../img/Koi_fish2.jpg";

//Import icons
import {
  faClock,
  faProjectDiagram,
  faMoneyBill,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

//Styles
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledHiden,
  StyledImage,
} from "../styles";

const ServicesSection = () => {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faClock} size="5x" color="#C5501A" />
              <h3>Clock</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon
                icon={faProjectDiagram}
                size="5x"
                color="#C5501A"
              />
              <h3>Diagram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faMoneyBill} size="5x" color="#C5501A" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faUsers} size="5x" color="#C5501A" />
              <h3>Users</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </StyledDescription>
      <StyledImage>
        <img src={Koi_fish2} alt="Koi fish"></img>
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: #a8a8a8;
      color: black;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  }
`;
export default ServicesSection;
