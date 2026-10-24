import React from "react";
import {
  SiHtml5,
  SiReactrouter,
  SiRedux,
  SiReactquery,
  SiBootstrap,
  SiMui,
  SiAxios,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import CSS from "../../assets/css3.svg"
import Javascript from "../../assets/javascript.svg"
import ReactJs from "../../assets/React-icon.svg.png"
import Tailwind from "../../assets/tailwindcss.svg"
import  Figma from "../../assets/figma.svg"
import "./Skills.css"

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      icon: <SiHtml5 color="#E34F26" />,
      title: "HTML5",
      disc: "Structure",
    },
    {
      id: 2,
      image: CSS,
      title: "CSS",
      disc: "User Interface",
    },
    {
      id: 3,
      image: Javascript,
      title: "Javascript",
      disc: "Interaction",
    },
    {
      id: 4,
      image: ReactJs,
      title: "ReactJs",
      disc: "Framework",
    },
    {
      id: 5,
      icon: <SiReactrouter color="#CA4245" />,
      title: "React Router",
      disc: "Routing",
    },
    {
      id: 6,
      icon: <SiRedux color="#764ABC" />,
      title: "Redux Toolkit",
      disc: "State Management",
    },
    {
      id: 7,
      icon: <SiReactquery color="#FF4154" />,
      title: "React Query",
      disc: "Data Fetching",
    },
    {
      id: 8,
      icon: <SiBootstrap color="#7952B3" />,
      title: "Bootstrap",
      disc: "User Interface",
    },
    {
      id: 9,
      icon: <SiMui color="#007FFF" />,
      title: "Material UI",
      disc: "UI Library",
    },
    {
      id: 10,
      image: Tailwind,
      title: "TailwindCSS",
      disc: "User Interface",
    },
    {
      id: 11,
      icon: <SiAxios color="#8B5CF6" />,
      title: "Axios",
      disc: "REST APIs",
    },
    {
      id: 12,
      icon: <SiJest color="#C21325" />,
      title: "Jest",
      disc: "Testing",
    },
    {
      id: 13,
      icon: <SiTestinglibrary color="#E33332" />,
      title: "Testing Library",
      disc: "Testing",
    },
    {
      id: 14,
      icon: <SiGit color="#F05032" />,
      title: "Git",
      disc: "Version Control",
    },
    {
      id: 15,
      icon: <SiGithub color="#fff" />,
      title: "GitHub",
      disc: "Code Hosting",
    },
    {
      id: 16,
      icon: <SiVercel color="#fff" />,
      title: "Vercel",
      disc: "Deployment",
    },
    {
      id: 17,
      image: Figma,
      title: "Figma",
      disc: "Design tool",
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
          {skillsData.map(({ id, image, icon, title, disc }) => (
            <article key={id} className="card_skills">
              <div  className="icon">
                {icon || <img src={image} alt={title} />}
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
