import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Anuj Naval</span>
            </h1>
            <h2 className="hero-subtitle">
              Aspiring Data Scientist & Machine Learning Engineer
            </h2>
            <p className="hero-description">
              I transform complex data into actionable insights and intelligent
              solutions. Specializing in Predictive Modeling, Deep Learning, and
              Data Visualization.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn">
                View My Work <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h3>Clean Code</h3>
              <p>
                Writing maintainable, scalable, and efficient code following
                best practices
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaBriefcase />
              </div>
              <h3>Real Projects</h3>
              <p>Building real-world applications that solve actual problems</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaGraduationCap />
              </div>
              <h3>Continuous Learning</h3>
              <p>
                Always staying updated with the latest technologies and trends
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>I'm always open to discussing new projects and creative ideas</p>
            <Link to="/contact" className="btn">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
