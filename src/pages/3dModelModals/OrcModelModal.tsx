import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';
import ProjectModalHeader from '../projectModals/projectModalComponents/ProjectModalHeader';
import ThreeDModelModal from './ThreeDModelModal';
import { Carousel } from 'react-responsive-carousel';
import { initiate3dModel } from '../../utils/3dModelViewer';

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

const generate3dPreview = () => {
  console.log('ORC OPENED');
  initiate3dModel(
    './../src/assets/3dmodels/orc/orc.glb',
    '.threeDModelPreview',
    true,
    {
      // camera config
      rotation: {
        x: -0.2029013172089961,
        y: 0.33028185740198107,
        z: 0.06662224847372154,
      },
      position: {
        x: 2.625152903217499,
        y: 2.662201418567157,
        z: 7.63151455321799,
      },
    },
    null,
    undefined,
    undefined,
    {
      enablePan: false,
      enableRotate: true,
      enableZoom: true,
      maxDistance: 13,
      minDistance: 5,
    }
  );
};

export const OrcModelModal = (props: any) => {
  const tabs = ['Pictures', 'Animation', '3D Preview'];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    console.log('location', location);
    if (activeTab === '3D Preview') {
      generate3dPreview();
    }
  }, [activeTab]);

  return (
    <ThreeDModelModal
      onClose={props.onClose}
      isOpen={props.isOpen}
      onAfterOpen={() => {
        setActiveTab(tabs[0]);
      }}
    >
      <ProjectModalHeader label={'Orc'} onClose={props.onClose} />
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
          {activeTab === 'Pictures' ? (
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
                  <img src="./../src/assets/3dmodels/orc/1.png" />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <img src="./../src/assets/3dmodels/orc/2.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <img src="./../src/assets/3dmodels/orc/3.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
              </Carousel>
            </div>
          ) : null}
          {activeTab === 'Animation' ? (
            <div className="projectTabContent">
              <img src="./../src/assets/3dmodels/orc/gif2.gif" />
            </div>
          ) : null}
          {activeTab === '3D Preview' ? (
            <div className="projectTabContent">
              <p
                style={{
                  fontSize: '1.8em !important',
                  textAlign: 'center',
                  color: '#050505',
                }}
              >
                Use your mouse and mouse-wheel (or fingers on a tablet) to
                rotate and zoom the 3D model.
              </p>
              <div className="threeDModelPreview"></div>
              <p
                style={{
                  fontSize: '1.3em !important',
                  textAlign: 'center',
                  color: '#050505',
                }}
              >
                The eyes were created with procedurally generated shaders in
                Blender, which cannot be exported into a glb-file which is what
                is presented here via three.js. Therefore the eyes are plain
                white in 3D preview mode.
              </p>
            </div>
          ) : null}
        </div>
        <p className="marginTop--double">
          This is my first somewhat successful attempt at sculpting in Blender.
          It's a simple orc head, inspired by orcs from Warhammer and Warcraft.
          I plan to continue this model some day and create the rest of the body
          as well.
        </p>
      </div>
    </ThreeDModelModal>
  );
};
