import React from 'react'
import './CourseCard.css'
import { IonIcon } from '@ionic/react';
import { star} from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';


const CourseCard = ({ id, title, price, duration, description, author, language, image }) => {


    const navigate = useNavigate();

    const handleCardClick = () => {
        if (id < 7 || id > 12) {
            navigate(`/coursesdata/${id}`);
        }
    };

    return (
        <div onClick={handleCardClick} className="course-card-link">
            <div className="card-course-section">
                <div className="card-course-container">
                    <div className="card-course-image-container">
                        <div className="card-course-image">
                            <img src={image} alt="" />
                        </div>
                        <div className="card-course-ratings">
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                        </div>
                    </div>
                    <div className="card-course-text-container">
                        <div className="card-course-sub-description">
                            <div className="card-course-language">
                                <p>{language}</p>
                            </div>
                            <div className="card-course-timeline">
                                <p>{duration}</p>
                            </div>
                        </div>
                        <div className="card-course-description">
                            <h3>{title}</h3>
                        </div>

                        <div className="card-course-authur-price">
                            <div className="card-course-author">
                                <div className="card-course-author-image-container">

                                </div>
                                <h4>{author}</h4>
                            </div>
                            <div className="card-course-price">
                                <p>{price}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card-course-description-hover">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard