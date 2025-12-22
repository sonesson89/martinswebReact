import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import ProjectModalHeader from '../projectModals/projectModalComponents/ProjectModalHeader';
import ThreeDModelModal from './ThreeDModelModal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ThreeJSViewer from '../components/3dviewer/ThreeJSViewer';
import ColorSelector from '../components/3dviewer/ColorSelector';
import styled from 'styled-components';
import { penguinSceneConfiguration } from './sceneConfigurations/penguinSceneConfiguration';
import {
  useGetModalTabDeeplink
} from './useGetModalTabDeeplink';

enum Tab {
  Renders = 'Renders',
  Preview3D = '3D Preview',
  Video = 'Video',
  LogoComparison = 'Blender Viewport',
}

const ColorSelectorWrapper = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 18px;
  left: 18px;
  z-index: 30;

  > div {
    margin: 0;
    input {
      margin: 0;
      border-radius: 0px;
    }
  }
`;

export const PenguinModelModal = (props: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const tabs: Tab[] = [
    Tab.Renders,
    Tab.Preview3D,
    Tab.Video,
    Tab.LogoComparison,
  ];

  const { modelId } = useParams();
  const navigate = useNavigate();
  const { preselectedTab } = useGetModalTabDeeplink(tabs);

  const [activeTab, setActiveTab] = useState(preselectedTab ?? tabs[0]);

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
        setAllSubChildrenToReceiveShadow(child.childrn);
      }
    });
  };

  return (
    <ThreeDModelModal onClose={props.onClose} isOpen={props.isOpen}>
      <ProjectModalHeader label={'Penguin Marine'} onClose={props.onClose} />

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
          {activeTab === Tab.Renders ? (
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
                  <img src="/src/assets/3dmodels/penguin/3.png" />
                </div>
                <div>
                  <img src="/src/assets/3dmodels/penguin/5.png" />
                </div>
                <div>
                  <img src="/src/assets/3dmodels/penguin/6.png" />
                </div>
                <div>
                  <img src="/src/assets/3dmodels/penguin/4.png" />
                </div>
              </Carousel>
            </div>
          ) : null}
          {activeTab === Tab.Preview3D ? (
            <div
              className="projectTabContent"
              style={{
                position: 'relative',
              }}
            >
              <ColorSelectorWrapper>
                <ColorSelector
                  tooltipContent="Change Armor Color"
                  tooltipId="penguin-armor-color-tooltip"
                  color={''}
                  onChange={(color) => {
                    const armorPieces = [
                      'Sphere063',
                      'Sphere055',
                      'Cube038',
                      'Sphere057',
                      'Sphere058',
                      'Cube045',
                    ];
                    console.log(color);

                    const scene: THREE.Scene = (window as any).scene;
                    scene.traverse((child: any) => {
                      if (armorPieces.includes(child.name)) {
                        child.material.color.set(color);
                      }
                    });
                  }}
                />
              </ColorSelectorWrapper>
              <ThreeJSViewer
                path="/src/assets/3dmodels/penguin/penguin.glb"
                enableOrbit={true}
                showAxes={true}
                backgroundImagePath="/src/assets/3dmodels/penguin/bg.png"
                sceneConfig={penguinSceneConfiguration}
              />
            </div>
          ) : null}
          {activeTab === Tab.Video ? (
            <div className="projectTabContent">
              <video controls autoPlay loop>
                <source
                  src="/src/assets/3dmodels/penguin/video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : null}
          {activeTab === Tab.LogoComparison ? (
            <div className="projectTabContent">
              <img src="/src/assets/3dmodels/penguin/viewport.webp" />
            </div>
          ) : null}
        </div>
        <p className="marginTop--double">
          This was originally a commission piece ordered by a client. He was a
          member of a Warhammer 40k gaming group and wanted a 3D model of their
          mascot, which only existed as a 2D logo. He wanted to print their
          mascot as a part of a trophy for a gaming tournament. In the renders
          tab, on the last picture, you can see the 3D model in Blender with the
          2D logo next to it.
        </p>
        <p className="marginTop">
          After having made the 3D-printable model I also made some nice looking
          renders of the video, as well as an animated video. The rendered video
          and images are made using Blender's Cycles rendering engine, with some
          basic lighting and materials. You may also preview the 3D model itself
          in the{' '}
          <Link
            onClick={(ev) => {
              ev.preventDefault();
              console.log('lol');
              setActiveTab(Tab.Preview3D);
            }}
            to={''}
          >
            3D Preview tab
          </Link>
          , where you can rotate and zoom the model using your mouse. Note that
          in 3D preview, I am using{' '}
          <Link to={'https://threejs.org/'} target="_blank">
            threejs
          </Link>{' '}
          to render the model in real-time, so the lighting and materials are
          not as high quality as in the rendered images and video.
        </p>
      </div>
    </ThreeDModelModal>
  );
};
