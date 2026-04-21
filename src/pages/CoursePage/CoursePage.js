import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CoursePageBanner from '../../components/CoursePageBanner/CousePageBanner'
import CourseSection from '../../components/CourseSection/CourseSection'
import Footer from '../../components/Footer/Footer'
import MajorCourseListing from '../../components/MajorCourseListing/MajorCourseListing'


function CoursePage() {
  return (
    <div className="coursepage-container">
        <NavBar />
        <CoursePageBanner />
        <CourseSection />
        <MajorCourseListing />
        <Footer />
    </div>
  )
}

export default CoursePage