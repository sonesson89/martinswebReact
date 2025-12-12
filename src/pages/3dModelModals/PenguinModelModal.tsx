import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as THREE from 'three';
import { useState } from 'react';
import ProjectModalHeader from '../projectModals/projectModalComponents/ProjectModalHeader';
import ThreeDModelModal from './ThreeDModelModal';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ThreeJSViewer from '../components/3dviewer/ThreeJSViewer';

enum Tab {
  Renders = 'Renders',
  Preview3D = '3D Preview',
  Video = 'Video',
  LogoComparison = 'Blender Viewport',
}

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

  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Lighting setup tuned for product-style preview (three-point + hemisphere)
  // Hemisphere: soft sky/fill light
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
  hemiLight.position.set(0, 1, 0);

  // Key (main) directional light — warm, stronger, casts shadows
  const keyLight = new THREE.DirectionalLight(0xfff1e0, 1.2);
  keyLight.position.set(2, 4, 2);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  keyLight.shadow.radius = 4;
  keyLight.shadow.bias = -0.0005;

  // Fill light — cooler, softer, reduces contrast
  const fillLight = new THREE.DirectionalLight(0xaabfff, 0.45);
  fillLight.position.set(-2, 1.5, 1);

  // Rim/back light — separates object from background
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.35);
  rimLight.position.set(-1.5, 2, -3);

  // Small spotlight accent (optiornal) to bring out details
  const accentSpot = new THREE.SpotLight(0xffffff, 0.6);
  accentSpot.distance = 12;
  accentSpot.angle = Math.PI / 8;
  accentSpot.penumbra = 0.3;
  accentSpot.castShadow = true;

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
    <ThreeDModelModal
      onClose={props.onClose}
      isOpen={props.isOpen}
      onAfterOpen={() => {
        setActiveTab(Tab.Renders);
      }}
    >
      <ProjectModalHeader label={'Penguin Marine'} onClose={props.onClose} />

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
                  <img src="./../src/assets/3dmodels/penguin/3.png" />
                </div>
                <div>
                  <img src="./../src/assets/3dmodels/penguin/5.png" />
                </div>
                <div>
                  <img src="./../src/assets/3dmodels/penguin/6.png" />
                </div>
                <div>
                  <img src="./../src/assets/3dmodels/penguin/4.png" />
                </div>
              </Carousel>
            </div>
          ) : null}
          {activeTab === Tab.Preview3D ? (
            <div className="projectTabContent">
              <ThreeJSViewer
                path="./../src/assets/3dmodels/penguin/penguin.glb"
                enableOrbit={true}
                cameraConfig={{
                  rotation: { x: -0.166814, y: -0.085296, z: -0.014344 },
                  position: { x: -1.414081, y: -0.084186, z: 6.316755 },
                }}
                orbitSettings={{
                  enablePan: true,
                  enableRotate: true,
                  enableZoom: true,
                  maxDistance: 40,
                  minDistance: 1,
                }}
                lights={[accentSpot /* , hemiLight, keyLight */]}
                childrenCallback={(children: any) => {
                  //setAllSubChildrenToReceiveShadow(children);
                }}
                showAxes={true}
                backgroundImagePath="./../src/assets/3dmodels/penguin/bg.png"
                srgbEncoding={true}
              />
            </div>
          ) : null}
          {activeTab === Tab.Video ? (
            <div className="projectTabContent">
              <video controls autoPlay loop>
                <source
                  src="./../src/assets/3dmodels/penguin/video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : null}
          {activeTab === Tab.LogoComparison ? (
            <div className="projectTabContent">
              <img src="./../src/assets/3dmodels/penguin/viewport.webp" />
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
