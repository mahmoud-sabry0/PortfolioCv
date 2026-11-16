import { skills } from "../../data";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>Technologies I Use</h5>
        <h2>My Skills</h2>
      </div>

      <div className="container container_skills">
        {skills.map(({ title, disc, Icon, color }) => (
          <article key={title} className="card_skills">
            <div className="icon">
              <Icon color={color} aria-hidden="true" />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p>{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
