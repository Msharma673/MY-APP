import React from 'react';
import './WhyChooseUs.css'; 



const WhyChooseUs = () => {
  return (
    <div className="choose-us-section section">
    <div className="chooseus-container container">
      <h2 className='h2 section-title'>Why Choose <span>Us?</span></h2>
      {/* <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p> */}
      <div className="chooseus-cards">
        <div className="choose-card">
          <img src= "https://accentaura.com/asset/trainer.jpeg" alt="Our Trainers" />
          <div className="choose-card-overlay">
            <p>Our Trainers</p>
          </div>
        </div>
        <div className="choose-card">
          <img src="https://accentaura.com/asset/choose_course.jpeg" alt="Our Courses" />
          <div className="choose-card-overlay">
            <p>Our Courses</p>
          </div>
        </div>
        <div className="choose-card">
          <img src= "https://accentaura.com/asset/strategy_aura.jpeg" alt="Our Strategy" />
          <div className="choose-card-overlay">
            <p>Our Strategy</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default WhyChooseUs;

