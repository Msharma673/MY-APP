import React from 'react';
import { IonIcon } from '@ionic/react';
import { play } from 'ionicons/icons';
import './VideoSection.css';
import Video1Image from './images/video-shape-1.png'
import Video2Image from './images/video-shape-2.png'
import VideoBannerImage from './images/video-banner.jpg'
const VideoSection = () => {
  return (
    <section className="video has-bg-image" aria-label="video">
      <div className="container">
        <div className="video-card">
          <div className="video-banner img-holder has-after" style={{'--width': '', '--height': ''}}>
            <img src= {VideoBannerImage} width="970" height="550" loading="lazy" alt="video banner" className="img-cover" />
            <button className="play-btn" aria-label="play video">
              <IonIcon icon={play} aria-hidden= "true" />
            </button>
          </div>
          <img src={Video1Image} width="1089" height="605" loading="lazy" alt="" className="shape video-shape-1" />
          <img src={Video2Image} width="158" height="174" loading="lazy" alt="" className="shape video-shape-2" />
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
