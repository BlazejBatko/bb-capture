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

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faClock} />
              <h3>Clock</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faProjectDiagram} />
              <h3>Diagram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faMoneyBill} />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faUsers} />
              <h3>Users</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Koi_fish2} alt="Koi fish"></img>
      </div>
    </div>
  );
};

export default ServicesSection;
