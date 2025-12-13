//Blogs.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaClock, FaTag } from 'react-icons/fa';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample blogs (will be replaced by API data)
  const sampleBlogs = [
    {
      _id: '1',
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
      image: 'https://via.placeholder.com/600x400?text=React+Hooks',
      tags: ['React', 'JavaScript', 'Web Development'],
      createdAt: '2024-01-15',
      author: 'Your Name'
    },
    {
      _id: '2',
      title: 'Building REST APIs with Node.js and Express',
      excerpt: 'A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.',
      image: 'https://via.placeholder.com/600x400?text=Node.js+API',
      tags: ['Node.js', 'Express', 'Backend'],
      createdAt: '2024-01-10',
      author: 'Your Name'
    },
    {
      _id: '3',
      title: 'MongoDB Best Practices',
      excerpt: 'Essential tips and best practices for designing and optimizing MongoDB databases.',
      image: 'https://via.placeholder.com/600x400?text=MongoDB',
      tags: ['MongoDB', 'Database', 'NoSQL'],
      createdAt: '2024-01-05',
      author: 'Your Name'
    },
    {
      _id: '4',
      title: 'Modern CSS Techniques',
      excerpt: 'Explore modern CSS features like Grid, Flexbox, and CSS Variables to create stunning layouts.',
      image: 'https://via.placeholder.com/600x400?text=CSS',
      tags: ['CSS', 'Web Design', 'Frontend'],
      createdAt: '2023-12-28',
      author: 'Your Name'
    },
    {
      _id: '5',
      title: 'Understanding Async/Await in JavaScript',
      excerpt: 'Master asynchronous programming in JavaScript with async/await syntax.',
      image: 'https://via.placeholder.com/600x400?text=JavaScript',
      tags: ['JavaScript', 'Async', 'Programming'],
      createdAt: '2023-12-20',
      author: 'Your Name'
    },
    {
      _id: '6',
      title: 'Deploying MERN Applications',
      excerpt: 'Step-by-step guide to deploying your MERN stack applications to production.',
      image: 'https://via.placeholder.com/600x400?text=Deployment',
      tags: ['MERN', 'DevOps', 'Deployment'],
      createdAt: '2023-12-15',
      author: 'Your Name'
    }
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      // Uncomment this when your API is ready
      // const response = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`);
      // setBlogs(response.data);
      
      // Using sample data for now
      setTimeout(() => {
        setBlogs(sampleBlogs);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs(sampleBlogs);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="blogs-page section">
      <div className="container">
        <h1 className="section-title fade-in-up">Blog Posts</h1>
        <p className="blogs-subtitle fade-in-up">
          Thoughts, tutorials, and insights about web development
        </p>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <article key={blog._id} className="blog-card fade-in-up">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <FaClock /> {formatDate(blog.createdAt)}
                  </span>
                </div>
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-tags">
                  <FaTag className="tag-icon" />
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="no-blogs">
            <p>No blog posts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;