import React, { useState } from 'react';
import logo from '../../assets/images/genelogo.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('home');

  const handleActive = (link) => {
    setActive(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="container">
        {/* Logo with Animation */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="logo-animation"
          />
          <span className="brand-name">GENE THERAPEUTICS</span>
        </a>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${active === 'home' ? 'active-link' : ''}`}
                onClick={() => handleActive('home')}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${active === 'about' ? 'active-link' : ''}`}
                onClick={() => handleActive('about')}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#product-groups"
                className={`nav-link ${
                  active === 'product-groups' ? 'active-link' : ''
                }`}
                onClick={() => handleActive('product-groups')}
              >
                PRODUCT GROUPS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#key-conditions"
                className={`nav-link ${
                  active === 'key-conditions' ? 'active-link' : ''
                }`}
                onClick={() => handleActive('key-conditions')}
              >
                KEY CONDITIONS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#gallery"
                className={`nav-link ${active === 'gallery' ? 'active-link' : ''}`}
                onClick={() => handleActive('gallery')}
              >
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contactus"
                className={`nav-link ${
                  active === 'contactus' ? 'active-link' : ''
                }`}
                onClick={() => handleActive('contactus')}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
