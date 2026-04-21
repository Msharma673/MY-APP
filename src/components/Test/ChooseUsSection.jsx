import React, { useEffect } from 'react';
import img1 from './img/dummy_icon.png';
import img2 from './img/one_on_one_mentorship_classes.jpg';
import './ChooseUsSection.css';

const ChooseUsSection = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.h3_cu');

    const handleScroll = () => {
      let index = 0;
      let lastActiveIndex = -1;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          index = i;
        }
        if (item.classList.contains('active_h3_cu')) {
          lastActiveIndex = i;
        }
      });

      if (lastActiveIndex !== index) {
        items.forEach(item => item.classList.remove('active_h3_cu'));
        items[index].classList.add('active_h3_cu');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check when the component mounts

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="choose_us_section">
      <h2 className="h2 section-title">Choose Us for</h2>
      <div className="content_div_cu">
        <div className="left_cu">
          <h3 className="h3_cu active_h3_cu">
            <img src={img1} alt="" />Personalized one on one mentorship sessions
          </h3>
          <h3 className="h3_cu">
            <img src={img1} alt="" />Live lecture and recording
          </h3>
          <h3 className="h3_cu">
            <img src={img1} alt="" /> Comprehensive resources: Notes, Modules, Practice test and Assessment
          </h3>
          <h3 className="h3_cu">
            <img src={img1} alt="" />Expert-led personality development classes
          </h3>
          <h3 className="h3_cu">
            <img src={img1} alt="" />
            Live progress Trackings and feedback.
          </h3>
          <h3 className="h3_cu">
            <img src={img1} alt="" />Public speaking training
          </h3>
          <h3 className="h3_cu">
            <img src={img1} alt="" />Affordable pricing options
          </h3>
          <h3 className="h3_cu">
            <img src={img1} alt="" />Certification aligned with CEFR proficiency levels
          </h3>
        </div>
        <div className="right_cu">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
