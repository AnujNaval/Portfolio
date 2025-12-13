// Experience.jsx

import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  // Sample Data - Replace with your actual experience
  const experiences = [
    {
      id: 1,
      role: "Software Engineering Intern", // Inferred Title
      company: "IT Sight",
      location: "Pune, India",
      period: "May 2025 - July 2025",
      description: [
        "Developed responsive React web pages and membership portal, enhancing accessibility and improving engagement by 25%.",
        "Collaborated with cross-functional teams to implement SEO content and franchise modules, boosting visibility and traffic.",
        "Optimized UI/UX workflows and backend API integrations, reducing page load time by 30% for seamless digital user experiences."
      ],
      // Inferred Tech Stack based on description
      techStack: ["React", "JavaScript", "REST API", "SEO", "HTML/CSS", "UI/UX"] 
    }
  ];

  return (
    <div className="experience-page section">
      <div className="container">
        <h1 className="section-title fade-in-up">Professional Experience</h1>
        
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item fade-in-up">
              <div className="experience-dot">
                <FaBriefcase />
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div className="role-company">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="meta-info">
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span className="period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="experience-list">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {exp.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;