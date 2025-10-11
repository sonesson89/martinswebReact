import Carousel from '../components/Carousel';
import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';
import { useState } from 'react';

export const TotalRiskModal = (props: any) => {
  let loading = false;

  const tabs = ['Screenshots', 'Trailer'];
  const dependencies = [
    'git',
    'npm',
    'grunt',
    'angular',
    'babel',
    'jquery',
    'bootstrap',
    'electron',
    'heroku',
    'firebase',
    'socket.io',
    'nodejs',
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <ProjectModal id="riskModal" onClose={props.onClose} isOpen={props.isOpen}>
      <ProjectModalHeader label={'TotalRisk'} onClose={props.onClose} />
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
                  <img src="./../src/assets/risk_screenshots/1.png" />
                </div>
                <div>
                  <img src="./../src/assets/risk_screenshots/2.png" />
                </div>
                <div>
                  <img src="./../src/assets/risk_screenshots/3.png" />
                </div>
                <div>
                  <img src="./../src/assets/risk_screenshots/4.png" />
                </div>
                <div>
                  <img src="./../src/assets/risk_screenshots/5.png" />
                </div>
                <div>
                  <img src="./../src/assets/risk_screenshots/6.png" />
                </div>
                <div>
                  <img src="./../src/assets/risk_screenshots/7.png" />
                </div>
              </Carousel>
            </div>
          ) : null}
          {activeTab === tabs[1] ? ( // Trailer
            <div className="projectTabContent">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/YHkZUC0HA6I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
        </div>
        {/* Description */}
        <div className="marginTop--double">
          <p>
            This is a web based game I've made of the classic board game Risk.
            The game is built using modern web technologies. The Javascript code
            is written using the modern ES6 syntax. Babel and Browserify is used
            for transpiling the code. Grunt is used as a build tool, Angular for
            MVC functionality, Bootstrap CSS and Karma for unit testing.
          </p>
          <p className="marginTop">
            At first I only wanted to practice my JavaScript skills by writing a
            game engine for Risk using the newest JavaScript standard of ES6
            which was newly released at that time, but the project quickly grew
            from there. I made it into a standalone application with an
            installer, while still using web technologies, by utilizing
            Electron. Using Electron I can build the application cross-platform,
            both for Windows and Mac, and get distributables (exe / dmg) that I
            can then publish on for instance GitHub. The game supports
            autopatching using electron-updater, so that it will automatically
            check for newer versions on startup and patch the game.
          </p>
          <p className="marginTop">
            At first the game only had hotseat play (ability to play against
            other humans on the same device) so I created an AI that you can
            play against even if you are alone. I performed a sort of machine
            learning process, where I let the AI play against another AI over
            and over, in a way to try to fine tune the AI, I wrote a blog post
            about this process that is linked below. I then decided that
            multiplayer would be a nice next step, so I started working on the
            server logic using Node, Express and Socket.IO. The live game
            communicates with a dedicated server which is a Heroku dyno running
            Node, and the server has the capabilities of handling many different
            simultaneous game sessions. I wanted people to have to register an
            account in order to play multiplayer, so I added Firebase
            integration in order to create login/registration functionality. I
            also use Firebase to store user data such as game settings. I also
            added a leaderboard and a skill rating algorithm (TrueSkill) used to
            determine players skill after a completed multiplayer match. As for
            the graphics it utilizes a lot of vector graphics, all of which I
            made myself.
          </p>
          <div className="marginTop">
            <strong>Available features:</strong>
            <ul>
              <li>
                <strong>Game engine</strong> Fully working Risk game engine that
                works according to the real rules of the classic board game.
              </li>
              <li>
                <strong>Online multiplayer</strong> Create a lobby, hosted on
                the dedicated server, and play against other humans players
                online.
              </li>
              <li>
                <strong>AI</strong> I have made an AI that you can play against.
                The AI is programmed to account for many different factors when
                making decisions.
              </li>
              <li>
                <strong>Selectable maps</strong> The game supports multiple
                playable maps, with 3 fully implemented maps right now and more
                on the way.
              </li>
              <li>
                <strong>Audio and voice support</strong> Game music, sound
                effects and a talking robotic presenter voice.
              </li>
              <li>
                <strong>Character editor</strong> The ability to create your own
                playable character, to be used both offline and online.
              </li>
            </ul>
          </div>
          <div className="marginTop">
            <strong>Future features:</strong>
            <ul>
              <li>More game modes</li>
              <li>Customizable game rules</li>
              <li>3D graphics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="https://github.com/sonesson89/TotalRisk"
          target="_blank"
        >
          <p data-text="Code"></p>
        </a>
        <a
          className="button floatRight"
          href="http://martinsonesson.se/risk/"
          target="_blank"
        >
          <p data-text="Download"></p>
        </a>
        <a
          className="button floatRight"
          href="https://www.youtube.com/watch?v=YHkZUC0HA6I"
          target="_blank"
        >
          <p data-text="Trailer"></p>
        </a>
        <a
          className="button floatRight"
          href="https://docs.google.com/presentation/d/17fnSiDY73Ps9BFh229Hv4HJhm_53sJR8JYzTHm4MNpg/edit?usp=sharing"
          target="_blank"
        >
          <p data-text="Presentation"></p>
        </a>
        <a
          className="button floatRight"
          href="https://martinsonesson.wordpress.com/2018/01/07/creating-an-ai-for-risk-board-game/"
          target="_blank"
        >
          <p data-text="Risk AI blog post"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
