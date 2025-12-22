import { SceneConfiguration } from '../../components/3dviewer/types';

export const penguinSceneConfiguration: SceneConfiguration = {
  orbitRotate: true,
  camera: {
    position: {
      x: -1.934798563786703,
      y: 0.9105496601805275,
      z: 7.223065629301007,
    },
    rotation: {
      x: -0.17187580696569474,
      y: -0.21613393424066416,
      z: -0.03720976516865134,
    },
    fov: 60,
  },
  lights: [
    {
      type: 'SpotLight',
      color: 16777215,
      intensity: 11.07,
      penumbra: 1,
      angle: 0.5934119456780721,
      distance: 25,
      position: {
        x: 0,
        y: 1.4,
        z: 15.05,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    {
      type: 'DirectionalLight',
      color: 16514816,
      intensity: 1.41,
      position: {
        x: 6.35,
        y: 8.9,
        z: 0.55,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    {
      type: 'DirectionalLight',
      color: 15398960,
      intensity: 3.15,
      position: {
        x: -1.2,
        y: 1.75,
        z: -11.1,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    {
      type: 'DirectionalLight',
      color: 10744063,
      intensity: 0.18,
      position: {
        x: 0,
        y: 4.4,
        z: 17.75,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  ],
  orbitSettings: {
    enablePan: true,
    enableRotate: true,
    enableZoom: true,
    maxDistance: 40,
    minDistance: 1,
  },
  environment: 'footprint-court',
  sRGBE: false,
};
