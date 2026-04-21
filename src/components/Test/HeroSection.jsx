import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import video1 from './video/personalized_growth_video.mp4';


const slides = [
  "Personalized Growth",
  "Interactive Learning",
  "Beyond Language",
  "Global Community",
  "Continuous Progress"
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero_section">
      <div className="left_hs">
        <h1 className="h1_hs">We provide support</h1>
        <div className="swiper_div_hs">
          <div className="slides_container">
            <motion.div
              className="slide"
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <h1 className="h1_slide_title_hs">{slides[index]}</h1>
            </motion.div>
          </div>
        </div>
        <p className="ptag_hs">
          Elevate your English proficiency with our session trainers, interactive live sessions, and a supportive community. Unlock your potential and achieve fluency, a key to personal, professional, and global success. Start today by taking the demo classes and set out on a path of achievement and self-improvement!
        </p>
      </div>
      <div className="right_hs">
        <div className="div_slide_video_hs" id="video_div_id">
          <video autoPlay muted loop playsInline className="slide_video_hs video-visible" id="slide_video1">
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="info-banner">
          <h6 className="h6_label_hs">Raising Tomorrow's Leaders</h6>
          <div className="info_item_div">
            <div className="info-item">
              <span className="number">+9</span>
              <span className="label">COURSE</span>
            </div>
            <hr className="divider" />
            <div className="info-item">
              <span className="number">+50</span>
              <span className="label">EXPERT TRAINER</span>
            </div>
          </div>
          <hr className="divider" />
          <div className="info_item_div">
            <div className="info-item">
              <span className="number">+100</span>
              <span className="label">LIVE LECTURE</span>
            </div>
            <hr className="divider" />
            <div className="info-item">
              <span className="number">+30</span>
              <span className="label">RECORDED LECTURE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
