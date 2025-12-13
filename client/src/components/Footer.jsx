import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Let's Connect</h3>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <p className="footer-text">
              Have a project in mind? Let's work together!
            </p>
            <a href="/contact" className="footer-btn">Contact Me</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Your Name. Made with <FaHeart className="heart-icon" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;