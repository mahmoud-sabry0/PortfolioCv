import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
      <a href="#" className="footer_logo" >MahmoudSabry</a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/mahmoud-sabry" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mahmoud-sabry0" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <FaGithub />
          </a>
        </div>
        <div className="footer_copyright">
          <small>
            &copy; <a href="#">MahmoudSabry</a>. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
