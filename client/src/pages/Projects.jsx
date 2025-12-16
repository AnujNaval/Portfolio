import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// 1. Hardcoded data definition
const projectsData = [
  {
    title: 'Income Prediction Using Decision Trees & Random Forest',
    description: 'Implemented decision tree classifier from scratch using mutual information and entropy-based splitting criteria. Developed post-pruning algorithm with ensemble methods reducing tree complexity by 98%. Built Random Forest with grid search achieving 85.45% accuracy.',
    image: '/images/decision_tree.png',
    link: 'https://github.com/AnujNaval/Income-Prediction-Using-Decision-Trees-and-Random-Forest-Ensemble',
    github: 'https://github.com/AnujNaval/Income-Prediction-Using-Decision-Trees-and-Random-Forest-Ensemble',
    technologies: ['Python', 'Machine Learning', 'Random Forest', 'Decision Trees'],
    featured: true
  },
  {
    title: 'Traffic Sign Classification using Neural Networks',
    description: 'Engineered deep learning neural networks from scratch with backpropagation and cross-entropy loss. Implemented adaptive learning rate scheduling with ReLU activation. Conducted comparative analysis using grid search across multi-layer architectures.',
    image: '/images/neural_network.png',
    link: 'https://github.com/AnujNaval/Traffic-Sign-Classification-Using-Deep-Neural-Networks',
    github: 'https://github.com/AnujNaval/Traffic-Sign-Classification-Using-Deep-Neural-Networks',
    technologies: ['Python', 'Deep Learning', 'Neural Networks', 'Computer Vision'],
    featured: true
  },
  {
    title: 'Secure Messaging System with AES Encryption and Database Integration',
    description: 'Architected modular C++ cryptographic messaging system using OpenSSL EVP API for AES-256-CBC encryption/decryption. Engineered robust multi-threaded TCP server with SQL database integration for secure message persistence and retrieval. Implemented comprehensive cryptographic security protocols including random IV generation and replay attack prevention mechanisms.',
    image: '/images/secure_messaging.png',
    link: 'https://github.com/AnujNaval/Secure-Messaging-System-with-AES-Encryption-and-Database-Integration',
    github: 'https://github.com/AnujNaval/Secure-Messaging-System-with-AES-Encryption-and-Database-Integration',
    technologies: ['C++', 'OpenSSL', 'SQL', 'Socket Programming', 'Cryptography', 'Multi-threading'],
    featured: true
  }
];

const Projects = () => {
  // 2. State is only needed for the filter now, not the data itself
  const [filter, setFilter] = useState('all');

  // 3. Filter logic applied directly to the hardcoded array
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

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
          {filteredProjects.map((project, index) => (
            // Changed key to project.title (or index) since _id doesn't exist in the local array
            <ProjectCard key={project.title || index} project={project} />
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