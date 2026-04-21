import React from 'react';
import './PrivacyPolicy.css';
import { Link } from 'react-router-dom';

const PrivacyPolicy = ({ onClose, onAccept }) => {
  return (
    <div className="modal">
      <article className="modal-container">
        <header className="modal-container-header">
          <span className="modal-container-title">
            <svg aria-hidden="true" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z" fill="currentColor"></path>
            </svg>
            Privacy Policy
          </span>
          <button className="icon-button" onClick={onClose}>
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor"></path>
            </svg>
          </button>
        </header>
        <section className="modal-container-body rtf">
        <p>Welcome to AccentAura (www.accentaura.com). This privacy policy explains how we collect, use, and share information about you when you visit our website and use our services.</p>
        
        <h5>Information We Collect</h5>
        <p>We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us. This information may include your name, email address, phone number, and other details you provide.</p>
        
        <h5>How We Use Your Information</h5>
        <p>Your information is used to improve our services, communicate with you, and personalize your experience on our site. We may also use your information for marketing purposes, with your consent.</p>
        
        <h5>Sharing Your Information</h5>
        <p>We do not share your personal information with third parties except as necessary to provide our services or comply with the law.</p>
        
        <h5>Your Choices</h5>
        <p>You have the right to access, correct, or delete your personal information at any time. Please contact us at support@accentaura.com to exercise these rights.</p>

        <p>For more details, please read our full privacy policy below:</p>

        <p>
          <Link to="https://accentaura.com/asset/Accent_Aura_Privacy_Policy.pdf" target="_blank">Read the full Privacy Policy</Link>
        </p>
        </section>
        <footer className="modal-container-footer">
          <button className="button is-ghost" onClick={onClose}>Decline</button>
          <button className="button is-primary" onClick={onAccept}>Accept</button>
        </footer>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
