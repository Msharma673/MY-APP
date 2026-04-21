import React from 'react'
import './TabContentBlock.css'
import { IonIcon } from '@ionic/react';
import { libraryOutline, peopleOutline, star, timeOutline } from 'ionicons/icons';

const TabContentBlock = ({ title, price, image, timeline, difficulty }) => {
    return (
            <div className="course-card">

                <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                    <img src={image} width="370" height="220" loading="lazy"
                        alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
                </figure>

                <div className="abs-badge">
                    <IonIcon icon={timeOutline} aria-hidden="true" />
                    <span className="span">{timeline}</span>
                </div>

                <div className="card-content">

                    <span className="badge">{difficulty}</span>

                    <h3 className="h3">
                        <a href="#" className="card-title">{title}</a>
                    </h3>

                    <div className="wrapper">

                        <div className="rating-wrapper">
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                        </div>

                        <p className="rating-text">(5.0/7 Rating)</p>

                    </div>

                    <data className="price" value="29">{price}</data>

                    <ul className="card-meta-list">

                        <li className="card-meta-item">
                            <IonIcon icon= {libraryOutline} aria-hidden="true"></IonIcon>

                            <span className="span">8 Lessons</span>
                        </li>

                        <li className="card-meta-item">
                            <IonIcon icon= {peopleOutline} aria-hidden="true"></IonIcon>

                            <span className="span">20 Students</span>
                        </li>

                    </ul>

                </div>

            </div>
        
    );
};

export default TabContentBlock