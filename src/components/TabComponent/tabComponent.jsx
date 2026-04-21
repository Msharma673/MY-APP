import React, { useState } from 'react'; 
import './TabComponent.css';
import SuccessStoryComponent from '../SuccessStoryComponent/SuccessStoryComponent';
import BlogComponent from '../BlogComponent/BlogComponent';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('successStory');

  const renderContent = () => {
    switch (activeTab) {
      case 'successStory':
        return <SuccessStoryComponent />;
      case 'blog':
        return <BlogComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="tab-component">
      <div className="tabs">
        <button
          onClick={() => setActiveTab('successStory')}
          className={activeTab === 'successStory' ? 'active' : ''}
        >
          Success Stories
        </button>
        <button
          onClick={() => setActiveTab('blog')}
          className={activeTab === 'blog' ? 'active' : ''}
        >
          Blog
        </button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabComponent;
