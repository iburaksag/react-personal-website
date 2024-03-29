import React from 'react'
import './portfolio.css'
import { FaGithub } from "react-icons/fa";
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Burak Sag Personal Website with React JS",
    github: "https://github.com/iburaksag/react-personal-website",
  },
  {
    id: 2,
    image: IMG2,
    title: "Car Rental Project by using MERN Stack",
    github: "https://github.com/iburaksag/mern-car-rental",
  },
  {
    id: 3,
    image: IMG3,
    title: "Python Flask Instagram Replica",
    github: "https://github.com/iburaksag/python-flask-instagram-replica",
  },
  {
    id: 4,
    image: IMG4,
    title: "Python Flask Calendar Application",
    github: "https://github.com/iburaksag/python-flask-calendar-app",
  },
  {
    id: 5,
    image: IMG5,
    title: "LinkedIn Clone with React JS",
    github: "https://github.com/iburaksag/react-linkedin-clone",
  },
  {
    id: 6,
    image: IMG6,
    title: "Python Flask Formula 1 PaaS App ",
    github: "https://github.com/iburaksag/python-flask-formula1-app",
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" className="btn">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </article>
            );})
        }
      </div>
    </section>
  );
}

export default Portfolio