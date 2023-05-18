import React from 'react'
import CV from '../../assets/cv.pdf'
/* call to action */
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className='btn' download="Burak_Sag_CV.pdf">Download CV</a>
      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  );
}

export default CTA