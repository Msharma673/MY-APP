import React, { useState } from "react";
import "./AboutUs.css";
import background from "../../assets/images/blog26.png";
import class1 from "./class.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MeetOurTeacher from "../MeetOurTeacher/MeetOurTeacher";
import FounderSection from "../FounderSection/FounderSection";

const AboutUs = () => {

  return (
    <div className="about-us" id="about">
      <div style={{ marginTop: "2rem" }} className="banner-container">
        <img src={background} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <div className="banner-text1">
            <h1 style={{margin: "0px"}}>
              Unlock Your Potential with Accent Aura: Where{" "}
              <span>English Fluency Meets Indian Ambition</span>
            </h1>
            <p>
              Where English Fluency Meets Indian Ambition: Empowering
              Professionals to Speak Confidently, Lead Globally, and Shape the
              Future
            </p>
          </div>
        </div>
      </div>
      <div className="about-accentaura">
        <div className="about-accentaura-heading">
          <h1 className="h1-about">
            About <span className="span">Accent Aura</span>
          </h1>
        </div>
        <div className="about-accentaura-para">
          <p className="p-about">
            Unlock your true potential with Accent Aura, your trusted partner in
            mastering the English language and building unshakable confidence.
            We know the challenges – the hesitation to speak up, the fear of
            mispronunciation – and we’re here to support you every step of the
            way. Born from the shared vision of three friends, Accent Aura is
            reimagining English learning for Indian professionals. Our classes
            are crafted to help you find and refine your voice, from beginners
            discovering the language to advanced speakers looking for a polish.
            Our expert instructors understand the cultural nuances of learning
            English in India, so you can be sure your education is relevant,
            relatable, and effective. Ready to elevate your English and unlock
            new opportunities? Your journey starts with Accent Aura – let’s make
            it unforgettable.
          </p>
        </div>
      </div>
      <div className="mission-and-vision">
        <div className="mission-and-vision-image">
          <img src={class1} alt="class1" className="imageClass" />
        </div>
        <div className="mission-and-vision-text">
          <div className="mission-and-vision-heading">
            <h1 className="h1-about">
              Mission and <span className="span">Vision</span>
            </h1>
          </div>
          <ul style={{ listStyleType: "disc"}} className="mission-vision-ul">
            <li>
              {" "}
              Empower India's future leaders through accessible, high-quality
              online English communication lessons, fostering confidence and
              fluency in global interactions
            </li>
            <li>
              Build a connected India where professionals can express themselves
              eloquently in English, breaking down barriers and catalyzing
              international collaboration
            </li>
            <li>
              Nurture articulate and compassionate leaders who will make
              significant impacts on the world stage, reshaping India's global
              presence
            </li>
            <li>
              Unlock doors to global opportunities by providing innovative,
              adult-focused English classes that blend language mastery with
              leadership skills
            </li>
            <li>
              Shape a future where Indian professionals stand tall in
              international arenas, driving a transformative journey of personal
              and national growth
            </li>
          </ul>
          <p style={{fontWeight: "bolder"}}>
            So why wait? Join Accent Aura today and become part of this
            transformative journey towards mastering English and leadership.
          </p>
        </div>
      </div>
      <div className="founder">
        <FounderSection />
      </div>
      <div className="meet-teacher">
        <MeetOurTeacher />
      </div>
    </div>
  );
};

export default AboutUs;
