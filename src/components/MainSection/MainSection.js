import React, { useState, useEffect } from 'react';
import './MainSection.css';
import CourseCard from '../CourseCard/CourseCard';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const MainSection = ({ selectedMajor }) => {
    const [showAll, setShowAll] = useState(false);

    const handleSeeMoreClick = () => {
        setShowAll(true);
    };

    useEffect(() => {
        setShowAll(false); 
    }, [selectedMajor]);

    const renderCourses = () => {
        if (!selectedMajor) return <p>Please select a major course from the sidebar</p>;

        const coursesToShow = showAll ? selectedMajor.courses : selectedMajor.courses.slice(0, 6);

        return (
            <>
                <motion.div
                    className="course-cards"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {coursesToShow.map((course) => (
                        <motion.div key={course.id} className="course-card-item" variants={itemVariants}>
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
                        </motion.div>
                    ))}
                </motion.div>
                {!showAll && selectedMajor.courses.length > 6 && (
                    <button className="see-more-btn" onClick={handleSeeMoreClick}>
                        See More
                    </button>
                )}
            </>
        );
    };

    return <div className="main-section">{renderCourses()}</div>;
};

export default MainSection;
