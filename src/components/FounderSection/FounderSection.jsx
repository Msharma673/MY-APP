import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "./FounderSection.css";

const founders = [
  {
    name: "Shashank",
    designation: "Founder",
    image:"https://getpaisa-website.s3.ap-south-1.amazonaws.com/IMG_2959.PNG",
    message:
      "Ever felt like your dreams were stuck in Hinglish traffic? That's what I saw growing up in Bhadohi. Brilliant minds held back by a lack of English fluency. That's why I built Accent Aura - to smash those language barriers and get you cruising towards your goals! We're not about boring grammar drills. We're about building the confidence to own your English and unlock a world of opportunity.",
  },
  {
    name: "Chetan",
    designation: "Founder",
    image:"https://accentaura.com/asset/profile_pic/chetan.jpg",
    message:
      "At Accent Aura, we turn English learning into an exciting adventure! Forget the awkwardness—our mission is to help you speak with Bollywood-level confidence. We combine tech with personalized, fun learning for all styles. Think of us as your English cheerleaders, celebrating every win. Join our vibrant community and unlock your inner rockstar with Accent Aura!",
  },
];

const FounderSection = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);
  const [showBackIcon, setShowBackIcon] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Media queries for responsive design
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (selectedFounder) {
      setShowBackIcon(true);
      const timer = setTimeout(() => {
        setSelectedFounder(null);
        setShowBackIcon(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [selectedFounder]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleFounderClick = (founder) => setSelectedFounder(founder);
  const handleBackClick = () => {
    setSelectedFounder(null);
    setShowBackIcon(false);
  };

  const visibleFounders = founders.slice(
    currentSlide * 3,
    currentSlide * 3 + 3
  );

  return (
    <div style={{ overflow: "hidden"}}  className="founder-section">
       {isMobile ? (
        // Mobile View Slider
        <div style={{  height: "60vh",  }}  className="mobile-slider">
        <h1 style={{fontSize: "2.5rem"}} className="mobile-slider-title">
          Meet Our <span style={{ display: "inline" }} className="highlight">Founders</span>
        </h1>
        <div className="slider-container">
         
          <div className="slider">
            <div
              className="slide"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.6s ease-in-out",
              }}
            >
              {founders.map((founder, index) => (
                <div className="slide-content" key={index}>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="mobile-founder-image"
                  />
                  <h2 style={{margin: "0"}} className="mobile-founder-name">{founder.name}</h2>
                  <p style={{textAlign: "center"}} className="mobile-founder-message">{founder.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )  : (
        // Desktop or Tablet View Layout
        <>
          <div 
            className={`left-panel1 ${
              isTabletOrMobile ? "right-panel-tablet" : ""
            }`}
          >
            <div className="founder-bubbles">
              {visibleFounders.map((founder) => (
                <div
                  key={founder.id}
                  className="founder-bubble"
                  onClick={() => handleFounderClick(founder)}
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="founder-image"
                    
                  />
                   <h4
                style={{
                  color: "#E89F3E",
                  backgroundColor: "#062784",
                  padding: "5px",
                  marginzBottom: "10rem",
                  width: "70%",
                  zIndex: "999",
                  position: "absolute",
                  bottom: "-9rem",
                  left: "50%",
                  borderRadius: "5px",
                }}
                className="bubble-name"
              >
                {founder.name}
              </h4>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`right-panel1 ${
              isTabletOrMobile ? "left-panel-tablet" : ""
            }`}
          >
            {selectedFounder ? (
              <div className="founder-details animate">
                {showBackIcon && (
                  <FaArrowLeft
                    className="back-icon"
                    onClick={handleBackClick}
                  />
                )}
                <div className="founder-details-text">
                  <h2 className="founder-name">{selectedFounder.name}</h2>
                  <p className="founder-message">{selectedFounder.message}</p>
                </div>
              </div>
            ) : (
              <div className="initial-content">
                <h1 className="heading">
                  MESSAGE FROM{" "}
                  <span style={{ display: "inline" }} className="highlight">
                    FOUNDERS
                  </span>
                </h1>
                <p className="quote">
                  " Inspiring through education and innovation, together we
                  build the future. "
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FounderSection;
