import Carousel from '../components/Carousel';
import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';
import { useState } from 'react';

export const GbgMuayThaiModal = (props: any) => {
  let loading = false;

  const tabs = ['Screenshots'];
  const dependencies = [
    'javascript',
    'hexo',
    'html',
    'css',
    'graphql',
    'express',
    'mysql',
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <ProjectModal
      id="gbgmuaythaiModal"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <ProjectModalHeader label={'GBG Muay Thai'} onClose={props.onClose} s />
      <div className="modal-body">
        {loading ? <LoadBox /> : null}
        <TechDependencies dependencies={dependencies}></TechDependencies>

        <div className="projectTabsContainer marginTop">
          {tabs.map((x, i) => (
            <div
              key={'modal-tab-' + i}
              className={`projectTab ${x === activeTab ? 'projectTab--selected' : ''}`}
              onClick={() => setActiveTab(x)}
            >
              {x}
            </div>
          ))}
          {activeTab === tabs[0] ? ( // Screenshots
            <div className="projectTabContent">
              <Carousel
                showArrows={true}
                showThumbs={false}
                showIndicators={true}
                showStatus={false}
                useKeyboardArrows={true}
                dynamicHeight={true}
              >
                <div>
                  <img src="./../src/assets/gbgmuaythai_screenshots/1.png" />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <img src="./../src/assets/gbgmuaythai_screenshots/2.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <img src="./../src/assets/gbgmuaythai_screenshots/3.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
              </Carousel>
            </div>
          ) : null}
        </div>
        {/* Description */}
        <p className="marginTop--double">
          In my spare time I train muay thai (also known as thaiboxing) and I
          was tasked with developing a website for my club, Gothenburg Muay
          Thai.
        </p>
        <p className="marginTop">
          A made this site using a framework called{' '}
          <a href="https://hexo.io/" target="_blank">
            Hexo
          </a>
          . It is a framework that allows me to quickly and easily generate a
          static site with a blog-type format. I used a default theme and then
          customized it manually to fit the design I wanted. I host it myself
          using{' '}
          <a href="https://pages.github.com/" target="_blank">
            Github Pages
          </a>
          .
        </p>
        <p className="marginTop">
          Each term the club will accept new members. To sign up you have to
          fill out a form. I created a MySQL database where all applications are
          stored. Because other club administrators want access to the data, but
          aren't familiar with working directly in a MySQL database, I created
          an admin interface where they can log in and view the database in an
          easy to use web interface. There they can remove/edit existing
          applications. The admin UI reads and writes to the MySQL database via
          a GraphQL layer that I also created.
        </p>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="https://github.com/sonesson89/lionsden"
          target="_blank"
        >
          <p data-text="Code"></p>
        </a>
        <a
          className="button floatRight"
          href="http://www.gbgmuaythai.com"
          target="_blank"
        >
          <p data-text="Visit site"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
