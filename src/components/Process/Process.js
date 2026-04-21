import React from 'react'
import DOMPurify from 'dompurify';
import LazyLoad from 'react-lazyload';
import './Process.css'


function Process() {

    const sanitize = (html) => {
        return DOMPurify.sanitize(html);
    };

    const processItems = [
        { id: 1, title: 'Take a Test', description: 'Begin your journey with a comprehensive assessment to identify your current English level and areas for improvement', image: "https://accentaura.com/asset/Process-2.png" },
        { id: 2, title: 'Evaluation with a Personal Trainer', description: ' Receive personalized guidance from a dedicated trainer who will create a customized learning plan tailored to your goals.', image: "https://accentaura.com/asset/Process-4.png" },
        { id: 3, title: 'Demo Classes with Trainer', description: 'Experience our interactive teaching methodology with a complimentary demo class, ensuring you are comfortable and confident before committing', image: "https://accentaura.com/asset/Process-5.png" },
        { id: 4, title: ' Become a Part of the Community', description: ' Join a vibrant network of learners where you are not just a student, but a valued member. Share experiences, practice your English, and feel the warmth of a supportive environment', image: "https://accentaura.com/asset/Process-1.png" },
        { id: 5, title: ' Continuous Progress Tracking', description: 'Monitor your progress with regular assessments and feedback, ensuring you stay on track and achieve tangible results', image: "https://accentaura.com/asset/Process-3.png" }
    ];

    return (
        <div className="process-section section">
            <div className="container">
                <h2 className="h2 section-title">
                    {sanitize('Our Process')}
                </h2>
                <div className="process-timeline">
                    {processItems.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <div className="process-content">
                                <div className="process-image">
                                    <LazyLoad className='lazy-load' height={100} offset={100}>
                                        <img src={item.image} alt={item.title} />
                                    </LazyLoad>
                                </div>
                                <div className="process-image-text">
                                    <p style={{ fontWeight: 'bold' }}>{sanitize(item.title)}</p>
                                    <p>{sanitize(item.description)}</p>
                                </div>
                            </div>
                            {index < processItems.length - 1 && <div className="process-linker"></div>}
                        </React.Fragment>
                    ))}
                </div>




                {/* mobile-container */}


                <div className="process-content-parent">
                    <div className="process-timeline-mobile">
                        {processItems.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <div className="process-content">
                                    <div className="process-image">
                                        <LazyLoad className='lazy-load' height={100} offset={100}>
                                            <img  src={item.image} alt={item.title} />
                                        </LazyLoad>
                                    </div>
                                </div>
                                {index < processItems.length - 1 && <div className="process-linker"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="process-content-mobile-container">
                        {processItems.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <p style={{ fontWeight: 'bold', color: "black" }}>{sanitize(item.title)}</p>
                                {index < processItems.length - 1 && <div className="process-linker-mobile"></div>}
                            </React.Fragment>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Process