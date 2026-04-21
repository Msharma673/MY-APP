import React from "react";
import "./TeachWithUs.css";
import teachpic from "./teachpic.png";
import { useNavigate } from "react-router-dom";

const TeachWithUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/career');
  };
  return (
    <div className="teach-section section">
      <div className="teach-container container">
        <div className="teach-content">
          <h2>Teach with Us!</h2>
          <p>Are you a passionate and experienced English language professional?.</p>
          <ul>
            <li>
              Join our team of expert trainers and contribute to shaping the futures of our learners
            </li>
            <li>
              Explore exciting opportunities by visiting our "Teach with Us" page.
            </li>
          </ul>
          <button className="join-button" onClick={handleClick}>Join Us</button>
        </div>
        <div className="teach-image">
          <img src={teachpic} alt="Handshake" />
        </div>
      </div>
      <div className="teach-with-us-mobile-container">

        <h2 className="h2 section-title">Teach with Us!</h2>
        <p>Are you a passionate and experienced English language professional?.</p>
        <div className="teach-image">
          <img src={teachpic} alt="Handshake" />
        </div>
        <ul>
          <li>
            Join our team of expert trainers and contribute to shaping the futures of our learners
          </li>
          <li>
            Explore exciting opportunities by visiting our "Teach with Us" page.
          </li>
        </ul>
        <button className="join-button" onClick={handleClick} >Join Us</button>


      </div>
    </div>

  );
};

export default TeachWithUs;
