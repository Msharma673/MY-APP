import React, { useState } from 'react';
import './HomePage.css'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import ContactUs from '../../components/Contact/ContactForm'
import Process from '../../components/Process/Process'
import TeachWithUs from '../../components/TeachWithUS/TeachWithUs'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import OfferCourses from '../../components/OfferCourses/OfferCourses'
import CourseExplore from '../../components/CourseExplore/CourseExplore'
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import EnrollmentForm from '../../components/EnrollmentForm/EnrolmentForm'
import HeroNew from '../../components/HeroNew/HeroNew';
import HeroSection from '../../components/Test/HeroSection';
import ChooseUsSection from '../../components/Test/ChooseUsSection';



function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);
  return (
    <div className="homepage-container">
      <NavBar />
      {/* <HeroNew /> */}
      {/* <Hero /> */}
      <HeroSection />
      <Process />
      <OfferCourses />
      <CourseExplore />
      <WhyChooseUs />
      <ChooseUsSection />
      <ContactUs />
      <TeachWithUs />
      <Footer />
      <FloatingButton onClick={handleOpen} />
      <EnrollmentForm open={dialogOpen} onClose={handleClose} />
    </div>
  )
}

export default HomePage