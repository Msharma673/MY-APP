import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import './Hero.css'

function Hero() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        interest: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const sanitizedData = {
            name: DOMPurify.sanitize(formData.name),
            email: DOMPurify.sanitize(formData.email),
            date: DOMPurify.sanitize(formData.date),
            interest: DOMPurify.sanitize(formData.interest),
        };
        console.log('Sanitized Data:', sanitizedData);
        
    };

    const title = DOMPurify.sanitize('English Mastery for Global Success - <span class="highlight">Unlock</span> Your Potential with Our Seasoned Trainers and Supportive Community');
    const description = DOMPurify.sanitize('Elevate your English proficiency with our session trainers, interactive live sessions, and a supportive community. Unlock your potential and achieve fluency, a key to personal, professional, and global success. Start today by taking the demo classes and set out on a path of achievement and self-improvement!');
    
    return (
        <div className="hero-section section">
            <div className="container">
                <div className="hero-content">
                    <h1 className='h1 section-title' dangerouslySetInnerHTML={{ __html: title }}></h1>
                    <p>{description}</p>
                    <a href="#" className="know-more">Know More →</a>
                </div>
                <div className="hero-form">
                    <h2>Enroll For Demo!</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        <label htmlFor="date">Pick a Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} />
                        <label htmlFor="interest">Choose Interest</label>
                        <input type="text" name="interest" value={formData.interest} onChange={handleChange} />
                        <button type="submit">Enroll Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero