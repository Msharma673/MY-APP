import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import QuickLinks from '../../components/QuickLinks/QuickLinks'
import Footer from '../../components/Footer/Footer'

const QuickLinksPage = () => {
  return (
    <div style={{display:'flex', flexDirection:'column'}} className='quicklinks-page'>
        <NavBar />
        <QuickLinks />
        <Footer />
      
    </div>
  )
}

export default QuickLinksPage
