import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Portfolio from "./components/portfolio/Portfolio";
import Educations from "./components/educations/Educations";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Educations />
      <Experiences />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App