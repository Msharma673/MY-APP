import React from 'react';
import './BlogPostPage.css'; 
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Blogs from '../../components/Blogs/Blogs';

const BlogPostPage = () => {
  return (
    <div className="blogpage-container">
      <NavBar />
      <Blogs />
      <Footer />
    </div>
  );
};

export default BlogPostPage;