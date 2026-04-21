import React from 'react';
import './FloatingButton.css';
const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-btn" onClick={onClick}>
      Take Demo
    </button>
  );
};

export default FloatingButton;
