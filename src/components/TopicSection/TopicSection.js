import React, { useState } from 'react'
import './TopicSection.css'
import TabPane from '../TabPane/TabPane';
import TabContentBlock from '../TabContentBlock/TabContentBlock';
import Categories from '../Categories/Categories';
import Course1 from '../../assets/images/course-1.jpg'
import Course2 from '../../assets/images/course-2.jpg'
import Course3 from '../../assets/images/course-3.jpg'
const TopicSection = () => {
    const [activeTab, setActiveTab] = useState('design-tab');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <section className='section topic-section'>
            
            <div className="container">
            <Categories activeTab={activeTab} onTabChange={handleTabChange} />
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content" id="myTabContent">
                            <TabPane id="design-tab" label="Spoken English" active={activeTab === 'design-tab'}>
                                <div className="card-container">
                                    <TabContentBlock
                                        title="English1"
                                        price="$25"
                                        image={Course1}
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
                                    <TabContentBlock
                                        title="English3"
                                        price="$25"
                                        image={Course3}
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
                            </TabPane>

                            <TabPane id="marketing-tab" label="English Grammar" active={activeTab === 'marketing-tab'}>
                                <div className="card-container">
                                    <TabContentBlock
                                        title="English2"
                                        price="$25"
                                        image={Course1}
                                        timeline="4 weeks"
                                        difficulty="Begineer"
                                    />
                                    <TabContentBlock
                                        title="English4"
                                        price="$25"
                                        image={Course2}
                                        timeline="4 weeks"
                                        difficulty="Begineer"
                                    />
                                    <TabContentBlock
                                        title="English5"
                                        price="$25"
                                        image={Course3}
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
                                </div>
                            </TabPane>

                            <TabPane id="finance-tab" label="Advance English" active={activeTab === 'finance-tab'}>
                                <div className="card-container">
                                    <TabContentBlock
                                        title="English3"
                                        price="$25"
                                        image={Course2}
                                        timeline="4 weeks"
                                        difficulty="Begineer"
                                    />
                                    <TabContentBlock
                                        title="English6"
                                        price="$25"
                                        image={Course3}
                                        timeline="4 weeks"
                                        difficulty="Begineer"
                                    />
                                    <TabContentBlock
                                        title="English7"
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
                                </div>
                            </TabPane>

                            {/* Add more tab panes here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TopicSection