import React, { useEffect, useState } from 'react';
import './CourseExplore.css';
import CourseCard from '../CourseCard/CourseCard';
import { useNavigate } from 'react-router-dom';
import { majorsData } from '../MajorCourseListing/MajorCourseListing'; 

function CourseExplore() {
    const navigate = useNavigate();
    const [randomCourses, setRandomCourses] = useState([]);

    useEffect(() => {
        const allCourses = majorsData.flatMap(major => major.courses);
        const shuffledCourses = allCourses.sort(() => 0.5 - Math.random());
        setRandomCourses(shuffledCourses.slice(0, 4));
    }, []);

    const handleClick = () => {
        navigate('/courses');
    };

    return (
        <div className="course-explore-section">
            <div className="container">
                <div className="course-explore-heading">
                    <h3>Explore Courses</h3>
                    <h4 onClick={handleClick}>See all</h4>
                </div>
                <div className="course-explore-mobile-heading">
                    <h2 className="h2 section-title">Explore Courses</h2>
                </div>
                <div className="card-explore-course-card-container">
                    {randomCourses.map((course) => (
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
            </div>
        </div>
    );
}

export default CourseExplore;
