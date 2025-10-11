import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';

export const FlappyDogeModal = (props: any) => {
  let loading = false;

  const dependencies = ['git', 'npm', 'html', 'css', 'javascript'];

  return (
    <ProjectModal
      id="flappyDogeModal"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <ProjectModalHeader label={'Flappy Doge'} onClose={props.onClose} />
      <div className="modal-body">
        {loading ? <LoadBox /> : null}
        <TechDependencies dependencies={dependencies}></TechDependencies>
        {/* Description */}
        <p className="marginTop--double">
          This is a small Javascript game I made in the middle of the Flappy
          Bird craze a while ago. The concept is pretty much identical to that
          of Flappy Bird. It is written in Javascript and I use the phaser
          framework, a good framework for creating games in Javascript. Thanks
          to Phaser the source code for the game itself is extremly
          minimalistic. Feel free to check it out!
        </p>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="https://github.com/sonesson89/FlappyDoge"
          target="_blank"
        >
          <p data-text="Code"></p>
        </a>
        <a className="button floatRight" href="./../flappyDoge" target="_blank">
          <p data-text="Demo"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
