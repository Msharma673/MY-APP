import React from 'react'
import './MajorHeadingCourseCard.css'
import { IonIcon } from '@ionic/react'
import { star } from 'ionicons/icons'
function MajorHeadingCourseCard({ title, price, duration, description, author ,language,image}) {
    return (
        <div className="major-course-card-section">
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
                        <p>{description}</p>
                    </div>

                <div className="card-course-authur-price">
                        <div className="card-course-author">
                            <div className="card-course-author-image-container">

                            </div>
                            {/* <h4>{author}</h4> */}
                        </div>
                        <div className="card-course-price">
                            {/* <p>{price}</p> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MajorHeadingCourseCard