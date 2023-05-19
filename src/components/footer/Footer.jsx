import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        BURAK SAG
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/iburaksag" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://www.twitter.com/iburaks" target="_blank">
          <IoLogoTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/burak-sag-4883a2139/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          2023 &copy; Burak Sag Personal Portfolio. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer