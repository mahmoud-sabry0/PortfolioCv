import React from "react";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoLocationOutline, IoLanguageOutline } from "react-icons/io5";
import { BiCodeAlt } from "react-icons/bi";
import "./about.css";
import img from "../../assets/1bdc1732-4105-4846-b8f4-65591b9e9057.jpg";
const About = () => {
  const infoData = [
    {
      id: 1,
      icon: <IoLocationOutline />,
      title: "Location",
      info: "Cairo, Egypt",
    },
    {
      id: 2,
      icon: <FaGraduationCap />,
      title: "Education",
      info: "Information Systems, Ain Shams University (2021 – 2025)",
    },
    {
      id: 3,
      icon: <BiCodeAlt />,
      title: "Main Stack",
      info: "React.js, JavaScript (ES6+), HTML5, CSS3",
    },
    {
      id: 4,
      icon: <IoLanguageOutline />,
      title: "Languages",
      info: "Arabic (Native), English (Good)",
    },
  ];
  const softSkills = ["Team Player", "Eager to Learn", "Communication Skills"];
  return (
    <>
      <section className="about" id="about">
        <div className="top_section">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>
        <div className="container about_container">
          <div className="about_me">
            <div className="about__me_image">
              <img src={img} alt="Mahmoud Sabry" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <div className="about_card">
                <FaAward className="card_icon" />
                <h5>Diploma</h5>
                <small>Front-End, Route Academy</small>
              </div>

              <div className="about_card">
                <VscFolderLibrary className="card_icon" />
                <h5>Projects</h5>
                <small>9+ completed</small>
              </div>

              <div className="about_card">
                <FaGraduationCap className="card_icon" />
                <h5>Education</h5>
                <small>Graduated 2025</small>
              </div>
            </div>
            <p>
              I'm Mahmoud Sabry, a Front-End Developer from Cairo who loves
              turning UI/UX designs into clean, responsive and accessible web
              apps that work great on every device. I build single page
              applications with React.js and modern JavaScript, and I enjoy
              working with REST APIs to bring real data to life.
            </p>
            <p>
              I earned my Front-End Web Development Diploma from Route Academy,
              and since then I've built projects like Fresh-Cart, a Movies app,
              a Weather app and a Prayer Times app. I'm always eager to learn
              new things and I enjoy working in a team.
            </p>
            <ul className="about_info">
              {infoData.map(({ id, icon, title, info }) => (
                <li key={id}>
                  <span className="about_info_icon">{icon}</span>
                  <div>
                    <h5>{title}</h5>
                    <small>{info}</small>
                  </div>
                </li>
              ))}
            </ul>
            <div className="about_skills">
              {softSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
