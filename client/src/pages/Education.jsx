import React from "react";
import { FaGraduationCap, FaCertificate, FaAward } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  const education = [
    {
      degree: "B.Tech + M.Tech in Computer Science and Engineering",
      institution: "Indian Institute of Technology Delhi, New Delhi",
      period: "2021 - 2026",
      description:
        "Specialized in Machine Learning, Computer Vision, and Data Science. Coursework includes Deep Learning, Digital Image Processing, and Advanced Algorithms alongside Full Stack Development.",
      grade: "CGPA: 7.5/10",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Spring Dales Jr. College, Chhatrapati Sambhajinagar",
      period: "2019 - 2021", 
      description: "Stream: Science (Physics, Chemistry, Mathematics). Secured district rank in Mathematics.",
      grade: "Percentage: 93.17%" 
    },
    {
      degree: "Secondary School Certificate",
      institution: "Tender Care Home School, Chhatrapati Sambhajinagar",
      period: "2009 - 2019",
      description: "Completed foundation in Science and Mathematics with distinction.",
      grade: "Percentage: 95.60%"
    },
  ];

  const certifications = [
    {
      title: "Tools for Data Science",
      issuer: "IBM",
      date: "2025",
      link: "https://coursera.org/share/9a44f65b4f00537beadc59b2fa08c74f",
    },
    {
      title: "What is Data Science?",
      issuer: "IBM",
      date: "2025",
      link: "https://coursera.org/share/0f965cd17b9f837db480f1f8e729e14a",
    },
  ];

  const achievements = [
    "Meesho DICE Challenge 2.0 - Round 2",
    "JEE Advanced: AIR - 18(PwD)",
    "JEE Mains: AIR - 22(PwD)"
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
                  {/* <span className="grade-badge">{edu.grade}</span> */}
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
                <a href={cert.link} className="cert-link">
                  View Certificate
                </a>
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
