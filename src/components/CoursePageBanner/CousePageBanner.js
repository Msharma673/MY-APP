import React, { useState, useEffect } from 'react';
import './CoursePageBanner.css';

const CoursePageBanner = () => {
  const [scrollY, setScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="coursepagebanner">
      <div className="container">
       
      </div>
    </div>
  );
};

export default CoursePageBanner;
