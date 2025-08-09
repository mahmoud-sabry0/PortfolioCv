import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";
import img from "../../assets/1bdc1732-4105-4846-b8f4-65591b9e9057.jpg";
const About = () => {
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
              <img src={img} alt="" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <div className="about_card">
                <FaAward className="card_icon" />
                <h5>Experience</h5>
                <small>3+ years working</small>
              </div>

              <div className="about_card">
                <FiUsers className="card_icon" />
                <h5>Clients</h5>
                <small> 200+ worldwide</small>
              </div>

              <div className="about_card">
                <VscFolderLibrary className="card_icon" />
                <h5>Projects</h5>
                <small>80+ completed</small>
              </div>
            </div>
            <p>lorem20</p>
            <a href="#contact" className="btn btn-primary">
              Let,s Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
