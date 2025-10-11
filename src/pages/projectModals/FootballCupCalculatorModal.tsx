import Carousel from '../components/Carousel';
import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';
import { useState } from 'react';

export const FootballCupCalculatorModal = (props: any) => {
  let loading = false;

  const tabs = ['Screenshots'];
  const dependencies = [
    'git',
    'npm',
    'grunt',
    'html',
    'css',
    'javascript',
    'jquery',
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <ProjectModal id="wccModal" onClose={props.onClose} isOpen={props.isOpen}>
      <ProjectModalHeader
        label={'World/Euro Cup Calculator'}
        onClose={props.onClose}
      />
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
                  <img src="./../src/assets/wcc_screenshots/3.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <img src="./../src/assets/wcc_screenshots/1.png" />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <img src="./../src/assets/wcc_screenshots/2.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
              </Carousel>
            </div>
          ) : null}
        </div>
        {/* Description */}
        <p className="marginTop--double">
          This is a web application I first created just before the World Cup in
          2014. I wanted a way to simulate different outcomes in the tournament
          to see how it could all turn out. The simulators I found while
          googling only took into account if a match ends in a win, draw or
          loss. None of them took into account the goal difference which can
          play a major difference in the group stage, so therefore I created
          this application. In my app you can enter an exact result for each
          match to simulate different outcomes.
        </p>
        <p className="marginTop">
          After the user has filled out a result for every single match the user
          is given a code, which is basically all the results compressed, that
          can then be shared with others, for instance via Facebook, to show how
          they think the tournament would end up. All the logic is written in
          Javascript and I use the libraries jQuery and requirejs. If I ever
          make a new version of this web app I will use Angular as it would
          greatly simplify the code. Feel free to try it out below or look at
          the soruce code.
        </p>
        <p className="marginTop">
          After this I have continue to develop the project whenever there's a
          big football tournament coming. In 2018 I made a new version time for
          World Cup 2018. There I spent a lot of time improving the user
          interface, which in the 2014 version was pretty grey and boring. In
          2021 it was time for the European Championship so I made a new version
          for that as well. This was more difficult, because compared to the
          World Cup, Euro Cup has a different tournament format that is quite
          complex, which you is covered{' '}
          <a
            href="https://documents.uefa.com/v/u/WVKcnryVkASzztwJjPBcIw"
            target="_blank"
          >
            here
          </a>
          . Basically in the Euro Cup, also teams that end up in third place in
          the group phase have a chance to advance to the knockout phase, if
          they are among 4 best third place teams. Where these teams are then
          put in the knockout table is defined via a matrix that is different
          depending on which groups they are originally from. The rules are
          quite confusing, but in the end I managed to get my calculator to
          follow the rules exactly. I also added a "get current results" button.
          When the user clicks it it will fetch the current results of the
          matches played and fill those in automatically. This was useful while
          using the calculator during the tournament, to quickly insert the
          latest results.
        </p>
      </div>
      <div className="modal-footer">
        <div style={{ display: 'flex' }}>
          <a
            className="button"
            href="https://github.com/sonesson89/WC2014Calculator"
            target="_blank"
          >
            <p data-text="Code WC 2014"></p>
          </a>
          <a
            className="button"
            href="https://github.com/sonesson89/WorldCup2018Simulator"
            target="_blank"
          >
            <p data-text="Code WC 2018"></p>
          </a>
          <a
            className="button"
            href="https://github.com/sonesson89/EuroCup2021Simulator"
            target="_blank"
          >
            <p data-text="Code EC 2021"></p>
          </a>
          <a
            className="button"
            href="https://github.com/sonesson89/EuroCup2024Simulator"
            target="_blank"
          >
            <p data-text="Code EC 2024"></p>
          </a>
        </div>
        <div style={{ display: 'flex' }}>
          <a
            className="button"
            href="http://www.martinsonesson.se/pi/WC2014Calculator/index.php"
            target="_blank"
          >
            <p data-text="Demo WC 2014"></p>
          </a>
          <a
            className="button"
            href="http://martinsonesson.se/wc2018/"
            target="_blank"
          >
            <p data-text="Demo WC 2018"></p>
          </a>
          <a
            className="button"
            href="http://martinsonesson.se/ec2021/"
            target="_blank"
          >
            <p data-text="Demo EC 2021"></p>
          </a>
          <a
            className="button"
            href="http://martinsonesson.se/ec2024/"
            target="_blank"
          >
            <p data-text="Demo EC 2024"></p>
          </a>
        </div>
      </div>
    </ProjectModal>
  );
};
