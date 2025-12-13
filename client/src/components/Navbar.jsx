import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-text">Portfolio</span>
          </Link>

          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
              About
            </Link>
            <Link to="/education" className={`nav-link ${isActive('/education')}`} onClick={closeMenu}>
              Education
            </Link>
            <Link to="/projects" className={`nav-link ${isActive('/projects')}`} onClick={closeMenu}>
              Projects
            </Link>
            <Link to="/blogs" className={`nav-link ${isActive('/blogs')}`} onClick={closeMenu}>
              Blogs
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>
              Contact
            </Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;