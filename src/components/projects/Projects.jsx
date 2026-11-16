import { projects } from "../../data";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container projects_container">
        {projects.map(({ image, title, disc, tech, github, demo }) => (
          <article key={title} className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={image} alt={`${title} screenshot`} loading="lazy" decoding="async" />
            </div>
            <h3>{title}</h3>
            <p className="text-light">{disc}</p>
            <div className="portfolio_item_tech">
              {tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="portfolio_item_btn">
              <a target="_blank" rel="noopener noreferrer" href={github} className="btn" aria-label={`${title} source code on GitHub`}>
                GitHub
              </a>
              <a target="_blank" rel="noopener noreferrer" href={demo} className="btn btn-primary" aria-label={`${title} live demo`}>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
