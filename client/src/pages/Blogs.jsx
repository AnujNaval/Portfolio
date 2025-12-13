// Blogs.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaClock, FaTag } from 'react-icons/fa';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      // 🔒 API will be added later
      // const response = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`);
      // setBlogs(response.data);

      // 🚧 No blogs for now
      setTimeout(() => {
        setBlogs([]);
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs([]);
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
          Thoughts, tutorials, and insights about Machine Learning & AI
        </p>

        {/* 🚧 Coming Soon Message */}
        {blogs.length === 0 && (
          <div className="no-blogs fade-in-up">
            <h2>🚧 Blogs under construction 🚧</h2>
            <p>
              I’m busy turning coffee ☕ into blog posts.<br />
              Check back soon — some wisdom is loading...
            </p>
          </div>
        )}

        {/* 📝 Blog Grid (will render automatically when blogs exist) */}
        {blogs.length > 0 && (
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
                      <span key={index} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="read-more-btn">Read More</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;