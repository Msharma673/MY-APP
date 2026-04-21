import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blogs.css';
import blogImage from './BlogPage.png'

const blogs = [
  { id: 1, title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution', author: 'Lina', views: 251232 },
  { id: 2, title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution', author: 'Lina', views: 251232 },
  { id: 3, title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution', author: 'Lina', views: 251232 },
  { id: 4, title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution', author: 'Lina', views: 251232 },
];

const Blogs = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-section">
        <div className="banner">
        <div className="banner-text1">
        <p className="author">By Author John Doe</p>
        <h1 className="title">Title of the Resource</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="read-more-button">Read More</button>

        </div>
        <div className="banner-image1">
            <img src={blogImage} alt="blogImage" />
        </div>
        
      </div>
      <div className="blog-container">
      
      <h2 className="latest-blogs">Latest <div className="span3">Blogs</div> </h2>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card" onClick={() => handleCardClick(blog.id)}>
            <div className="image-wrapper">
              <img src={blogImage} alt="Blog Post" />
            </div>
            <div className="card-content">
              {/* <h3 className="blog-title">{blog.title}</h3> */}
              <div className="blog-title1">{blog.title}</div>
              <div className="author-views">
                <p className="author-name">{blog.author}</p>
                <p className="views">{blog.views.toLocaleString()}</p>
              </div>
              <p className="read-more">Read more</p>
            </div>
          </div>
        ))}
      </div>
      <button className="load-more-button">Load More</button>
    </div>
    </div>
    
  );
};

export default Blogs;
