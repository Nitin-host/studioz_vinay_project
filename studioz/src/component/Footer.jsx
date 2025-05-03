import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Logo" />
          <p>
            Transforming ideas into digital reality through innovative solutions
            and cutting-edge technology.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/commercial'>Commercial</Link>
            </li>
            <li>
                <Link to='/residential'>Residential</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} SREE SIVA BALAJI. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
