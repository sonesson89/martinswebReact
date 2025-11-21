import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import ProjectModalHeader from '../projectModals/projectModalComponents/ProjectModalHeader';
import ThreeDModelModal from './ThreeDModelModal';
import { initiate3dModel } from '../../utils/3dModelViewer';

export const PortfolioAnimationModal = (props: any) => {
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
      './../src/assets/3dmodels/start/sonesson_logo.glb',
      '.threeDModelPreview',
      false,
      {
        // camera config
        rotation: {
          x: -0.20109952889104435,
          y: -0.007656962676424146,
          z: 0,
        },
        position: {
          x: -0.32500515103057936,
          y: 7.95142682045288,
          z: 26.22902112349524,
        },
      },
      (children: any) => {
        setAllSubChildrenToReceiveShadow(children);
        children.find((x: any) => x.name === 'Backdrop').receiveShadow = false;
      },
      (animations: any) => {
        // Animations to play on loop
        return animations.filter(
          (x: any) =>
            x.name === 'CLOUDACTION' ||
            x.name === 'CarAction' ||
            x.name === 'Action.001' ||
            x.name === 'CenterAction' ||
            x.name === 'Guy' ||
            x.name === 'Propeller' ||
            x.name === 'Pilot' ||
            x.name.includes('PlanePath') ||
            x.name.includes('TreeAction') ||
            x.name.includes('Flag')
        );
      },
      (animations: any) => {
        // Animations to play once
        return animations.filter(
          (x: any) => x.name.includes('Text') && x.name.includes('Action')
        );
      }
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
          This is the same 3D animation that I have on the start page of my
          portfolio. I made a simple landscape in Blender that I textured as
          well. I made the animations of the clouds moving and the text falling
          down from the sky. Then I proceeded to add more elements, such as the
          plane, the flying bird, the car driving the and the guy peaking
          outside of the windows in the castle. They are all separate actions,
          animated in Blender and saved into the file itself. Three.js then
          loads the file as a glb-file and programmatically starts playing the
          baked actions.
        </p>
      </div>
    </ThreeDModelModal>
  );
};
