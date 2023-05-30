import React from 'react'
import './about.css'
import ME from '../../assets/me-3.jpg'
import { FaAward } from 'react-icons/fa'
import { FaGraduationCap } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} className='about-img' alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>

            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>Master's Degree</small>
            </article>
          </div>

          <p>
            I hold a Bachelor's Degree in Computer Engineering
            from Doğuş University in Turkey, and I am presently pursuing a
            Master's Degree in Computer Science at Griffith College Dublin with
            an anticipated graduation date at the end of June 2023. I have
            experience developing web applications and APIs and working with
            multiple programming languages and frameworks such as JavaScript,
            HTML/CSS, React, and NodeJS. I am also familiar with database
            management and cloud computing platforms such as Google Cloud App
            Engine. As a collaborative team player, I thrive in fast-paced
            environments and am committed to delivering high-quality work on
            time. I am currently focused on building applications using back-end
            technologies such as Express, Node.js, Python, Flask. It is my aim
            to improve myself at this point and lay the foundations of being a
            qualified full-stack developer.
          </p>

          <a href="#contact" className="btn btn-primary btn-talk">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About