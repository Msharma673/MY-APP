import React from 'react'
import './CourseInnerAbout.css'
const CourseInnerAbout = ({ description, whyChoose }) => {
    return (
        <div className='course-inner-about-section'>

            <div className="course-inner-about-content">
                <div className="course-inner-about-course-container">
                    <h2>About Course</h2>
                    <p>{description}</p>
                </div>
                <div className="course-inner-why-course-container">
                    <h2>Why this Course?</h2>
                    <p>{whyChoose}</p>
                </div>
            </div>

        </div>
    )
}

export default CourseInnerAbout