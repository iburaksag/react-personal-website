import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
              <small>20+ Completed</small>
            </article>

            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>Master's Degree</small>
            </article>
          </div>

          <p>
              As a Software Developer, I bring a foundation in the field of ASP.Net and Python web development, as well as a willingness to learn and grow in this field. I have experience developing web applications and APIs and working with multiple programming languages and frameworks such as C#/ASP.Net, Python/Django-Flask and React.js. I am also familiar with database management (SQL, NoSQL) and cloud computing platforms such as Google Cloud and AWS. It is my aim to improve myself at this point and lay the foundations of being a qualified full-stack web developer. I am convinced that I should acquire knowledge about the current popular technology stacks to excel in my individual work. With competition within the industry intensifying each year, I firmly believe that a software developer who doesn't continuously improve and stay up to date cannot thrive in this dynamic field. I am confident that my skills, dedication, and collaborative nature would contribute to your business goals.
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