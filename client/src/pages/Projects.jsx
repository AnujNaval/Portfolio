import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Sample projects (will be replaced by API data)
  const sampleProjects = [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart, payment integration, and admin panel',
      image: 'https://via.placeholder.com/400x300?text=E-Commerce',
      link: 'https://example.com',
      github: 'https://github.com/yourusername/project1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      _id: '2',
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with interactive charts',
      image: 'https://via.placeholder.com/400x300?text=Dashboard',
      link: 'https://example.com',
      github: 'https://github.com/yourusername/project2',
      technologies: ['React', 'D3.js', 'Express', 'Socket.io']
    },
    {
      _id: '3',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: 'https://via.placeholder.com/400x300?text=Task+Manager',
      link: 'https://example.com',
      github: 'https://github.com/yourusername/project3',
      technologies: ['React', 'Firebase', 'Material-UI']
    },
    {
      _id: '4',
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with 7-day forecast and location-based updates',
      image: 'https://via.placeholder.com/400x300?text=Weather+App',
      link: 'https://example.com',
      github: 'https://github.com/yourusername/project4',
      technologies: ['React', 'OpenWeather API', 'CSS3']
    },
    {
      _id: '5',
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support and comment system',
      image: 'https://via.placeholder.com/400x300?text=Blog',
      link: 'https://example.com',
      github: 'https://github.com/yourusername/project5',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT']
    },
    {
      _id: '6',
      title: 'Portfolio Generator',
      description: 'Automated portfolio generator with customizable templates',
      image: 'https://via.placeholder.com/400x300?text=Portfolio+Gen',
      link: 'https://example.com',
      github: 'https://github.com/yourusername/project6',
      technologies: ['React', 'Node.js', 'PDF Generation']
    }
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Uncomment this when your API is ready
      // const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
      // setProjects(response.data);
      
      // Using sample data for now
      setTimeout(() => {
        setProjects(sampleProjects);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(sampleProjects);
      setLoading(false);
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="projects-page section">
      <div className="container">
        <h1 className="section-title fade-in-up">My Projects</h1>
        <p className="projects-subtitle fade-in-up">
          Here are some of my recent works. Click on any project to view it live!
        </p>

        <div className="filter-buttons fade-in-up">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            React
          </button>
          <button 
            className={`filter-btn ${filter === 'node' ? 'active' : ''}`}
            onClick={() => setFilter('node')}
          >
            Node.js
          </button>
          <button 
            className={`filter-btn ${filter === 'mongodb' ? 'active' : ''}`}
            onClick={() => setFilter('mongodb')}
          >
            MongoDB
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;