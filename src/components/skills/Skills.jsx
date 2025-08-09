import React from "react";
import CSS from "../../assets/css3.svg"
import Javascript from "../../assets/javascript.svg"
import ReactJs from "../../assets/React-icon.svg.png"
import Tailwind from "../../assets/tailwindcss.svg"
import NodeJs from "../../assets/nodejs.svg"
import  Figma from "../../assets/figma.svg"
import  ExpressJs from "../../assets/expressjs.svg"
import   Mongodb from "../../assets/mongodb.svg"
import "./Skills.css"

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      image: CSS,
      title: "CSS",
      disc: "User Interface",
    },
    {
      id: 2,
      image: Javascript,
      title: "Javascript",
      disc: "Interaction",
    },
    {
      id: 3,
      image: ReactJs,
      title: "ReactJs",
      disc: "Framework",
    },
    {
      id: 4,
      image: Tailwind,
      title: "TailwindCSS",
      disc: "User Interface",
    },
    {
      id: 5,
      image: NodeJs,
      title: "NodeJs",
      disc: "Web Server",
    },
    {
      id: 6,
      image: Figma,
      title: "Figma",
      disc: "Design tool",
    },
    {
      id: 7,
      image: ExpressJs,
      title: "ExpressJs",
      disc: "Node Framework",
    },
    {
      id: 8,
      image: Mongodb,
      title: "MongoDB",
      disc: "Database",
    },
  ];

  return (
    <>
      <section className="skills" id="skills">
        <div className="top_section">
          <h5>Experience I Have</h5>
          <h2>My Experience</h2>
        </div>

        <div className="container container_skills">
          {skillsData.map(({ id, image, title, disc }) => (
            <article key={id} className="card_skills">
              <div  className="icon">
                <img src={image} alt="" />
              </div>
              <div className="content">
                <h4>{title}</h4>
                <p>{disc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
