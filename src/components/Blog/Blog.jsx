// Blog.js
import React from 'react';
import './Blog.css';
import Blog1 from './blog26.png';
import Blog2 from './girlblog.avif';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <img src={Blog1} alt="Blog Header" className="blog-header-image" />
        <div className="blog-header-content">
          <h1>Title of the Resource</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
      <div className="blog-tags">
        <button className="tag-button">affordable</button>
        <button className="tag-button">stunning</button>
        <button className="tag-button">making</button>
      </div>
      <hr className='blog-hr' />
      <div className="blog-author-button-container">
        <div className="blog-author">
          <img src={Blog2} alt="Author" className="author-image" />
          <div className="author-info">
            <p>Written by</p>
            <h4>Lina</h4>

          </div>
        </div>
        <div className="button-right">
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
