import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "./MeetOurTeacher.css";

const teacherData = [
  {
    id: 1,
    name: "Diksha Kapoor",
    image:"https://accentaura.com/asset/profile_pic/Diksha_Kapoor.jpeg",
  },
  {
    id: 2,
    name: "Kirti Kashyap",
    image:"https://accentaura.com/asset/profile_pic/Kirti_Kashyap.jpeg",

  },
  {
    id: 3,
    name: "Rebeca Joseph",
    image: "https://accentaura.com/asset/profile_pic/Rebeca_Joseph.webp",
    qualification: "BA in Linguistics, TOEFL Specialist",
  },
  {
    id: 4,
    name: "Rasika Wamanacharya",
    image:"https://accentaura.com/asset/profile_pic/Rasika_Wamanacharya.jpg",
    qualification: "MSc in Computer Science",
  },
  {
    id: 5,
    name: "Priyanka Sethi",
    image:"https://accentaura.com/asset/profile_pic/priyanka_sethi.jpg",
    qualification: "BEd in Mathematics",
  },
  {
    id: 6,
    name: "Nazia Wali",
    image:"https://accentaura.com/asset/profile_pic/Nazia_Wali.jpeg",
    qualification: "BEd in Mathematics",
  },
];

const MeetOurTeacher = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showBackIcon, setShowBackIcon] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const nextSlide = () => {
    setFade(false); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teacherData.length);
      setFade(true); 
    }, 500); 
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (selectedTeacher) {
      setShowBackIcon(true);
      const timer = setTimeout(() => {
        setSelectedTeacher(null);
        setShowBackIcon(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [selectedTeacher]);


  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % Math.ceil(teacherData.length / 3)
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const handleTeacherClick = (teacher) => setSelectedTeacher(teacher);
  const handleBackClick = () => {
    setSelectedTeacher(null);
    setShowBackIcon(false);
  };

  const visibleTeachers = teacherData.slice(
    currentSlide * 3,
    currentSlide * 3 + 3
  );

  return (
    <div className="meet-our-teacher">
      {isMobile ? (
        // Mobile View Layout
        <div style={{ textAlign: "center", width: "80%", justifyContent: 'center', marginLeft: '4rem', marginTop: '2rem' }}>
        <h1 style={{ color: "#062784", marginBottom: "1.8rem", fontSize: "2.5rem" }}>
          Meet Your <span style={{ color: "#E89F3E",display: 'inline'}}>Teachers</span>
        </h1>
        <div
          className="slider-content"
          style={{display: "flex", flexDirection: 'column'}}
        >
          <img
            src={teacherData[currentIndex].image}
            alt={teacherData[currentIndex].name}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: "50%",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.5s ease-in-out",
              transform: fade ? "scale(1)" : "scale(0.95)",
              margin: "0 auto",
              border: "2px solid #E89F3E",
            }}
          />
          <h2 className="teacher-name" style={{ fontSize: "2.5rem", color: "#062784", marginTop: '-1.2rem'}}>{teacherData[currentIndex].name}</h2>
        </div>
      </div>
      ) : (
        // Desktop or Tablet View Layout
        <>
          <div
            className={`left-panel ${
              isTabletOrMobile ? "left-panel-tablet" : ""
            }`}
          >
            {selectedTeacher ? (
              <div className="teacher-details animate">
                {showBackIcon && (
                  <FaArrowLeft
                    className="back-icon"
                    onClick={handleBackClick}
                  />
                )}
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="teacher-pic"
                />
                <div className="teacher-details-text">
                  <h2 className="teacher-name">{selectedTeacher.name}</h2>
                  
                </div>
              </div>
            ) : (
              <div className="initial-content">
                <h1 className="heading">
                  MEET YOUR <span className="teacher">TEACHERS !!!</span>
                </h1>
                <p className="quote">
                  " Teamwork makes the dream work. Together, we learn and grow!
                  "
                </p>
              </div>
            )}
          </div>
          <div
            className={`right-panel ${
              isTabletOrMobile ? "right-panel-tablet" : ""
            }`}
          >
            <div className="teacher-bubbles">
              {visibleTeachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="teacher-bubble"
                  onClick={() => handleTeacherClick(teacher)}
                >
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="teacher-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MeetOurTeacher;
