import React from 'react';
import Card from '../Card/Card';
import Success1 from './Assests/Success1.jpg'
import Success2 from './Assests/Success2.jpg'
import Success3 from './Assests/Sucess3.jpg'
import Success4 from './Assests/Success4.jpg'
import Success5 from './Assests/Success5.jpg'

const SuccessStoryComponent = () => {
  const successStories = [
    {
      image: Success1,
      title: 'Success Story 1',
      description: 'This is a short description of Success Story 1.'
    },
    {
      image: Success2,
      title: 'Success Story 2',
      description: 'This is a short description of Success Story 2.'
    },
    {
      image: Success3,
      title: 'Success Story 3',
      description: 'This is a short description of Success Story 3.'
    },
    {
      image: Success4,
      title: 'Success Story 4',
      description: 'This is a short description of Success Story 4.'
    },
    {
      image: Success5,
      title: 'Success Story 5',
      description: 'This is a short description of Success Story 5.'
    },
    {
      image: Success2,
      title: 'Success Story 2',
      description: 'This is a short description of Success Story 2.'
    }
  ];

  return (
    <div className="cards-container">
      {successStories.map((story, index) => (
        <Card key={index} image={story.image} title={story.title} description={story.description} />
      ))}
    </div>
  );
};

export default SuccessStoryComponent;
