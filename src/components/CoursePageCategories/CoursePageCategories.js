import React from 'react'
import TabItem from '../TabItem/TabItem'

function CoursePageCategories({ activeTab, onTabChange }) {
    return (
        <div className="coursepagecategories">
            <div className="container">
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

export default CoursePageCategories