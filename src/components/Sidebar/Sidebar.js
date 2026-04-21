import React, { useState } from 'react';
import './Sidebar.css';
import CourseCard from '../CourseCard/CourseCard';

const Sidebar = ({ majors, onSelectMajor, isMobileView }) => {
    const [expandedMajor, setExpandedMajor] = useState(null);

    const handleMajorClick = (major) => {
        if (expandedMajor === major) {
            setExpandedMajor(null);
        } else {
            setExpandedMajor(major);
            onSelectMajor(major);
        }
    };

    return (
        <div className="sidebar">
            {majors.map((major) => (
                <div key={major.id} className="major-item">
                    <div onClick={() => handleMajorClick(major)} className="major-title">
                        {major.title}
                    </div>
                    {isMobileView && (<hr />)}
                    {expandedMajor === major && (
                        <div className="major-description">
                            {major.description}
                            {isMobileView && (
                                <div className="course-cards">
                                    {major.courses.map((course) => (
                                        <CourseCard
                                            id={course.id}
                                            title={course.title}
                                            price={course.price}
                                            duration={course.duration}
                                            language={course.language}
                                            description={course.description}
                                            author={course.author}
                                            image={course.image}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
