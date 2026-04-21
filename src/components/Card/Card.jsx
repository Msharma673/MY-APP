import React from 'react';
import './Card.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className="card-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <button className="arrow-button">→</button>
    </div>
  );
};

export default Card;
