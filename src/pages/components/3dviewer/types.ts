import * as THREE from 'three';
import { Environment } from './environments';

export type SupportedTypes =
  | THREE.AmbientLight
  | THREE.DirectionalLight
  | THREE.SpotLight
  | THREE.HemisphereLight;

export interface SceneConfiguration {
  camera: {
    rotation: { x: number; y: number; z: number };
    position: { x: number; y: number; z: number };
    fov: number;
  };
  lights: {
    type: 'AmbientLight' | 'DirectionalLight' | 'SpotLight' | 'HemisphereLight';
    color: number;
    intensity: number;
    penumbra?: number;
    angle?: number;
    distance?: number;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
  }[];
  environment: Environment['id'];
  sRGBE: boolean | null;
  orbitRotate?: boolean;
  orbitSettings?: {
    enablePan: boolean;
    enableRotate: boolean;
    enableZoom: boolean;
    maxDistance: number;
    minDistance: number;
  };
}
