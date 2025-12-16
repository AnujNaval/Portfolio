import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Failed to load projects. Please try again later.');
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

  if (error) {
    return (
      <div className="projects-page section">
        <div className="container">
          <h1 className="section-title fade-in-up">My Projects</h1>
          <div className="error-message">
            <p>{error}</p>
            <button onClick={fetchProjects} className="btn">Retry</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page section">
      <div className="container">
        <h1 className="section-title fade-in-up">My Projects</h1>
        <p className="projects-subtitle fade-in-up">
          Here are some of my recent works involving Machine Learning and Deep Learning.
        </p>

        <div className="filter-buttons fade-in-up">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
            onClick={() => setFilter('python')}
          >
            Python
          </button>
          <button 
            className={`filter-btn ${filter === 'machine learning' ? 'active' : ''}`}
            onClick={() => setFilter('machine learning')}
          >
            Machine Learning
          </button>
          <button 
            className={`filter-btn ${filter === 'deep learning' ? 'active' : ''}`}
            onClick={() => setFilter('deep learning')}
          >
            Deep Learning
          </button>
          <button 
            className={`filter-btn ${filter === 'cryptography' ? 'active' : ''}`}
            onClick={() => setFilter('cryptography')}
          >
            Cryptography
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