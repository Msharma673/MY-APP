import React from 'react';
import './BlogSinglePage.css'; 
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Blog from '../../components/Blog/Blog';

const BlogSinglePage = () => {
  return (
    <div className="blog-page">
      <NavBar />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogSinglePage;