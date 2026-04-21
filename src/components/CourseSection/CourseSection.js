import React from 'react'
import './CourseSection.css'
import MajorHeadingCourseCard from '../MajorHeadingCard/MajorHeadingCourseCard'
import majorheading_1 from '../../assets/images/major course heading/Major course header-1.jpg'
import majorheading_2 from '../../assets/images/major course heading/Major course header-2.jpg'
import majorheading_3 from '../../assets/images/major course heading/Major course header-3.jpg'

function CourseSection() {
    return (
        <div className='course-section'>
            <div className="container">
                <div className="major-course-banner-section">
                    <h2 className="major-course-heading">Major Courses</h2>
                </div>
                <div className="major-course-heading-card-container">
                    <MajorHeadingCourseCard
                        title="Foundations for Beginners"
                        price="$80"
                        duration="4 Months"
                        language="English"
                        description="Master the essentials of English pronunciation and everyday communication skills"
                        author="Lisa"
                        image= {majorheading_1}
                    />
                    <MajorHeadingCourseCard
                        title="Intermediate English Mastery"
                        price="$80"
                        duration="4 Months"
                        language="English"
                        description="Refine your accent and language skills for academic and professional success"
                        author="Lisa"
                        image= {majorheading_2}
                    />
                    <MajorHeadingCourseCard
                        title="Advanced English Proficiency"
                        price="$80"
                        duration="2 Months"
                        language="English"
                        description=" Elevate your English to native-like fluency in writing and speaking"
                        author="Lisa"
                        image= {majorheading_3}
                    />
                </div>
            </div>
        </div>
    )
}

export default CourseSection