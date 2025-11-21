import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import ProjectModalHeader from '../projectModals/projectModalComponents/ProjectModalHeader';
import ThreeDModelModal from './ThreeDModelModal';
import { Link } from 'react-router-dom';
import { initiate3dModel } from '../../utils/3dModelViewer';

export const TriplaneModelModal = (props: any) => {
  const tabs = ['Demo'];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const setAllSubChildrenToReceiveShadow = (children: any) => {
    children.forEach((child: any) => {
      child.receiveShadow = true;
      child.castShadow = true;
      child.near = 0.001;
      child.far = 3000;
      if (child.material) {
        child.material.receiveShadow = true;
      }

      if (child.children && child.children.length > 0) {
        setAllSubChildrenToReceiveShadow(child.children);
      }
    });
  };

  const onAfterOpen = () => {
    console.log('OPENED!!!');
    initiate3dModel(
      './../src/assets/3dmodels/triplane/triplane.glb',
      '.threeDModelPreview',
      true,
      {
        // camera config
        rotation: {
          x: -0.2925188891033147,
          y: -0.7948019044484699,
          z: -0.2117226252250864,
        },
        position: {
          x: -5.5524305571029,
          y: 4.5992950409251945,
          z: 5.0203755005862725,
        },
      },
      null,
      (animations: any) => {
        // Animations to play on loop
        return animations.filter(
          (x: any) => x.name === 'Pilot' || x.name === 'Propeller'
        );
      },
      undefined,
      {
        enablePan: true,
        enableRotate: true,
        enableZoom: true,
        maxDistance: 17,
        minDistance: 3,
      },
      0x006bb3
    );
  };

  return (
    <ThreeDModelModal
      onClose={props.onClose}
      isOpen={props.isOpen}
      onAfterOpen={() => {
        onAfterOpen();
      }}
    >
      <ProjectModalHeader label={'Start Animation'} onClose={props.onClose} />
      <div className="modal-body">
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
              <div className="threeDModelPreview"></div>
            </div>
          ) : null}
        </div>
        <p className="marginTop--double">
          This is a plane based on the old style "triplane" design commonly used
          in WW1. This model is actually based on an actual model, namely the{' '}
          <a
            href="https://ca.wikipedia.org/wiki/Sopwith_Triplane"
            target="_blank"
          >
            Sopwith Triplane
          </a>
          . I based my 3D model on the blueprint of the original plane, in order
          to get the exact proportions. I doubt that the original plane was pink
          however. I also added a propeller animation and an animated pilot. I
          also integrated this model into my{' '}
          <Link to={'/3dmodels/portfolioanimation'}>start animation</Link>.
        </p>
      </div>
    </ThreeDModelModal>
  );
};
