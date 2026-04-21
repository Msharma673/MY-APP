import React from 'react'
import './HeroNew.css'



function HeroNew() {
    return (
        <div className="hero_section">
            <div className="left_hs">
                <h1 className="h1_hs">We provide support</h1>
                <div className="swiper_div_hs">
                    <div className="swiper swiper_hs">

                        <div className="swiper-wrapper">

                            <div className="swiper-slide">



                                <h1 className="h1_slide_title_hs">Personalized Growth</h1>

                            </div>
                            <div className="swiper-slide">

                                <h1 className="h1_slide_title_hs">Interactive Learning</h1>

                            </div>
                            <div className="swiper-slide">

                                <h1 className="h1_slide_title_hs">Comprehensive Resources</h1>

                            </div>
                            <div className="swiper-slide">

                                <h1 className="h1_slide_title_hs">Beyond Language</h1>

                            </div>
                            <div className="swiper-slide">

                                <h1 className="h1_slide_title_hs">Global Community</h1>

                            </div>

                            <div className="swiper-slide">

                                <h1 className="h1_slide_title_hs">Continuous Progress</h1>

                            </div>
                        </div>

                    </div>
                </div>
                <p className="ptag_hs">Elevate your English proficiency with our session trainers, interactive live sessions,
                    and
                    a supportive community. Unlock your potential and achieve fluency, a key to personal, professional, and
                    global
                    success. Start today by taking the demo classes and set out on a path of achievement and self-improvement!
                </p>
            </div>
            <div className="right_hs">

                <div className="div_slide_video_hs" id="video_div_id">


                    <video autoPlay muted loop className="slide_video_hs video-visible" id="slide_video1">
                        <source src="/video/personalized_growth_video.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                    </video>
                </div>

                <div className="info-banner">
                    <h6 className="h6_label_hs">Raising Tomorrow's Leaders</h6>
                    <div className="info_item_div">
                        <div className="info-item">
                            <span className="number">+9</span>
                            <span className="label">COURSE</span>
                        </div>
                        <hr className="divider" />
                        <div className="info-item">
                            <span className="number">+50</span>
                            <span className="label">EXPECT TRAINER</span>
                        </div>
                    </div>
                    <hr className="divider" />
                    <div className="info_item_div">
                        <div className="info-item">
                            <span className="number">+100</span>
                            <span className="label">LIVE LECTURE</span>
                        </div>
                        <hr className="divider" />
                        <div className="info-item">
                            <span className="number">+30</span>
                            <span className="label">RECORDED LECTURE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroNew