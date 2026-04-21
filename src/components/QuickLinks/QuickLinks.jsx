import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaBlog, FaChalkboardTeacher, FaUser, FaTools } from 'react-icons/fa';
import './QuickLinks.css';

const QuickLinks = () => {
  const links = [
    {
      title: "Explore Courses",
      description: "Discover our wide range of courses tailored to your needs.",
      icon: <FaBook />,
      path: "/courses",
    },
    
    {
      title: "Teach with Us",
      description: "Join us as a mentor and inspire learners worldwide.",
      icon: <FaChalkboardTeacher />,
      path: "/career",
    },
    {
      title: "Join Now",
      description: "Register to start your journey with us today.",
      icon: <FaUser />,
      path: "/register",
    },
    {
      title: "Maintenance Updates",
      description: "View scheduled maintenance and system updates.",
      icon: <FaTools />,
      path: "/maintainance",
    },
  ];

  return (
    <div className="quicklinks-container">
      <h2 className="quicklinks-title">Quick Links</h2>
      <div className="quicklinks-grid">
        {links.map((link, index) => (
          <Link to={link.path} key={index} className="quicklink-card">
            <div className="quicklink-icon">{link.icon}</div>
            <h3 className="quicklink-title">{link.title}</h3>
            <p className="quicklink-description">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
