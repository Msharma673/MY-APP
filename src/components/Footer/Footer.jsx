import React, { useState } from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import ContactModal from "../ContactModal/ContactModal";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-subscribe">
          <p>Subscribe to be the first to know <br /> about our latest courses</p>

          <div className="footer-subscribe-input">
            <input type="email" placeholder="Email address" />
            <button>→</button>
          </div>
          <div className="footer-social">
            <div className="facebook">
              <a href="https://www.facebook.com/profile.php?id=61561028583467&mibextid=ZbWKwL" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <div className="twitter">
              <a href="https://www.linkedin.com/in/accent-aura-ba1965314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="Twitter">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="instagram">
              <a href="https://www.instagram.com/accent_aura?igsh=MXhrem1wZjIwaTloeg==" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <Link to='/'>Home</Link>
          <Link to='/quicklinks'>Quick Links</Link>
          <Link to='/sitemap'>Site Map</Link>
        </div>
        <div className="footer-column">
          <a href="#/about">About Us</a>
          <a href="#/career">Teach with Us</a>
          <button 
            className="footer-link-button"
            onClick={toggleContactModal}
          >
            Contact Us
          </button>
        </div>
        <div className="footer-column1">
          <p>Language</p>
          <div className="English">
            <select>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Accent Aura</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#accessibility">Accessibility</a>
        </div>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={toggleContactModal} 
        />
      )}
    </footer>
  );
};

export default Footer;
