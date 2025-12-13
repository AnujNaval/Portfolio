import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "", // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "" });

    try {
      // 1. Send Email via EmailJS (Frontend - No blocking!)
      // REPLACE with your actual IDs from Step 1
      const serviceId = "service_uk0ldj9";
      const templateId = "template_nxtvsg8";
      const publicKey = "uLrIZVuZh25fM7wqo";

      // Create parameters object matching your EmailJS template variables
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // 2. Save to Database (Backend)
      // We don't wait for this to finish to show success, but we trigger it.
      axios
        .post(`${process.env.REACT_APP_API_URL}/contact`, formData)
        .catch((err) => console.error("DB Save failed (non-fatal):", err));

      // 3. Show Success
      setStatus({
        loading: false,
        message: "Message sent successfully!",
        type: "success",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setStatus({ loading: false, message: "", type: "" });
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        loading: false,
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="contact-page section">
      <div className="container">
        <h1 className="section-title fade-in-up">Get In Touch</h1>
        <p className="contact-subtitle fade-in-up">
          Have a question or want to work together? I'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <h2>Let's Talk</h2>
            <p>
              Feel free to reach out if you have any questions, project ideas,
              or just want to say hello. I'm always open to discussing new
              projects and creative ideas.
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

          <form onSubmit={handleSubmit} className="contact-form fade-in-up">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
                placeholder="Tell me more about your project or inquiry..."
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn submit-btn"
              disabled={status.loading}
            >
              {status.loading ? (
                <>
                  <div className="btn-spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
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
