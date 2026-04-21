import React, { useEffect, useState } from 'react';
import './MajorCourseListing.css';
import Sidebar from '../Sidebar/Sidebar';
import MainSection from '../MainSection/MainSection';
import major_1 from '../../assets/images/major-course/Main course-1.jpg';
import major_2 from '../../assets/images/major-course/Main course-2.jpg';
import major_3 from '../../assets/images/major-course/Main course-3.jpg';
import major_4 from '../../assets/images/major-course/Main course-4.jpg';
import major_5 from '../../assets/images/major-course/Main course-5.jpg';
import major_6 from '../../assets/images/major-course/Main course-6.jpg';
import mini_1 from '../../assets/images/mini-course/Mini course-1.jpg'
import mini_2 from '../../assets/images/mini-course/Mini course-2.jpg'
import mini_3 from '../../assets/images/mini-course/Mini course-3.jpg'
import mini_4 from '../../assets/images/mini-course/Mini course-4.jpg'
import mini_5 from '../../assets/images/mini-course/Mini course-5.jpg'
import mini_6 from '../../assets/images/mini-course/Mini course-6.jpg'

export const majorsData = [
    {
        id: 1,
        title: 'Foundations for Beginners',
        description: 'Each course is designed to boost confidence, improve fluency, and enhance overall English communication skills in various real-world contexts. Our comprehensive courses also cover grammar, vocabulary, and pronunciation, guiding learners from beginner to advanced levels',
        courses: [
            { id: 1, title: 'English Essentials: Building Confidence in Speaking and Listening', price: 'Beginner', duration: '2 months', language: 'English', description: 'Perfect for beginners level English, this course focuses on foundational pronunciation and everyday conversation skills', author: 'A1',image: major_1 },
            { id: 2, title: 'Accent Improvement: Developing Natural English Speech Patterns', price: 'Beginner', duration: '2 months', language: 'English', description: 'Learn to speak with clarity and confidence, reducing accent-related communication barriers', author: 'A2',image: major_2 },
        ],
    },
    {
        id: 2,
        title: 'Intermediate English Mastery',
        description: 'Each course is designed to boost confidence, improve fluency, and enhance overall English communication skills in various real-world contexts. Our comprehensive courses also cover grammar, vocabulary, and pronunciation, guiding learners from beginner to advanced levels.',
        courses: [
            { id: 3, title: 'Intermediate Communication: Expanding Vocabulary and Fluency', price: 'Intermediate', duration: '2 months', language: 'English', description: 'Build a richer vocabulary and improve spontaneous speech for more effective communication', author: 'B1',image: major_3 },
            { id: 4, title: 'Academic English: Preparing for University Success', price: 'Intermediate', duration: '2 months', language: 'English', description: 'Develop the language skills necessary for excelling in English-speaking academic environments', author: 'B2',image: major_4 },
        ],
    },
    {
        id: 3,
        title: 'Advanced English Proficiency',
        description: 'Each course is designed to boost confidence, improve fluency, and enhance overall English communication skills in various real-world contexts. Our comprehensive courses also cover grammar, vocabulary, and pronunciation, guiding learners from beginner to advanced levels.',
        courses: [
            { id: 5, title: 'Advanced English Expression: Mastering Nuance and Style', price: 'Advance', duration: '1 month', language: 'English', description: 'Refine your English to near-native proficiency, focusing on subtle language use and cultural context', author: 'C1',image: major_5 },
            { id: 6, title: 'Professional English Mastery: Achieving World-Class Communication', price: 'Advance', duration: '1 month', language: 'English', description: 'Polish your English to the highest level for success in international business and academic circles', author: 'C2',image: major_6 },
        ],
    },
    {
        id: 4,
        title: 'Mini Courses',
        description: 'Enhance your English skills with these focused, intensive modules. Each mini-course is designed to target specific areas of English communication, helping you stand out in your personal and professional life',
        courses: [
            { id: 7, title: 'Digital English: Essential Skills for Online Creators and Networkers', price: 'Misc.', duration: '1 month', language: 'English', description: 'Refine your English to near-native proficiency, focusing on subtle language use and cultural context', author: 'Mini Courses',image: mini_1 },
            { id: 8, title: 'Business English: Effective Communication for Career Advancement', price: 'Misc.', duration: '1 month', language: 'English', description: 'Polish your English to the highest level for success in international business and academic circles', author: 'Mini Courses',image: mini_2  },
            { id: 9, title: 'Pitching and Presenting: Captivating Language for Entrepreneurs', price: 'Misc.', duration: '1 month', language: 'English', description: 'Polish your English to the highest level for success in international business and academic circles', author: 'Mini Courses',image: mini_3  },
            { id: 10, title: 'Academic English: Excelling in University-Level Discourse', price: 'Misc.', duration: '1 month', language: 'English', description: 'Polish your English to the highest level for success in international business and academic circles', author: 'Mini Courses',image: mini_4  },
            { id: 11, title: 'Creative Writing: Crafting Compelling Narratives in English', price: 'Misc.', duration: '1 month', language: 'English', description: 'Polish your English to the highest level for success in international business and academic circles', author: 'Mini Courses',image: mini_5  },
            { id: 12, title: 'Content Creation: Engaging Your Audience with Powerful English', price: 'Misc.', duration: '1 month', language: 'English', description: 'Polish your English to the highest level for success in international business and academic circles', author: 'Mini Courses',image: mini_6  },
        ],
    },
];

function MajorCourseListing() {
    const [selectedMajor, setSelectedMajor] = useState(null);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize(); // Set the initial state

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Set the default selected major to the first one in the list
        if (majorsData && majorsData.length > 0) {
            setSelectedMajor(majorsData[0]);
        }
    }, []);

    return (
        <div className='major-course-listing-section'>
            <div className="major-course-listing-container">
                {isMobileView ? (
                    <Sidebar majors={majorsData} onSelectMajor={setSelectedMajor} isMobileView={isMobileView} />
                ) : (
                    <>
                        <Sidebar majors={majorsData} onSelectMajor={setSelectedMajor} isMobileView={isMobileView} />
                        <MainSection selectedMajor={selectedMajor} />
                    </>
                )}
            </div>
        </div>
    );
}

export default MajorCourseListing;
