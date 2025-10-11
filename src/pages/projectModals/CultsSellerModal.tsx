import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';
import Carousel from '../components/Carousel';
import { useState } from 'react';

export const CultsSellerModal = (props: any) => {
  let loading = false;
  const tabs = ['Screenshots', 'Video'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const dependencies = [
    'git',
    'npm',
    'vite',
    'react',
    'typescript',
    'styledcomponents',
    'graphql'
  ];

  return (
    <ProjectModal
      id="cultsSellerModal"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <ProjectModalHeader label={'Cults 3D Seller Analyzer'} onClose={props.onClose} />
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
                  <img src="./../src/assets/cultsseller_screenshots/1.png" />
                </div>
                <div>
                  <img src="./../src/assets/cultsseller_screenshots/2.png" />
                </div>
                <div>
                  <img src="./../src/assets/cultsseller_screenshots/3.png" />
                </div>
                <div>
                  <img src="./../src/assets/cultsseller_screenshots/4.png" />
                </div>
                <div>
                  <img src="./../src/assets/cultsseller_screenshots/5.png" />
                </div>
              </Carousel>
            </div>
          ) : null}
          {activeTab === tabs[1] ? ( // Video
            <div className="projectTabContent">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/xDlAd8fvLaQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
        </div>

        {/* Description */}
        <p className="marginTop--double">
          On of my spare time hobbies is 3D modelling. I make 3D models specifically
          for 3D printing purposes and some of them I try I tro sell via a platform
          called Cults3D. <a href="https://cults3d.com/en/users/martinsonesson/3d-models" target='_blank'>Here</a> is my seller profile by the way.
        </p>
        <p className="marginTop">
          As a seller I wanted some way to keep track of all my sales and to visualize
          the data, such as profit over time, to see what items are selling the best,
          who my buyers are etc etc. I noticed that Cults3D had a <a href="https://cults3d.com/en/pages/graphql" target="_blank">public GraphQL API
          endpoint</a> that I could use, so I made this app to be able to fetch data via
          GraphQL and then display it in neat graphs and tables.
        </p>
        <p className="marginTop">
          The site itself is built using React + Typescript. I use Vite as a bundler and for development. You can
          try it out yourself, but you will need a Cults3D account and to generate a token to be able to fetch data.
          If you don't have this you can just check the video or the screenshots.
        </p>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="/cults"
          target="_blank"
        >
          <p data-text="Demo"></p>
        </a>
        <a
          className="button floatRight"
          href="https://github.com/sonesson89/Cults3DSellerStats"
          target="_blank"
        >
          <p data-text="Source Code"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
