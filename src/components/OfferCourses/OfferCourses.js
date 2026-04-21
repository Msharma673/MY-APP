import React from 'react'
import DOMPurify from 'dompurify';
import './OfferCourses.css'
import expert from '../../assets/images/Expert.png'
import impact from '../../assets/images/Impact.png'
import liveSession from '../../assets/images/Live Sessions.png'

function OfferCourses() {
    const sanitize = (html) => {
        return DOMPurify.sanitize(html);
    };

    const OffercourseDetails = [
        {
            id: 1,
            imageUrl: expert, // Add appropriate image URLs here
            title: 'Expert',
            description: 'This course is designed for professionals seeking to enhance their English skills for career advancement, business communication, and international collaboration'
        },
        {
            id: 2,
            imageUrl: impact,
            title: 'Impact',
            description: ' Unlock your potential and make a lasting impression with our specialized course for business professionals. Master the nuances of professional English, from formal writing to confident public speaking'
        },
        {
            id: 3,
            imageUrl: liveSession,
            title: 'Live Sessions',
            description: 'Immerse Yourself in Real-Time, Interactive Learning-Experience the Power of Our Engaging Live Sessions'
        }
    ];
    return (
        <div className="offer-section section">
            <div className="container">
                <h2 className="h2 section-title">Courses <span>We Offer</span></h2>
                <p>{sanitize('Tailored Programs for Every Level and Need')}</p>
                <div className="offer-card-container">
                    {OffercourseDetails.map((offer) => (
                        <div className="offer-card" key={offer.id}>
                            <div className="offer-card-image">
                                <img src={offer.imageUrl} alt="Course" />
                            </div>
                            <div className="offer-card-content">
                                <h4>{sanitize(offer.title)}</h4>
                                <p>{sanitize(offer.description)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OfferCourses