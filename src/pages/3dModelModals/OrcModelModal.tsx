import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import ProjectModalHeader from '../projectModals/projectModalComponents/ProjectModalHeader';
import ThreeDModelModal from './ThreeDModelModal';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetModalTabDeeplink } from './useGetModalTabDeeplink';
import ThreeJSViewer from '../components/3dviewer/ThreeJSViewer';
import { orcSceneConfiguration } from './sceneConfigurations/orcSceneConfiguration';

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

enum Tab {
  Pictures = 'Pictures',
  Animation = 'Animation',
  Preview3D = '3D Preview',
}

export const OrcModelModal = (props: any) => {
  const tabs = [Tab.Pictures, Tab.Animation, Tab.Preview3D];

  const { modelId } = useParams();
  const navigate = useNavigate();
  const { preselectedTab } = useGetModalTabDeeplink(tabs);

  const [activeTab, setActiveTab] = useState(preselectedTab ?? tabs[0]);

  return (
    <ThreeDModelModal onClose={props.onClose} isOpen={props.isOpen}>
      <ProjectModalHeader label={'Orc'} onClose={props.onClose} />
      <div className="modal-body">
        <div className="projectTabsContainer marginTop">
          {tabs.map((x, i) => (
            <div
              key={'modal-tab-' + i}
              className={`projectTab ${x === activeTab ? 'projectTab--selected' : ''}`}
              onClick={() => {
                setActiveTab(x);
                navigate(`${modelId}/${x.toLowerCase().replace(' ', '-')}`);
              }}
            >
              {x}
            </div>
          ))}
          {activeTab === Tab.Pictures ? (
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
                  <img src="/../src/assets/3dmodels/orc/1.png" />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <img src="/../src/assets/3dmodels/orc/2.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <img src="/../src/assets/3dmodels/orc/3.png" />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
              </Carousel>
            </div>
          ) : null}
          {activeTab === Tab.Animation ? (
            <div className="projectTabContent">
              <img src="/../src/assets/3dmodels/orc/gif2.gif" />
            </div>
          ) : null}
          {activeTab === Tab.Preview3D ? (
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
              <ThreeJSViewer
                path="/../src/assets/3dmodels/orc/orc.glb"
                enableOrbit={true}
                showAxes={true}
                backgroundImagePath="/src/assets/3dmodels/orc/orc_bg.png"
                sceneConfig={orcSceneConfiguration}
              />
              <p
                style={{
                  fontSize: '1.3em !important',
                  textAlign: 'center',
                  color: '#050505',
                }}
              >
                The eyes are completely white in 3D preview mode, because they
                were made using a procedeural shader that is not supported in
                three.js.
              </p>
            </div>
          ) : null}
        </div>
        <p className="marginTop--double">
          This was one of my earlier attempts at sculpting organic creatures in
          Blender. It's a simple orc head inspired by orcs from Warhammer and
          Warcraft.
        </p>
      </div>
    </ThreeDModelModal>
  );
};
