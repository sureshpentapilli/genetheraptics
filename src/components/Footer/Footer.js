import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaTelegram } from "react-icons/fa";
import footervideo from "../../assets/videos/footer-bg.mp4";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      {/* Video background */}
      <div className="footer-video-container">
        <video className="footer-video" autoPlay loop muted>
          <source src={footervideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="footer-overlay"></div> {/* Gradient overlay */}
      </div>

      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section address">
            <h4 className="headings-color">Address</h4>
            <p>
              Reg. Office: Plant: Plot No. 1, 2, 3, 4, 5, Block No. 23-A, Opp:
              Lakshmi Ford Service Centre Road,Guntur-522001
            </p>
          </div>
          <div className="footer-section locations">
            <h4 className="headings-color">Contact</h4>
            <p>
              Phone: <a href="tel:+91 81878 96699">+91- 81878 96699</a>
            </p>
            <p>
              E-mail: <a href="mailto:genetheraptics@yahoo.in">genetheraptics@yahoo.in</a>
            </p>
          </div>
          <div className="footer-section locations">
            <h4 className="headings-color">Product Groups</h4>
            <p>
              <a href="#">Poultry</a>
            </p>
            <p>
              <a href="#">Large Animal</a>
            </p>
            <p>
              <a href="#">Aquaculture</a>
            </p>
          </div>
          <div className="footer-section contact-form">
            <h4 className="headings-color">Get in Touch</h4>
            <form>
              <input type="email" placeholder="Your email" required />
              <textarea placeholder="Your message" required></textarea>
              <button
                    href="#learn-more-1"
                    className="btn btn-primary animate__animated animate__fadeIn"
                  >
                    send
                  </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom container-fluid">
          <p>{currentYear} © GENETHERAPTICS PHARMA PVT.LTD</p>
          <div className="footer-links">
            <a href="#support">Support</a>
            <a href="#contact">Contact Us</a>
            <a href="#disclaimer">Disclaimer</a>
            <a href="#more">Add more</a>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
