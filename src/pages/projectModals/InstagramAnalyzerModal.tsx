import { LoadBox } from '../components/LoadBox';
import ProjectModal from '../components/ProjectModal';
import TechDependencies from '../components/TechDependencies';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectModalHeader from './projectModalComponents/ProjectModalHeader';

export const InstagramAnalyzerModal = (props: any) => {
  let loading = false;

  const dependencies = [
    'git',
    'npm',
    'grunt',
    'html',
    'css',
    'javascript',
    'angular',
    'less',
  ];

  return (
    <ProjectModal
      id="instaanalyticsModal"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <ProjectModalHeader
        label={'Instagram Analyzer'}
        onClose={props.onClose}
      />
      <div className="modal-body">
        {loading ? <LoadBox /> : null}
        <TechDependencies dependencies={dependencies}></TechDependencies>
        {/* Description */}
        <p className="marginTop--double">
          This is a little web app that I made, used for analyzing an Instagram
          account. I wanted to see metrics and data based on the feed of an
          Instagram user, such as most commonly used hashtags, distribution
          between video and image uploads, filters used, most liked content,
          most discussed content etc etc. This app will take an Instagram user
          name as an input and then look up data for that user by communicating
          with Instagram API. After everything is loaded it will provide the
          user with statistics, neatly presented with charts and pie diagrams,
          to the user who can get some valuable insight about the user.
        </p>
        <p className="marginTop">
          <strong>
            Unfortunately the app is no longer functioning. Instagram changed
            their policy on the API usage and made it very exclusive so that
            only certain people can have full API access, which basically makes
            this web app unusable. But you can still view the source code.
          </strong>
        </p>
      </div>
      <div className="modal-footer">
        <a
          className="button floatRight"
          href="http://martinsonesson.se/instagramanalytics/"
          target="_blank"
        >
          <p data-text="Demo"></p>
        </a>
        <a
          className="button floatRight"
          href="https://github.com/sonesson89/instagramanalytics"
          target="_blank"
        >
          <p data-text="Code"></p>
        </a>
      </div>
    </ProjectModal>
  );
};
