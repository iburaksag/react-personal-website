import React from 'react'
import './experiences.css'
import {BiCheck} from 'react-icons/bi'

const Experiences = () => {
  return (
    <section id="experiences">
      <h5>Employment History</h5>
      <h2>Job Experience</h2>

      <div className="container experiences__container">
        <article className="experience">
          <div className="experience__head">
            <h3>Software Test Engineer Intern at Siemens</h3>
            <h5>Istanbul, Turkey</h5>
            <h5>July 2019 - September 2019</h5>
          </div>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                I was in the project development stages of the software testing
                team.
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Using the TIA Portal interface, virtual PLCs were created, and
                various test operations were performed.
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Designed, implemented, and enhanced automation using Selenium
                with C# on the web servers which PLCs are connected.
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Getting information about Scrum Framework and participating in
                its applications.
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>Manual tests were performed on the Web Server.</p>
            </li>
          </ul>
        </article>

        <article className="experience">
          <div className="experience__head">
            <h3>Junior Software Developer at Final Group</h3>
            <h5>Istanbul, Turkey</h5>
            <h5>July 2020 - September 2021</h5>
          </div>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                As a part of the Final development team, I contributed to the
                improvement works on the web projects of Final. (Final,
                FinalShop, FDST, FinalKitap, FinalInteraktif)
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                In line with the needs of the company, I contributed to the
                development steps of new projects on the .NET platform.
                (Internal systems such as FKYG, FinalIsTakip, FinalSmartZone)
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Technologies, languages, and frameworks I use here: C#, .NET,
                WebForms, Entity Framework, ADO.NET, LINQ, Angular JS, JQuery,
                AJAX, Html, Css, Bootstrap etc.
              </p>
            </li>
          </ul>
        </article>

        <article className="experience">
          <div className="experience__head">
            <h3>Localization QA Tester at Keywords Studios</h3>
            <h5>Dublin, Ireland</h5>
            <h5>July 2022 - Present</h5>
          </div>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Testing, identifying, recording, and suggesting fixes to
                potential bugs in games relating to language, implementation,
                user interface (UI) and compliance issues.
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Taking ownership of side tasks, such as daily report, bug
                vetting.
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Functional testing, QA Localization, writing of test cases,
                reporting issues to JIRA/Excel, collaboration and contributing
                to the overall success of projects.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experiences