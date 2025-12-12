import * as THREE from 'three';

export type SupportedTypes =
  | THREE.AmbientLight
  | THREE.DirectionalLight
  | THREE.SpotLight
  | THREE.HemisphereLight;
