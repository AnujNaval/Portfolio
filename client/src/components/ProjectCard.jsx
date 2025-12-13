import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const handleCardClick = () => {
    window.open(project.link, '_blank');
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-link-btn"
              >
                <FaGithub />
              </a>
            )}
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-link-btn"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;