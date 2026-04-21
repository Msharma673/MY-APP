import React from 'react';
import Card from '../Card/Card';
import Blog1 from './BlogAsset/Blog1.webp';
import Blog2 from './BlogAsset/Blog2.webp';
import Blog3 from './BlogAsset/Blog3.webp';
import Blog4 from './BlogAsset/Blog4.webp';
import Blog5 from './BlogAsset/Blog5.webp';

const BlogComponent = () => {
  const blogPosts = [
    {
      image: Blog1,
      title: 'Blog Post 1',
      description: 'This is a short description of Blog Post 1.'
    },
    {
      image: Blog2,
      title: 'Blog Post 2',
      description: 'This is a short description of Blog Post 2.'
    },
    {
      image: Blog3,
      title: 'Blog Post 3',
      description: 'This is a short description of Blog Post 3.'
    },
    {
      image: Blog4,
      title: 'Blog Post 4',
      description: 'This is a short description of Blog Post 4.'
    },
    {
        image: Blog5,
        title: 'Blog Post 5',
        description: 'This is a short description of Blog Post 5.'
    }
  ];

  return (
    <div className="cards-container">
      {blogPosts.map((post, index) => (
        <Card key={index} image={post.image} title={post.title} description={post.description} />
      ))}
    </div>
  );
};

export default BlogComponent;
