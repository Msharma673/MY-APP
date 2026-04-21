import React from 'react'
import './CourseInnerPage.css'
import NavBar from '../../components/NavBar/NavBar'
import CourseInnerContent from '../../components/CourseInnerContent/CourseInnerContent'
import Footer from '../../components/Footer/Footer'
function CourseinnerPage() {
  return (
    <div className='course-inner-page-section'>
        <NavBar />
        <CourseInnerContent />
        <Footer />
    </div>
  )
}

export default CourseinnerPage