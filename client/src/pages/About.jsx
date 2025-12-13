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
              {/* Remember to update these hrefs with your actual links */}
              <a href="https://github.com/AnujNaval" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/anujnaval13" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/AnujNaval18683" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/anujnaval_13" target="_blank" rel="noopener noreferrer" className="social-btn">
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
                I am a Data Science and Machine Learning enthusiast with a passion for uncovering 
                hidden patterns in data to solve real-world problems. My primary focus lies in building 
                predictive models, deep learning architectures, and intelligent systems that drive decision-making.
              </p>
              <p className="about-text">
                Uniquely, I also possess a strong background in Full Stack Web Development (MERN Stack). 
                This combination allows me to not only design complex algorithms but also deploy them 
                into scalable, user-friendly web applications—bridging the gap between raw data and 
                end-user experience.
              </p>
              <p className="about-text">
                When I'm not training models or wrangling datasets, you can find me exploring the 
                latest research papers in AI, contributing to open-source data projects, or automating 
                my daily tasks with Python scripts.
              </p>
            </div>

            <div className="skills-section">
              <h2 className="about-subtitle">Skills & Technologies</h2>
              <div className="skills-grid">
                
                {/* Primary Category: DS & ML */}
                <div className="skill-category">
                  <h3>Data Science & ML</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">TensorFlow</span>
                    <span className="skill-tag">PyTorch</span>
                    <span className="skill-tag">Scikit-learn</span>
                    <span className="skill-tag">Pandas/NumPy</span>
                    <span className="skill-tag">OpenCV</span>
                  </div>
                </div>

                {/* Secondary Category: Web Dev (MERN) */}
                <div className="skill-category">
                  <h3>Web Development</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">REST APIs</span>
                  </div>
                </div>

                {/* Tools Category */}
                <div className="skill-category">
                  <h3>Tools & Cloud</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Git/GitHub</span>
                    <span className="skill-tag">Jupyter</span>
                    <span className="skill-tag">Google Colab</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">VS Code</span>
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