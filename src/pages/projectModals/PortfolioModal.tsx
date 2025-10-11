import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';

export const PortfolioModal = (props: any) => {
  let loading = false;

  const dependencies = [
    'git',
    'npm',
    'vite',
    'react',
    'typescript',
    'styledcomponents',
    'jquery',
    'bootstrap',
    'apache',
    'less',
    'threejs',
    'ubuntu',
  ];

  return (
    <ProjectModal
      id="portfolioModal"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <ProjectModalHeader label={'Portfolio'} onClose={props.onClose} />
      <div className="modal-body">
        {loading ? <LoadBox /> : null}
        <TechDependencies dependencies={dependencies}></TechDependencies>

        {/* Description */}
        <p className="marginTop--double">
          This is the very site you're on right now, my personal website and
          portfolio. I've always had a personal website but I have remade it
          many times with new designs and using new technologies. This latest
          version I made in 2024 and it's built with React + Typescript as the
          main technologies. I also use Vite as the bundler and styled-components
          easily styled React components. The site is also fully responsive.
        </p>
        <p className="marginTop">
          The older version of this site that I used up until 2024 looked almost
          identical, but it was built using Angular instead. The source code
          for both the React version (newer version) and the older Angular version
          can be found at the bottom. The older version also used older JS libraries
          such as jQuery and requirejs that I wanted to move away from.
        </p>
        <p className="marginTop">
          I host this website personally on my own webserver that I maintain myself.
          It's a HP Mini PC that I converted into a home server. It runs Ubuntu server
          with Apache.
        </p>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="https://github.com/sonesson89/martinswebReact"
          target="_blank"
        >
          <p data-text="Code (React version)"></p>
        </a>
        <a
          className="button floatRight"
          href="https://github.com/sonesson89/martinsweb"
          target="_blank"
        >
          <p data-text="Code (Angular version)"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
