import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';
import { useState } from 'react';

export const SnakeModal = (props: any) => {
  let loading = false;

  const tabs = ['Game demo', 'Site demo'];
  const dependencies = ['java', 'android', 'git', 'mysql'];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <ProjectModal id="snakeModal" onClose={props.onClose} isOpen={props.isOpen}>
      <ProjectModalHeader label={'Gyro Snake'} onClose={props.onClose} />
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
          {activeTab === tabs[0] ? (
            <div className="projectTabContent">
              <video controls>
                <source src="./../src/assets/snakedemo.mp4" type="video/mp4" />
              </video>
            </div>
          ) : null}
          {activeTab === tabs[1] ? (
            <div className="projectTabContent">
              <video controls>
                <source
                  src="./../src/assets/snakesitedemo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          ) : null}
        </div>
        {/* Description */}
        <p className="marginTop--double">
          This is a group project that I participated in during my time at
          Chalmers as a part of a programming course. I worked on this project
          together with three other students. It is essentially a
          Android-version of the classic game Snake. The biggest difference is
          that in our game the user uses the motion sensor of the phone to
          maneuver the snake, the snake can be steered in any angle and not just
          90 degree angles like in traditional snake games.
        </p>
        <p className="marginTop">
          Another difference is that the game has different maps with different
          attributes. The speed of the snake, the pace at which it grows and
          obstacles are map specific. The attributes of the map is determined by
          an XML-document for each map, because of this creating new maps is
          fairly easy. We also developed a website where users can create their
          own maps in a Javascript editor, upload it to a database and browse
          other usermade maps.
        </p>
        <p className="marginTop">
          Some time later I decided to continue developing the app myself. I
          fixed some bugs that occured since the app was not updated with the
          latest version of Android and I also added some new features like a
          global highscore database, improved graphics, more maps, sound effects
          and music etc. You can also check out the leaderboard below.
        </p>
        <p className="marginTop">
          Below you can view the report that was a part of the course as well as
          the map editor and two different versions of the app itself. The 1.0
          version is the one that was developed with the three other students at
          Chalmers, the 1.1 version is the updated version that I continued to
          develop afterwards. The app has to be installed manually using a file
          browser on your phone, you also need to set your phone to allow apps
          from unknown sources.
        </p>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="./../src/documents/GyroSnakeReport.pdf"
          target="_blank"
          download="GyroSnakeReport.pdf"
        >
          <p data-text="Report"></p>
        </a>
        <a
          className="button floatRight"
          href="https://github.com/sonesson89/GyroSnake"
          target="_blank"
        >
          <p data-text="Code"></p>
        </a>
        <a
          className="button floatRight"
          href="./../src/miscFiles/SnakeApp-1.0.apk"
          target="_blank"
          download="SnakeApp-1.0.apk"
        >
          <p data-text="v1.0 APK"></p>
        </a>
        <a
          className="button floatRight"
          href="./../src/miscFiles/GyroSnake.apk"
          target="_blank"
          download="GyroSnake.apk"
        >
          <p data-text="v1.1 APK"></p>
        </a>
        <a className="button floatRight" href="./../gyroSnakeEditor">
          <p data-text="Map editor"></p>
        </a>
        <a
          className="button floatRight"
          href="http://martinsonesson.se/pi/snakescore/"
          target="_blank"
        >
          <p data-text="Leaderboard"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
