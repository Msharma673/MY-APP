import React from 'react'
import './BrowseCourse.css'
import TabContentBlock from '../TabContentBlock/TabContentBlock'
import Course1 from '../../assets/images/course-1.jpg'
import Course2 from '../../assets/images/course-2.jpg'
import Course3 from '../../assets/images/course-3.jpg'
import { IonIcon } from '@ionic/react'
import { arrowForwardOutline } from 'ionicons/icons'
function BrowseCourse() {
  return (
    <div className='browse-course section'>
      <div className="container">
        <p className="section-subtitle">Popular Courses</p>
        <h2 className="h2 section-title" style={{'marginBottom' : '30px'}}>Pick A Course To Get Started</h2>

        <div className="row">
          <div className="col-12">
            <div className="browse-card-container">
              <TabContentBlock
                title="English1"
                price="$25"
                image={Course1}
                timeline="4 weeks"
                difficulty="Begineer"
              />
              <TabContentBlock
                title="English3"
                price="$25"
                image={Course3}
                timeline="4 weeks"
                difficulty="Begineer"
              />
               <TabContentBlock
                title="English1"
                price="$25"
                image={Course1}
                timeline="4 weeks"
                difficulty="Begineer"
              />
              <TabContentBlock
                title="English3"
                price="$25"
                image={Course3}
                timeline="4 weeks"
                difficulty="Begineer"
              />
              <TabContentBlock
                title="English2"
                price="$25"
                image={Course2}
                timeline="4 weeks"
                difficulty="Begineer"
              />
            </div>
          </div>
        </div>
        <a href="#" className="btn browse-btn has-before">
            <span className="span">Browse more courses</span>

            <IonIcon icon= {arrowForwardOutline} aria-hidden="true"></IonIcon>
        </a>
      </div>
    </div>
  )
}

export default BrowseCourse