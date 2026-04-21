import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./ContactModal.css";

const ContactModal = ({ title, onClose, isOpen }) => {
  
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0%)" : "translateY(-20%)",
    config: { tension: 200, friction: 20 },
  });

  const overlayAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
  });

  if (!isOpen) return null;

  return (
    <animated.div style={overlayAnimation} className="modal-overlay" onClick={onClose}>
      <animated.div
        style={modalAnimation}
        className="contact-modal"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div style={{display:"flex", gap:"30px"}} className="phone-email">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>

          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </animated.div>
    </animated.div>
  );
};

export default ContactModal;
