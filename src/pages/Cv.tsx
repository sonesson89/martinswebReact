import { useState } from 'react';
import ProjectModal from './components/ProjectModal';
import TechDependencies from './components/TechDependencies';
import ProjectModalHeader from './projectModals/projectModalComponents/ProjectModalHeader';
import { Link } from 'react-router-dom';
import helpers from './helpers/helpers';
import styled from 'styled-components';
import { CircularTechGrade, TechGrade } from './components/CircularTechGrade';
import { Tooltip } from 'react-tooltip';

const TECH_COMPETENCE = [
  {
    name: 'Languages',
    competences: [
      {
        name: 'javascript',
        grade: TechGrade.Fluent,
      },
      {
        name: 'typescript',
        grade: TechGrade.Fluent,
      },
      {
        name: 'csharp',
        grade: TechGrade.Adept,
      },
      {
        name: 'java',
        grade: TechGrade.Adept,
      },
      {
        name: 'php',
        grade: TechGrade.Adept,
      },
      {
        name: 'python',
        grade: TechGrade.Experienced,
      },
      {
        name: 'c',
        grade: TechGrade.Decent,
      },
    ],
  },
  {
    name: 'Web development',
    competences: [
      {
        name: 'html',
        grade: TechGrade.Fluent,
      },
      {
        name: 'css',
        grade: TechGrade.Fluent,
      },
      {
        name: 'nodejs',
        grade: TechGrade.Fluent,
      },
      {
        name: 'jquery',
        grade: TechGrade.Fluent,
      },
      {
        name: 'react',
        grade: TechGrade.Adept,
      },
      {
        name: 'angular',
        grade: TechGrade.Adept,
      },
      {
        name: 'vue',
        grade: TechGrade.Adept,
      },
      {
        name: 'bootstrap',
        grade: TechGrade.Experienced,
      },
      {
        name: 'less',
        grade: TechGrade.Fluent,
      },
      {
        name: 'magnolia',
        grade: TechGrade.Adept,
      },
      {
        name: 'puppeteer',
        grade: TechGrade.Adept,
      },
      {
        name: 'jest',
        grade: TechGrade.Adept,
      },
      {
        name: 'grunt',
        grade: TechGrade.Adept,
      },
      {
        name: 'graphql',
        grade: TechGrade.Adept,
      },
      {
        name: 'express',
        grade: TechGrade.Experienced,
      },
    ],
  },
  {
    name: 'Databases',
    competences: [
      {
        name: 'mysql',
        grade: TechGrade.Adept,
      },
    ],
  },
  {
    name: 'Versioning',
    competences: [
      {
        name: 'tfs',
        grade: TechGrade.Experienced,
      },
      {
        name: 'git',
        grade: TechGrade.Fluent,
      },
      {
        name: 'mercurial',
        grade: TechGrade.Experienced,
      },
    ],
  },
  {
    name: 'Development environments',
    competences: [
      {
        name: 'visualstudio',
        grade: TechGrade.Experienced,
      },
      {
        name: 'eclipse',
        grade: TechGrade.Experienced,
      },
      {
        name: 'intellij',
        grade: TechGrade.Beginner,
      },
      {
        name: 'vscode',
        grade: TechGrade.Fluent,
      },
    ],
  },
  {
    name: 'Agile development',
    competences: [
      {
        name: 'scrum',
        grade: TechGrade.Adept,
      },
      {
        name: 'kanban',
        grade: TechGrade.Decent,
      },
    ],
  },
  {
    name: 'OS',
    competences: [
      {
        name: 'linux',
        grade: TechGrade.Fluent,
      },
      {
        name: 'windows',
        grade: TechGrade.Fluent,
      },
      {
        name: 'macos',
        grade: TechGrade.Fluent,
      },
    ],
  },
  {
    name: 'Miscellaneous',
    competences: [
      {
        name: 'jira',
        grade: TechGrade.Adept,
      },
      {
        name: 'blender',
        grade: TechGrade.Fluent,
      },
      {
        name: 'figma',
        grade: TechGrade.Experienced,
        /* }, {
      "name": "mockito",
      "grade": TechGrade.Experienced */
      },
      {
        name: 'jenkins',
        grade: TechGrade.Decent,
      },
      {
        name: 'photoshop',
        grade: TechGrade.Adept,
      },
      {
        name: 'android',
        grade: TechGrade.Beginner,
      },
      {
        name: 'apache',
        grade: TechGrade.Experienced,
      },
      {
        name: 'msoffice',
        grade: TechGrade.Experienced,
      },
      {
        name: 'chatgpt',
        grade: TechGrade.Decent,
      },
    ],
  },
];

enum Modals {
  Annevo = 'Annevo',
  Knowit = 'Knowit',
  Cochlear = 'Cochlear',
  Chalmers = 'Chalmers',
  None = 'None',
}

/* const TechWrapper = styled.span`
  font-size: 15px;

  img {
    height: 15px !important;
    max-width: 15px;
  }
`; */

const TechsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  background: transparent !important;
`;

function Cv() {
  const [activeModal, setActiveModal] = useState(Modals.None);

  return (
    <>
      <ProjectModal
        onClose={() => setActiveModal(Modals.None)}
        isOpen={activeModal === Modals.Annevo}
      >
        <ProjectModalHeader
          label={'Annevo'}
          onClose={() => setActiveModal(Modals.None)}
        />
        <div className="modal-body">
          <p className="marginTop">
            I started working at Annevo AB in May 2017 as an IT-consultant.
            Annevo has since then been acquired by twoday and is now a part of
            twoday. However as a part of this acquisition the work conditions
            and my role as a consultant has not really changed. But I may refer
            to this employment as "Annevo" in some places (like older ones) and
            "twoday" in others, just to clear out some possible confusion.
          </p>
          <div className="marginTop">
            <p>
              <strong>Recorded Future</strong>
            </p>
            <div className="marginTop">
              <TechDependencies
                dependencies={[
                  'html',
                  'css',
                  'less',
                  'javascript',
                  'typescript',
                  'jest',
                  'gulp',
                  'jenkins',
                  'sonarqube',
                  'confluence',
                  'jira',
                  'playwright',
                  'git',
                  'vite',
                  'react',
                  'graphql',
                  'docker',
                  'nodejs',
                  'styledcomponents',
                  'apollo',
                ]}
              ></TechDependencies>
            </div>
            <p>
              My third assignment via Annevo is at a company called{' '}
              <a href="https://www.recordedfuture.com/" target="_blank">
                Recorded Future
              </a>
              . They deal with internet security and threat intelligence. Their
              systems utilize machine learning technology to scour the web for
              possible threats and vulnerabilities and then score these on a
              scale from low to critical. Many big corporations, including
              governments and authorities, are customers and pay for the data.
              My project at Recorded Future is to develop and maintain a browser
              extension, that is available for Firefox and Chrome. The browser
              extension allows the user to get real time data while browsing
              around, by constantly scraping the site for possible
              vulnerabilities and threats and then offering feedback to the
              user. It is an extension mainly used by professionals working in
              the security/threat intelligence field. It has over 10 000 active
              users.
            </p>
            <p className="marginTop">
              I have worked on this project during my entire stay at Recorded
              Future and since it is a smaller project I am the only developer.
              Being solely in charge of the development of a product like this
              has really helped me grow, since the stability and functionality
              of the product is my full responsibility. Therefore I have a bit
              of a tech lead role and I am fairly free to choose how I want to
              implement things. Since it is a browser extension it is a fairly
              lightweight product that does not utilize any framework, like
              Angular or React, and does not really have any dependencies to
              outside libraries, which is preferred when developing an
              extension/plugin. Because of this I have really had to hone my
              skills when it comes to native JavaScript and I feel that I have
              improved a lot. The extension can be found{' '}
              <a
                href="https://chrome.google.com/webstore/detail/recorded-future/cdblaggcibgbankgilackljdpdhhcine"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="marginTop">
            <p>
              <strong>Barium</strong>
            </p>
            <div className="marginTop">
              <TechDependencies
                dependencies={[
                  'html',
                  'css',
                  'less',
                  'javascript',
                  'typescript',
                  'azuredevops',
                ]}
              ></TechDependencies>
            </div>
            <p>
              My second assignment via Annevo was at{' '}
              <a href="https://www.barium.se/" target="_blank">
                Barium
              </a>
              . Barium creates a platform, called Barium Live, that is used by
              their customers to create customized forms and case management
              systems. The goal of the project was to migrate their older
              platform into a new one, using a more modern tech stack. My time
              at Barium lasted only a few months, this is due to an unexpected
              sudden change in the project that made my role within the project
              obsolete.
            </p>
          </div>
          <div className="marginTop">
            <p>
              <strong>WirelessCar</strong>
            </p>
            <div className="marginTop">
              <TechDependencies
                dependencies={[
                  'html',
                  'css',
                  'less',
                  'javascript',
                  'angular',
                  'vue',
                  'jest',
                  'cypress',
                  'grunt',
                  'redux',
                  'java',
                  'maven',
                  'jenkins',
                  'sonarqube',
                  'confluence',
                  'jira',
                  'git',
                  'gerrit',
                ]}
              ></TechDependencies>
            </div>
            <p>
              This was my first assignment via Annevo. I worked for about 2
              years at{' '}
              <a href="https://www.wirelesscar.com/" target="_blank">
                WirelessCar
              </a>{' '}
              that delivers IT systems for car companies like Volkswagen and
              Mercedes-Benz. I worked in a project that developed a web platform
              used by vehicle fleet administrators. The vehicles were "smart
              vehicles" that could upload data into the cloud, like GPS
              position, tire pressure, fuel level and so on. This data could
              then be fetched via microservices and be displayed in the web
              platform that I helped develop. I mostly worked with frontend
              development, using technologies as Angular and Vue.
            </p>
          </div>
        </div>
      </ProjectModal>
      <ProjectModal
        onClose={() => setActiveModal(Modals.None)}
        isOpen={activeModal === Modals.Knowit}
      >
        <ProjectModalHeader
          label={'Knowit'}
          onClose={() => setActiveModal(Modals.None)}
        />
        <div className="modal-body">
          <TechDependencies
            dependencies={[
              'html',
              'css',
              'freemarker',
              'less',
              'javascript',
              'requirejs',
              'angular',
              'jquery',
              'karma',
              'grunt',
              'redux',
              'java',
              'maven',
              'jenkins',
              'sonarqube',
              'confluence',
              'jira',
              'ubuntu',
              'git',
              'mercurial',
              'magnolia',
            ]}
          ></TechDependencies>
          <p className="marginTop">
            I have worked about 4 years at Knowit as an IT-consultant. During
            this period I have been on an assignment as a web developer at
            Telia, one of the largest companies in Sweden in the Telecom
            business. During my time at Telia I have been working in several
            different projects.
          </p>
          <p className="marginTop">
            <p>
              <strong>WanOverView</strong>
            </p>
            <p>
              This was the first project I was a part of at Telia. I was
              assigned as a frontend web developer. The project was about
              migrating a DataNet business customer portal called WanOverView
              from an old platform to a new one. In this portal the customers
              can see and manage their different VPN's, subscriptions and orders
              of new DataNet subscriptions. The project was challenging becase
              we the team was spread out over several physical locations, tight
              timeline and budget as well as a lot of stakeholders.
            </p>
            <p className="marginTop">
              My tasks consisted of developing presentation logic in Javascript
              using frameworks like require and jQuery. Also I was in charge of
              the design, working with the CMS, namely{' '}
              <a target="_blank" href="https://www.magnolia-cms.com/">
                Magnolia
              </a>
              , working close with UX resources, creating an AJAX frontend
              service layer against the backend Java services, server rendered
              logic in Freemarker and so on. The website can be viewed{' '}
              <a target="_blank" href="https://wanoverview.telia.se/">
                here
              </a>
              .
            </p>
          </p>
          <p className="marginTop">
            <p>
              <strong>My Pages</strong>
            </p>
            <p>
              After working with WanOverView I was then later assigned to
              another project named "Mina sidor" (the portal is today called{' '}
              <a target="_blank" href="https://www.telia.se/privat/mitt-telia">
                Mitt Telia
              </a>
              ). It is a portal where private customers login to manage and
              administrate their Telia services and engagements.
            </p>
            <p className="marginTop">
              In this project my main focus was still mainly on frontend. I was
              introduced to some new technologies, like less and Angualar. There
              was also big a focus on responsiveness. The biggest challenge for
              me was that I entered the project in the later stages so I had a
              lot of catching up to do to get used to the vast codebase and
              complicated business requirements. We used an agile approach and
              used Jira an administrative tools for handling the stories and
              tasks.
            </p>
          </p>
          <p className="marginTop">
            <p>
              <strong>Sales flow</strong>
            </p>
            <p>
              In this ongoing project which I am currently assigned to I have
              been developing sales flows for private customers for broadband,
              ip telephony and tv services. This also includes flows for when
              ordering broadband services such as Spotify and Play+. During this
              project the frontend processes have been developing quite fast and
              because of this I have been introduced to a lot of new
              technologies, such as Grunt, npm, Jenkins, SiteCatalyst, Sonar,
              Confluence, Karma, Bower and so on. I also started working a lot
              more with the backend and became more of a full stack developer.
              The backend side consists of developing for Telias platform called
              Agora which is a service platform, a distributable packaging of
              Tomcat, Karaf, CXF and TeliaSonera micro-services. The challenge
              with the backend side programming is that the codebase is quite
              huge, there are a lot of different third party systems that we
              integrate towards and the business logic can also be quite
              complex.
            </p>
          </p>
        </div>
      </ProjectModal>
      <ProjectModal
        onClose={() => setActiveModal(Modals.None)}
        isOpen={activeModal === Modals.Cochlear}
      >
        <ProjectModalHeader
          label={'Cochlear'}
          onClose={() => setActiveModal(Modals.None)}
        />
        <div className="modal-body">
          <TechDependencies
            dependencies={['csharp', 'dotnet', 'visualstudio', 'jira']}
          ></TechDependencies>
          <p className="marginTop">
            Cochlear is company that develops hearing instruments for the
            hearing impaired.
          </p>
          <p className="marginTop">
            I've been working with the software team to develop a program used
            in clinics by audiologists to configure the hearing instrument to
            the patients needs.
          </p>
          <p className="marginTop">
            At first my main working field was frontend and design. I was
            responsible for implementing new design changes to the software that
            were decided in discussions with the marketing team. I was also
            responsible for handling translation-issues with new or modified
            texts within the application. Further into my employment I worked
            less with pure frontend and more with a wider range of tasks, like
            backend logic, bugfixing, test/verification, handling support cases
            and so on. The software is a Windows application built in C# using
            the framework Windows Forms. Other Windows technologies like TFS and
            Visual Studio were also used.
          </p>
          <p className="marginTop">
            During my time at Cochlear I feel that I have progressed a lot. I
            have become much more familiar and accustomed to programming and
            design patterns in general. I have also learned a lot more about
            working in a team on a given project with set deadlines for instance
            working using the Scrum agile process.
          </p>
        </div>
      </ProjectModal>
      <ProjectModal
        onClose={() => setActiveModal(Modals.None)}
        isOpen={activeModal === Modals.Chalmers}
      >
        <ProjectModalHeader
          label={'Chalmers'}
          onClose={() => setActiveModal(Modals.None)}
        />
        <div className="modal-body">
          <p className="marginBottom">Courses taken:</p>
          <ul>
            <li>
              <p>
                <strong>LSP300:</strong> Introduktion
              </p>
            </li>
            <li>
              <p>
                <strong>MVE280:</strong> Matematik
              </p>
            </li>
            <li>
              <p>
                <strong>TIF200:</strong> Fysik
              </p>
            </li>
            <li>
              <p>
                <strong>LEU430:</strong> Digital- och datorteknik
              </p>
            </li>
            <li>
              <p>
                <strong>LEU470:</strong> Elektriska kretsar
              </p>
            </li>
            <li>
              <p>
                <strong>LEU500:</strong> Maskinorienterad programmering
              </p>
            </li>
            <li>
              <p>
                <strong>LSP580:</strong> Engelska
              </p>
            </li>
            <li>
              <p>
                <strong>LEU480:</strong> Programutveckling
              </p>
            </li>
            <li>
              <p>
                <strong>LMA212:</strong> Linjär algebra
              </p>
            </li>
            <li>
              <p>
                <strong>LET624:</strong> Realtidssystem
              </p>
            </li>
            <li>
              <p>
                <strong>SSY020:</strong> Linjära system
              </p>
            </li>
            <li>
              <p>
                <strong>LMA222:</strong> Matematisk analys
              </p>
            </li>
            <li>
              <p>
                <strong>DAT055:</strong> Objektorienterade applikationer
              </p>
            </li>
            <li>
              <p>
                <strong>DAT050:</strong> Objektorienterad programmering
              </p>
            </li>
            <li>
              <p>
                <strong>LEU061:</strong> Datakommunikation
              </p>
            </li>
            <li>
              <p>
                <strong>DAT076:</strong> Web-applikationer
              </p>
            </li>
            <li>
              <p>
                <strong>DAT255:</strong> Software engineering project -{' '}
                <Link to={'../projects/snake'}>Read more</Link>
              </p>
            </li>
            <li>
              <p>
                <strong>LMA200:</strong> Matematisk statistik
              </p>
            </li>
            <li>
              <p>
                <strong>EDA263:</strong> Datasäkerhet
              </p>
            </li>
            <li>
              <p>
                <strong>LSP127:</strong> Professional English
              </p>
            </li>
            <li>
              <p>
                <strong>DAT065:</strong> Projekt -{' '}
                <Link to={'../projects/mkp'}>Read more</Link>
              </p>
            </li>
            <li>
              <p>
                <strong>MVE070:</strong> Diskret matematik
              </p>
            </li>
            <li>
              <p>
                <strong>TMV200:</strong> Diskret matematik (avancerad)
              </p>
            </li>
            <li>
              <p>
                <strong>LMTX38:</strong> Examensarbete vid Data- och
                informationsteknik -{' '}
                <Link to={'../projects/exjobb'}>Read more</Link>
              </p>
            </li>
          </ul>
        </div>
      </ProjectModal>

      <div className="cvContainer">
        <div className="mainContentItem full paddingBottom">
          <div className="cvTable">
            <div className="tableRow">
              <div className="tableRowCell" id="leftColumn">
                <div className="columnContainer">
                  <div className="table">
                    <div className="tableRow">
                      <div
                        className="tableRowCell"
                        style={{ paddingBottom: '0px' }}
                      >
                        <h4>Job experience</h4>
                      </div>
                      <div
                        className="tableRowCell"
                        style={{ paddingBottom: '0px' }}
                      >
                        <ul>
                          <li className="paddingBottom">
                            <p>
                              <span className="jobTitle">
                                <a href="http://www.twoday.com" target="_blank">
                                  twoday
                                </a>{' '}
                                (former Annevo AB) , IT-consultant
                              </span>
                            </p>
                            <p>May 2017 - Present</p>
                          </li>
                          <li className="paddingBottom noDisc">
                            <p>
                              <span
                                className="fakeLink readMoreLink"
                                onClick={() => setActiveModal(Modals.Annevo)}
                              >
                                Read more
                              </span>
                            </p>
                          </li>
                          <li className="paddingBottom">
                            <p>
                              <span className="jobTitle">
                                <a href="http://www.knowit.se" target="_blank">
                                  Knowit AB
                                </a>
                                , IT-consultant
                              </span>
                            </p>
                            <p>October 2013 - May 2017</p>
                          </li>
                          <li className="paddingBottom noDisc">
                            <p>
                              <span
                                className="fakeLink readMoreLink"
                                onClick={() => setActiveModal(Modals.Knowit)}
                              >
                                Read more
                              </span>
                            </p>
                          </li>
                          <li className="paddingBottom">
                            <p>
                              <span className="jobTitle">
                                <a
                                  href="http://www.cochlear.com"
                                  target="_blank"
                                >
                                  Cochlear Ltd
                                </a>
                                , Programmer
                              </span>
                            </p>
                            <p>June 2012 - July 2013</p>
                          </li>
                          <li className="paddingBottom noDisc">
                            <p>
                              <span
                                className="fakeLink readMoreLink"
                                onClick={() => setActiveModal(Modals.Cochlear)}
                              >
                                Read more
                              </span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div
                        className="tableRowCell"
                        style={{ paddingTop: '10px' }}
                      >
                        <h4>Education</h4>
                      </div>
                      <div
                        className="tableRowCell"
                        style={{ paddingTop: '10px' }}
                      >
                        <ul>
                          <li className="paddingBottom">
                            <p>
                              Software engineering, Bachelors programme 180p
                            </p>
                            <p>
                              <a href="http://www.chalmers.se" target="_blank">
                                Chalmers University of Technology
                              </a>
                            </p>
                            <p>
                              <span
                                className="fakeLink readMoreLink"
                                onClick={() => setActiveModal(Modals.Chalmers)}
                              >
                                Courses taken
                              </span>
                            </p>
                          </li>
                          <li className="paddingTop paddingBottom">
                            <p>Teknisk bastermin</p>
                            <p>
                              <a href="http://www.chalmers.se" target="_blank">
                                Chalmers University of Technology
                              </a>
                            </p>
                          </li>
                          <li className="paddingTop paddingBottom">
                            <p>Natural sciences programme</p>
                            <p>
                              <a
                                href="http://goteborg.se/wps/portal/katrinelundsgymnasiet"
                                target="_blank"
                              >
                                Katrinelundsgymnasiet
                              </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div
                        className="tableRowCell"
                        style={{ paddingTop: '0px' }}
                      >
                        <h4>Languages</h4>
                      </div>
                      <div
                        className="tableRowCell"
                        style={{ paddingTop: '0px' }}
                      >
                        <ul>
                          <li className="paddingBottom">
                            <p>
                              <b>Swedish</b> - native tounge
                            </p>
                          </li>
                          <li className="paddingTop paddingBottom">
                            <p>
                              <b>English</b> - fluent
                            </p>
                          </li>
                          <li className="paddingTop paddingBottom">
                            <p>
                              <b>Spanish</b> - decent
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div
                        className="tableRowCell"
                        style={{ paddingTop: '0px' }}
                      >
                        <h4>Drivers license</h4>
                      </div>
                      <div
                        className="tableRowCell"
                        style={{ paddingTop: '0px', paddingLeft: '14px' }}
                      >
                        <p>Swedish drivers license (B-körkort)</p>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div
                        className="tableRowCell"
                        style={{ paddingTop: '0px' }}
                      >
                        <h4>Misc</h4>
                      </div>
                      <div
                        className="tableRowCell"
                        style={{ paddingTop: '0px', paddingLeft: '14px' }}
                      >
                        <ul>
                          <li>
                            <b>Fiverr:</b> In my private time I've made plenty
                            of commissions for clients via the platform Fiverr,
                            within the realm of 3D modelling. A lot of my work
                            are for making 3D printable models to be used as
                            tabletop miniatures or decorative pieces, but I've
                            also made tons of other types of models. You can
                            checkout my{' '}
                            <a
                              href="https://www.fiverr.com/martinsonesson"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Fiverr profile
                            </a>{' '}
                            for more information and you can read the reviews
                            from my clients. As of writing this I have 65
                            reviews in total with a perfect 5 star average.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a
                    href="./../src/documents/CV-Martin.pdf"
                    download="CV-Martin.pdf"
                    className="noHover"
                  >
                    <div className="pdfDownloadOuterContainer">
                      <div className="pdfDownloadInnerContainer">
                        <span>DOWNLOAD AS PDF</span>
                        <div>
                          <i className="far fa-file-pdf fa-7x"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="tableRowCell" id="rightColumn">
                <div className="columnContainer">
                  <div className="table" id="technicalCompetence">
                    <div className="tableRow">
                      <div className="tableRowCell">
                        {/* <h4>Technical competence</h4> */}
                        {TECH_COMPETENCE.map((tech, index) => (
                          <div
                            style={{ background: 'transparent' }}
                            key={`tech-competence-div-${index}`}
                          >
                            <h4>{tech.name}</h4>
                            <TechsContainer>
                              {tech.competences
                                .sort((a, b) => b.grade - a.grade)
                                .map((competence, indexx) => (
                                  <span
                                    key={`tech-sub-compz-${index}-${indexx}`}
                                  >
                                    <div
                                      data-tooltip-content={helpers.FormatCorrectNameForTech(
                                        competence.name
                                      )}
                                      data-tooltip-id={`tech-tooltip-${index}-${indexx}`}
                                      data-tooltip-place="top"
                                    >
                                      <CircularTechGrade
                                        tech={competence.name}
                                        grade={competence.grade}
                                      />
                                    </div>
                                    <Tooltip
                                      opacity={1}
                                      positionStrategy="fixed"
                                      place="bottom"
                                      id={`tech-tooltip-${index}-${indexx}`}
                                      style={{
                                        zIndex: '999999',
                                        textAlign: 'center',
                                        color: 'black',
                                        background: 'white',
                                        fontSize: '14px',
                                        minWidth: '140px',
                                        fontWeight: '600',
                                        borderRadius: '0px',
                                        opacity: '1',
                                        filter:
                                          'drop-shadow(2px 4px 6px rgba(0,0,0,0.4))',
                                      }}
                                    />
                                  </span>
                                ))}
                            </TechsContainer>
                          </div>
                        ))}
                        {/* <div data-tooltip-id="snorballe" data-tooltip-place="top" data-tooltip-content="hej hej hej hej">
                          KUK
                        </div>
                        <Tooltip
                          id="snorballe"
                          key="snorballe"
                        >
                          <span>
                            hej
                          </span>
                        </Tooltip >*/}
                        {/* {
                          TECH_COMPETENCE.map((tech, index) => (
                            <ul key={'tech-comp' + index} className="marginLeft paddingTop paddingLeft" style={{ listStyleType: 'none' }}>
                              <li className="paddingTop paddingBottom">
                                <p>
                                  <b>
                                    {tech.name}
                                  </b>
                                </p>

                                {
                                  tech.competences.map((competence, indexx) => (
                                    <ul key={'tech-sub-comp-' + indexx} className="marginLeft" style={{ listStyleType: 'none' }}>
                                      <li>
                                        <p>
                                          <TechWrapper>
                                            {helpers.getElementForDep(competence.name.toLowerCase())}
                                          </TechWrapper>
                                          {helpers.FormatCorrectNameForTech(competence.name)} <span className="knowledgeGrade" grade={competence.grade}><span></span><span></span></span>
                                        </p>
                                      </li>
                                    </ul>
                                  ))
                                }
                              </li>
                            </ul>
                          ))
                        } */}
                        {/* <ul className="marginLeft paddingTop paddingLeft" data-ng-repeat="tech in controller.techCompetence">
                          <li className="paddingTop paddingBottom">
                            <p><b data-ng-bind="tech.name"></b></p>
                            <ul className="marginLeft" style="list-style-type: none;" data-ng-repeat="competence in tech.competences">
                              <li>
                                <p>
                                  {{ competence.name }} <span className="knowledgeGrade" grade="{{competence.grade}}"><span></span><span></span></span>
                                </p>
                              </li>
                            </ul>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cv;
