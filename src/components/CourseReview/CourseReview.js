import React from 'react'
import './CourseReview.css'
import { IonIcon } from '@ionic/react'
import { star } from 'ionicons/icons'

const CourseReview = ({ reviews }) => {
    return (
        <div className='course-review-section'>
            <div className="course-review-container">
                <div className="course-review-avg-rating-container">
                    <div className="course-review-avg-rating-star">
                        <div className="icon-star">
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                            <IonIcon icon={star} aria-hidden="true" />
                        </div>
                        <h2>4 out of 5</h2>
                    </div>
                    <div className="course-review-avg-rating-progress-bar">
                        <div className="five-star stars">
                            <p>5 Stars</p>
                            <div className="progress-bar"></div>
                        </div>
                        <div className="four-star stars">
                            <p>4 Stars</p>
                            <div className="progress-bar"></div>
                        </div>
                        <div className="three-star stars">
                            <p>3 Stars</p>
                            <div className="progress-bar"></div>
                        </div>
                        <div className="two-star stars">
                            <p>2 Stars</p>
                            <div className="progress-bar"></div>
                        </div>
                        <div className="one-star stars">
                            <p>1 Stars</p>
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="course-review-testimonial-container">
                    {reviews.map((review, index) => (
                        <div key={index} className="review">
                            <div className="review-author-timeline-container">
                                <div className="review-author-container">
                                    <div className="review-author-image">

                                    </div>
                                    <h4 className="review-author-name">{review.author}</h4>
                                </div>
                                <div className="review-timeline-container">
                                    <h5>{review.timestamp}</h5>
                                </div>
                            </div>
                            <div className="review-testimonial">
                                <p>{review.testimonial}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseReview