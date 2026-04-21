import React from 'react';
import './BlogSection.css';
import Blog1 from './images/blog-1.jpg'
import Blog2 from './images/blog-2.jpg'
import Blog3 from './images/blog-3.jpg'
import BlogShape from './images/blog-shape.png'
import { IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import { calendarOutline } from 'ionicons/icons';



const BlogSection = () => {
    return (
      <section className="blog section has-bg-image" id="blog" aria-label="blog">
        <div className="container">
          <p className="section-subtitle">Latest Articles</p>
          <h2 className="h2 section-title" style={{'marginBottom' : '30px'}}>Get News With AccentAura</h2>
          <ul className="grid-list">
            <li>
              <div className="blog-card">
                <figure className="card-banner img-holder has-after" style={{'--width': '370px', '--height': '370px'}}>
                  <img src= {Blog1} width="370" height="370" loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-btn" aria-label="read more">
                    <IonIcon icon={arrowForwardOutline} aria-hidden="true"/>
                  </a>
                  
                  <h3 className="h3">
                    <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                  </h3>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                    <IonIcon icon={calendarOutline} aria-hidden="true"/>
                      <span className="span">May 14, 2024</span>
                    </li>
                  </ul>
                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner img-holder has-after" style={{'--width': '370px', '--height': '370px'}}>
                  <img src= {Blog2} width="370" height="370" loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-btn" aria-label="read more">
                  <IonIcon icon={arrowForwardOutline} aria-hidden="true"/>
                  </a>
                  <h3 className="h3">
                    <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                  </h3>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                    <IonIcon icon={calendarOutline} aria-hidden="true"/>
                      <span className="span">May 10, 2024</span>
                    </li>
                  </ul>
                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner img-holder has-after" style={{'--width': '370px', '--height': '370px'}}>
                  <img src= {Blog3} width="370" height="370" loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-btn" aria-label="read more">
                  <IonIcon icon={arrowForwardOutline} aria-hidden="true"/>
                  </a>
                  <h3 className="h3">
                    <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                  </h3>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                    <IonIcon icon={calendarOutline} aria-hidden="true"/>
                      <span className="span">May 12, 2024</span>
                    </li>
                    
                  </ul>
                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>
                </div>
              </div>
            </li>
            {/* Repeat similar structure for other blog items */}
          </ul>
          <img src={BlogShape} width="186" height="186" loading="lazy" alt="" className="shape blog-shape" />
        </div>
      </section>
    );
  }
  
  export default BlogSection;
