import React from 'react'
import './CourseOutcome.css'
function CourseOutcome({ outcome }) {
    return (
        <div className='course-inner-outcome-section'>

            <div className="course-inner-outcome-content">
                <div className="course-inner-outcome-container">
                    <h2>Course Outcomes</h2>
                    <ul>
                        {outcome.map((out, index) => (
                            <li key={index}>{out}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CourseOutcome