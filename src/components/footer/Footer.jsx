import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../../data";
import "./footer.css";

const permalinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">MahmoudSabry</a>
      <ul className="permalinks">
        {permalinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <div className="footer_socials">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; {new Date().getFullYear()} Mahmoud Sabry. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
