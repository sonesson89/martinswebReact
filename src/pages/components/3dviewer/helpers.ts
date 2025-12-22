import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SceneConfiguration, SupportedTypes } from './types';

export const addSpotlight = () => {
  const scene = (window as any).scene as THREE.Scene;
  const newLight = new THREE.SpotLight(0xffffff, 0.6);
  newLight.position.set(0, 5, 0);
  newLight.angle = Math.PI / 8;
  newLight.distance = 12;
  newLight.penumbra = 0.3;
  newLight.castShadow = true;

  // Set initial rotation to point downward (-90 degrees on X axis)
  newLight.rotation.x = -Math.PI / 2;

  // Make target a child of the light so it follows rotation
  newLight.add(newLight.target);
  newLight.target.position.set(0, 0, -1);

  scene.add(newLight);

  const helper = new THREE.SpotLightHelper(newLight, 0x00ff00);
  helper.userData.lightUuid = newLight.uuid;
  scene.add(helper);
  helper.update();
};

export const addDirectionalLight = () => {
  const scene = (window as any).scene as THREE.Scene;
  const newLight = new THREE.DirectionalLight(0xffffff, 0.6);
  newLight.position.set(0, 5, 0);
  newLight.castShadow = true;

  newLight.rotation.x = -Math.PI / 2;

  scene.add(newLight);

  const helper = new THREE.DirectionalLightHelper(newLight, 0x00ff00);
  helper.userData.lightUuid = newLight.uuid;
  scene.add(helper);
  helper.update();
};
export const addHemisphereLight = () => {
  const scene = (window as any).scene as THREE.Scene;
  const newLight = new THREE.HemisphereLight(0xffffff, 0.6);
  newLight.position.set(0, 5, 0);
  newLight.castShadow = true;

  newLight.rotation.x = -Math.PI / 2;

  scene.add(newLight);

  const helper = new THREE.HemisphereLightHelper(
    newLight as THREE.HemisphereLight,
    5,
    0xff0000
  );
  helper.userData.lightUuid = newLight.uuid;
  scene.add(helper);
  helper.update();
};

export const addAmbientLight = () => {
  const scene = (window as any).scene as THREE.Scene;
  const newLight = new THREE.AmbientLight(0xffffff, 0.6);
  newLight.position.set(0, 5, 0);
  newLight.castShadow = true;

  newLight.rotation.x = -Math.PI / 2;

  scene.add(newLight);
  /* const helper = new THREE.AmbientLightHelper(newLight, 0x00ff00);
  helper.userData.lightUuid = newLight.uuid;
  scene.add(helper);
  helper.update(); */
};

export const getSceneConfiguration = (selectedEnvironment : string) => {
  const camera = (window as any).camera as THREE.PerspectiveCamera;
  const scene = (window as any).scene as THREE.Scene;
  const orbit = (window as any).orbit as OrbitControls;

  const sceneLights = scene.children.filter(
    (light: any) =>
      light.type === 'AmbientLight' ||
      light.type === 'HemisphereLight' ||
      light.type === 'SpotLight' ||
      light.type === 'DirectionalLight'
  ) as SupportedTypes[];

  const configuration: SceneConfiguration = {
    orbitRotate: orbit.autoRotate,
    camera: {
      position: {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      },
      rotation: {
        x: camera.rotation.x,
        y: camera.rotation.y,
        z: camera.rotation.z,
      },
      fov: camera.fov,
    },
    lights: sceneLights.map((light) => ({
      type: light.type as
        | 'AmbientLight'
        | 'DirectionalLight'
        | 'SpotLight'
        | 'HemisphereLight',
      color: light.color.getHex(),
      intensity: light.intensity,
      penumbra:
        'penumbra' in (light as any) ? (light as any).penumbra : undefined,
      angle: 'angle' in (light as any) ? (light as any).angle : undefined,
      distance:
        'distance' in (light as any) ? (light as any).distance : undefined,
      position: {
        x: light.position.x,
        y: light.position.y,
        z: light.position.z,
      },
      rotation: {
        x: light.rotation.x,
        y: light.rotation.y,
        z: light.rotation.z,
      },
    })),
    environment: selectedEnvironment || 'none',
    sRGBE:
      scene.background &&
      (scene.background as any).encoding === THREE.sRGBEncoding,
  };

  return configuration;
};
