import Carousel from '../components/Carousel';
import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';
import { useState } from 'react';

export const StarAppModal = (props: any) => {
  let loading = false;

  const tabs = ['Screenshots'];
  const dependencies = ['git', 'npm', 'html', 'css', 'javascript', 'php'];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <ProjectModal
      id="starappModal"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <ProjectModalHeader label={'Star App'} onClose={props.onClose} />
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
                  <img src="./../src/assets/starapp_screenshots/1.png" />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <img src="./../src/assets/starapp_screenshots/2.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
              </Carousel>
            </div>
          ) : null}
        </div>
        {/* Description */}
        <p className="marginTop--double">
          This is a web app I created that is targeted towards Starcraft 2
          players. The app allows the user to connect to Starcraft 2 account and
          it then loads information about the player using
          <a
            href="https://develop.battle.net/documentation/starcraft-2/community-apis"
            target="_blank"
          >
            Blizzards official SC2 API
          </a>
          . The purpose of the application is to let users track their progress
          and view statistics regarding their progress in the game.
        </p>
        <p className="marginTop">
          Originally I created this project as a Windows 8 app. Back in Windows
          8 developer could create apps that could then be used in the
          <a
            href="https://img.gadgethacks.com/img/19/42/63487130499951/0/bring-classic-start-menu-back-windows-8.w1456.jpg"
            target="_blank"
          >
            Windows 8 tileset start menu
          </a>
          . This made it so that the tile for the app would constantly update to
          show it's latest status in the start menu, so that the user could keep
          track of his current rank or league. However, this was long ago and
          since then Windows do no longer support these kind of apps. Therefore
          I remade this project into a simple web app instead.
        </p>
        <p className="marginTop">
          The application is written purely with standard web technologies,
          HTML5, CSS3 and Javascript. It also relies a bit on jQuery. Feel free
          to demo the app yourself or view the code.
        </p>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="https://github.com/sonesson89/StarApp"
          target="_blank"
        >
          <p data-text="Code"></p>
        </a>
        <a
          className="button floatRight"
          href="http://martinsonesson.se/pi/StarApp"
          target="_blank"
        >
          <p data-text="Demo"></p>
        </a>
        <a
          className="button floatRight"
          href="http://martinsonesson.se/pi/StarApp/?regionId=2&profileId=8845720&realm=1"
          target="_blank"
        >
          <p data-text="Demo with preconfigured profile"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
