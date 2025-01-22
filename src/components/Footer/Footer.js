import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaTelegram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section address">
          <h4>Address</h4>

          <p>
            Reg. Office: Plant: Plot No. 1, 2, 3, 4, 5, Block No. 23-A, Opp:
            Lakshmi Ford Service Centre Road,
          </p>
        </div>

        <div className="footer-section locations">
          <h4>contact</h4>
          <p>
            Phone: <a href="tel:+91 81878 96699">+91- 81878 96699</a>
          </p>
          <p>
            E-mail: <a href="gmail">genetheraptics@yahoo.in</a>
          </p>
        </div>
        <div className="footer-section locations">
          <h4>product groups</h4>
          <p>
           <a href="#">poultry</a>
          </p>
          <p>
           <a href="#">large animal</a>
          </p>
          <p>
           <a href="#">Aquaculture</a>
          </p>
        </div>

        <div className="footer-section contact-form">
          <h4>Get in Touch</h4>
          <form>
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Your message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{currentYear} © GENETHERAPTICS PHARMA PVT.LTD</p>{" "}
        {/* Display dynamic year */}
        <div className="footer-links">
          <a href="#support">Support</a>
          <a href="#contact">Contact Us</a>
          <a href="#disclaimer">Disclaimer</a>
          <a href="#more">Add more</a>
        </div>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
