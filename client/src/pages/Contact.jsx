// Contact.jsx

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    // Simulate form submission (Replace this with actual EmailJS or API logic)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus({ 
        loading: false, 
        success: "Thank you! Your message has been sent successfully.", 
        error: null 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: null, 
        error: "Something went wrong. Please try again later." 
      });
    }
  };

  return (
    <div className="contact-page section">
      <div className="container">
        <h1 className="section-title fade-in-up">Get In Touch</h1>
        <p className="contact-subtitle fade-in-up">
          Have a question or want to work together? Feel free to drop me a message!
        </p>

        <div className="contact-content">
          {/* Contact Info Column */}
          <div className="contact-info fade-in-up">
            <h2>Let's Talk</h2>
            <p>
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question about my work or just want to say hi, 
              I'll try my best to get back to you!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <a href="mailto:navalanuj@gmail.com">navalanuj@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <a href="tel:+919823394889">+91 98233 94889</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts..."
                rows="5"
                required
              ></textarea>
            </div>

            {status.success && (
              <div className="status-message success">{status.success}</div>
            )}
            
            {status.error && (
              <div className="status-message error">{status.error}</div>
            )}

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={status.loading}
            >
              {status.loading ? (
                <>
                  <div className="btn-spinner"></div> Sending...
                </>
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;