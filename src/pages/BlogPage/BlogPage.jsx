import React from 'react';
import './BlogPage.css'; 
import NavBar from '../../components/NavBar/NavBar';
import TabComponent from '../../components/TabComponent/tabComponent';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <NavBar />
      <TabComponent />
      
    </div>
  );
};

export default BlogPage;
