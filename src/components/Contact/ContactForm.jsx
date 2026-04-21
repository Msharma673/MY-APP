import React, { useState } from 'react';
import './ContactForm.css';
import contact from '../../assets/images/contact-2.jpg';
import Swal from 'sweetalert2';
import { submitContact } from '../../utils/contactApi';
import { showSendingSwal } from '../../utils/swalSending';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    showSendingSwal();

    try {
      await submitContact({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        message: formData.message,
      });

      Swal.fire({
        title: 'Success!',
        text: 'Thanks for contacting us. We will get back to you soon.',
        icon: 'success',
        confirmButtonText: 'OK',
        width: '80%',
        customClass: {
          popup: 'responsive-swal-popup'
        }
      });

      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    } catch (error) {
      const detail =
        error instanceof Error && error.message
          ? error.message
          : 'Error submitting the form. Please try again later.';
      Swal.fire({
        title: 'Error!',
        text: detail,
        icon: 'error',
        confirmButtonText: 'OK',
        width: '80%',
        customClass: {
          popup: 'responsive-swal-popup', 
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h2 className="h2">Contact <span className="section-title .span">Us</span></h2>
          <p>Ready to become a global leader and start your English language journey? <br />Don't wait! Contact us now to take the first step to mastering English</p>
        </div>
        <div className="contact-content">
          <div className="contact-image">
            <img src={contact} alt="Contact Us" />
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full name</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group-grouped">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Leave a Message</label>
              <input type="text" id="message" name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn1" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
