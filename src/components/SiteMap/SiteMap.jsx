import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaUser, FaBlog, FaTools, FaChalkboardTeacher } from 'react-icons/fa';
import './SiteMap.css';

const SiteMap = () => {
  const links = [
    { to: "/", icon: <FaHome />, label: "Home", description: "Explore our homepage" },
    { to: "/about", icon: <FaUser />, label: "About Us", description: "Learn more about us" },
    { to: "/courses", icon: <FaBook />, label: "Courses", description: "Browse our courses" },
    // { to: "/blogs", icon: <FaBlog />, label: "Blogs", description: "Read our latest blogs" },
    { to: "/career", icon: <FaChalkboardTeacher />, label: "Teach with Us", description: "Join as a teacher" },
    { to: "/maintainance", icon: <FaTools />, label: "Maintenance", description: "Check maintenance status" },
    // { to: "/register", icon: <FaUser />, label: "Login/Register", description: "Access your account" },
  ];

  return (
    <div className="sitemap-page">
      <header className="sitemap-header">
        <h1>Welcome to Our Site Map</h1>
        <p>Explore our website with ease using the interactive links below.</p>
      </header>
      <div className="sitemap-grid">
        {links.map((link, index) => (
          <div key={index} className="sitemap-card">
            <Link to={link.to} className="sitemap-link">
              <div className="icon">{link.icon}</div>
              <h3>{link.label}</h3>
              <p>{link.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <footer className="sitemap-footer">
        <p>© 2024 AccentAura. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SiteMap;
