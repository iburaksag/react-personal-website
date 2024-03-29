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
                Virtual PLCs were created by using TIA Portal interface, and various test operations were performed on them.
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Designed, implemented, and enhanced automation using Selenium web driver with C# on the web servers which PLCs are connected.
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
              <p>Used N-Unit for unit testing of the classes.</p>
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
                Involved in Design, Development and Testing of Web Forms and Web Services using ASP.NET Framework.
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Designed and developed C# components for implementing business logic in 3- tier application interacting with SQL Server database using managed provider and ADO.NET.
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                In line with the needs of the company, developed 5+ customized data-centric web applications using ASP.NET, C#NET, HTML, Services, LINQ, and SQL Server. (FinalShop, FDST, FinalSmartZone, FKYG, FinalInteraktif)
              </p>
            </li>

            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Technologies, languages, and frameworks I use here: C#, ASP.NET Framework 3.x/4.x, ASP.NET Core, SQL Server, Entity Framework, ADO.NET, LINQ, AngularJS 1+, JQuery, AJAX, HTML, CSS, Bootstrap etc.
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