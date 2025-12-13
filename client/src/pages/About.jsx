import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page section">
      <div className="container">
        <h1 className="section-title fade-in-up">About Me</h1>
        
        <div className="about-content">
          <div className="about-profile fade-in-up">
            <div className="profile-image-wrapper">
              <img 
                src="/images/profile.jpg" 
                alt="Profile" 
                className="profile-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300?text=Your+Photo';
                }}
              />
            </div>
            
            <div className="social-links-about">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaInstagram />
              </a>
            </div>

            <a href="/resume.pdf" download className="btn download-btn">
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="about-details fade-in-up">
            <div className="about-box">
              <h2 className="about-subtitle">Hello There! 👋</h2>
              <p className="about-text">
                I'm a passionate Full Stack Developer with a love for creating beautiful, 
                functional, and user-friendly websites and applications. With expertise in 
                the MERN stack (MongoDB, Express.js, React, Node.js), I bring ideas to life 
                through clean code and innovative solutions.
              </p>
              <p className="about-text">
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a career where I get to solve complex problems and 
                build amazing digital experiences every day.
              </p>
              <p className="about-text">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, writing technical blogs, or enjoying a good cup of coffee 
                while brainstorming my next project idea.
              </p>
            </div>

            <div className="skills-section">
              <h2 className="about-subtitle">Skills & Technologies</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">Tailwind</span>
                    <span className="skill-tag">Bootstrap</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Backend</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">REST APIs</span>
                    <span className="skill-tag">MySQL</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Tools & Others</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">VS Code</span>
                    <span className="skill-tag">Postman</span>
                    <span className="skill-tag">Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;