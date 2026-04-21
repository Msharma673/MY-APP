import React from 'react'
import './CourseWork.css'

const CourseWork = ({ units }) => {
  return (
    <div className='coursework-section'>

        <div className="coursework-container">
        {units.map((unit, index) => (
                <div key={index} className="unit">
                    <h2>{unit.title}</h2>
                    {/* <ul>
                        {unit.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul> */}
                </div>
            ))}
        </div>

    </div>
  )
}

export default CourseWork