import React from 'react';
import { FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      period: "2018 - 2022",
      description: "Graduated with honors. Specialized in Web Development, Data Structures, and Software Engineering.",
      grade: "CGPA: 8.5/10"
    },
    {
      degree: "Higher Secondary Education",
      institution: "School Name",
      period: "2016 - 2018",
      description: "Focused on Mathematics, Physics, and Computer Science.",
      grade: "Percentage: 92%"
    }
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      link: "#"
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2023",
      link: "#"
    },
    {
      title: "Node.js Developer Certification",
      issuer: "LinkedIn Learning",
      date: "2022",
      link: "#"
    },
    {
      title: "MongoDB for Developers",
      issuer: "MongoDB University",
      date: "2022",
      link: "#"
    }
  ];

  const achievements = [
    "Winner of University Hackathon 2022",
    "Best Project Award in Final Year",
    "Published research paper on Web Technologies",
    "Active contributor to open source projects"
  ];

  return (
    <div className="education-page section">
      <div className="container">
        <h1 className="section-title fade-in-up">Education & Certifications</h1>

        <div className="education-section">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h2>Academic Background</h2>
          </div>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item fade-in-up">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <span className="timeline-period">{edu.period}</span>
                  <p>{edu.description}</p>
                  <span className="grade-badge">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <div className="section-header">
            <FaCertificate className="section-icon" />
            <h2>Certifications</h2>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card fade-in-up">
                <div className="cert-icon">
                  <FaCertificate />
                </div>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
                <a href={cert.link} className="cert-link">View Certificate</a>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <div className="section-header">
            <FaAward className="section-icon" />
            <h2>Achievements</h2>
          </div>
          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item fade-in-up">
                <div className="achievement-icon">
                  <FaAward />
                </div>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;