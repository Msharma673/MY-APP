import React from 'react'
import './Categories.css'
import TabItem from '../TabItem/TabItem'

function Categories({ activeTab, onTabChange }) {
    return (
        <div className="category-section">
            <div className="container">
                <p className="section-subtitle">Categories</p>

                <h2 className="h2 section-title">
                    Online <span className="span">Courses</span> For Enhanced Learning.
                </h2>

                <p className="section-text">
                    A wide variety of courses from the industry experts
                </p>

                <ul className="tab-item">
                    <TabItem id="design-tab" label="Spoken English" active={activeTab === 'design-tab'}
                        onTabChange={onTabChange} />
                    <TabItem id="marketing-tab" label="English Grammar" active={activeTab === 'marketing-tab'}
                        onTabChange={onTabChange} />
                    <TabItem id="finance-tab" label="Advance English" active={activeTab === 'finance-tab'}
                        onTabChange={onTabChange} />
                </ul>
            </div>
        </div>
    )
}

export default Categories