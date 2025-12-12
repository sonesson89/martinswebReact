import * as THREE from 'three';
import React, { useEffect, useState, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

import { Environment, environments } from './environments';
import {
  GoFullScreenButton,
  LoadingContainer,
  SetRotateButton,
  ThreeJSCanvasWrapper,
} from './Components';
import { LoadBoxFancy } from '../LoadBoxFancy';
import ThreeJSViewerControls from './ThreeJSViewerControls';
import styled from 'styled-components';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import { SupportedTypes } from './types';

const MainWrapper = styled.div`
  position: relative;
`;

const ThreeJSViewerContainer = styled.div<{
  $isLoading: boolean;
}>`
  opacity: ${(props) => (props.$isLoading ? 0 : 1)};
  transition: opacity 0.6s ease-in-out;
  height: ${(props) => (props.$isLoading ? 0 : 'auto')};
  position: relative;
`;

const LoadingLabel = styled.p`
  margin-top: 16px;
  font-size: 1.4em;
`;

type ThreeJSViewerProps = {
  path: string;
  enableOrbit?: boolean;
  cameraConfig?: {
    rotation: { x: number; y: number; z: number };
    position: { x: number; y: number; z: number };
  };
  childrenCallback?: (children: THREE.Object3D[]) => void;
  loopingAnimationsFilter?: (
    animations: THREE.AnimationClip[]
  ) => THREE.AnimationClip[];
  playOnceAnimationsFilter?: (
    animations: THREE.AnimationClip[]
  ) => THREE.AnimationClip[];
  orbitSettings?: {
    enablePan: boolean;
    enableRotate: boolean;
    enableZoom: boolean;
    maxDistance: number;
    minDistance: number;
  };
  clearColor?: any;
  lights?: SupportedTypes[];
  showAxes?: boolean;
  backgroundImagePath?: string;
  srgbEncoding?: boolean;
};

const ThreeJSViewer: React.FC<ThreeJSViewerProps> = ({
  path,
  enableOrbit = false,
  cameraConfig = null,
  childrenCallback = null,
  loopingAnimationsFilter = undefined,
  playOnceAnimationsFilter = undefined,
  orbitSettings = undefined,
  clearColor = 0x000000,
  lights = null,
  showAxes = false,
  backgroundImagePath = null,
  srgbEncoding = null,
}) => {
  let scene: THREE.Scene;
  let pmremGenerator: THREE.PMREMGenerator;
  let camera: THREE.PerspectiveCamera;
  let object: THREE.Object3D;
  let mixer: THREE.AnimationMixer;
  let animations: THREE.AnimationClip[];
  let orbit: OrbitControls;
  const clock = new THREE.Clock();
  let renderer: THREE.WebGLRenderer;
  let _lastCameraState: {
    position: THREE.Vector3;
    rotation: THREE.Euler;
  } | null = null;

  let neutralEnvironment: any;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const loadedRef = useRef(false);

  const [selectedEnvironment, setSelectedEnvironment] = useState<string | null>(
    null
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingEnvironment, setLoadingEnvironment] = useState<boolean>(false);

  const _logCameraState = (reason?: string) => {
    if (!camera) return;
    console.log(`camera changed${reason ? ` (${reason})` : ''}`, {
      position: {
        x: Number(camera.position.x.toFixed(6)),
        y: Number(camera.position.y.toFixed(6)),
        z: Number(camera.position.z.toFixed(6)),
      },
      rotation: {
        x: Number(camera.rotation.x.toFixed(6)),
        y: Number(camera.rotation.y.toFixed(6)),
        z: Number(camera.rotation.z.toFixed(6)),
      },
    });
  };

  function animate() {
    requestAnimationFrame(animate);
    if (mixer) mixer.update(clock.getDelta());
    if (_lastCameraState && camera) {
      if (
        !camera.position.equals(_lastCameraState.position) ||
        !camera.rotation.equals(_lastCameraState.rotation)
      ) {
        _logCameraState('animate');
        _lastCameraState.position.copy(camera.position);
        _lastCameraState.rotation.copy(camera.rotation);
      }
    }

    if (orbit) orbit.update();

    if (camera && scene) {
      renderer.render(scene, camera);
    }
  }

  const traverseMaterials = (
    object: THREE.Object3D,
    callback: (material: THREE.Material) => void
  ) => {
    object.traverse((node: any) => {
      if (!node.isMesh) return;
      node.near = 0.01;
      const materials = Array.isArray(node.material)
        ? node.material
        : [node.material];
      materials.forEach(callback);
    });
  };

  const updateTextureEncoding = (object: THREE.Object3D) => {
    const encoding = THREE.sRGBEncoding;
    traverseMaterials(object, (material: any) => {
      if (material.map) material.map.encoding = encoding;
      if (material.emissiveMap) material.emissiveMap.encoding = encoding;
      if (material.map || material.emissiveMap) material.needsUpdate = true;
    });
  };

  const addLights = () => {
    console.log('lights', lights);

    if (lights && lights.length > 0) {
      lights.forEach((light) => {
        let helper;

        if (light.type === 'SpotLight') {
          light.position.set(0, 0, 10);
          light.rotation.x = THREE.MathUtils.degToRad(0);
          light.add((light as THREE.SpotLight).target);
          (light as THREE.SpotLight).target.position.set(0, 0, -1);

          helper = new THREE.SpotLightHelper(light, 0x00ff00);
        } else if (light.type === 'HemisphereLight') {
          helper = new THREE.HemisphereLightHelper(
            light as THREE.HemisphereLight,
            5,
            0xff0000
          );
        } else if (light.type === 'AmbientLight') {
          // AmbientLight has no position or helper, skip
        } else if (light.type === 'DirectionalLight') {
          light.position.set(0, 0, 10);
          // Ensure target is added to scene
          if ((light as THREE.DirectionalLight).target) {
            scene.add((light as THREE.DirectionalLight).target);
          }
          helper = new THREE.DirectionalLightHelper(
            light as THREE.DirectionalLight,
            1,
            0x00ff00
          );
        }

        scene.add(light);

        if (helper) {
          helper.userData.lightUuid = light.uuid;
          scene.add(helper);
        }
      });
    }

    renderer.toneMapping = Number(THREE.LinearToneMapping);
    renderer.toneMappingExposure = Math.pow(2, 0);
  };

  const getCubeMapTexture = async (environment: Environment) => {
    const { id, path } = environment;

    // neutral (THREE.RoomEnvironment)
    if (id === 'neutral') {
      return { envMap: (window as any).neutralEnvironment };
    }

    // none
    if (id === '' || !path) {
      return { envMap: null };
    }

    const texture = await new Promise<THREE.Texture>((resolve, reject) => {
      new EXRLoader().load(path, resolve, undefined, reject);
    });
    const pmremGenerator = (window as any)
      .pmremGenerator as THREE.PMREMGenerator;
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    return { envMap };
  };

  const updateEnvironnment = () => {
    setLoadingEnvironment(true);
    const environment =
      Object.entries(environments).find(
        ([key, env]) => env.id === selectedEnvironment
      )?.[1] || environments.None;

    getCubeMapTexture(environment).then(({ envMap }) => {
      console.log('envMap', envMap);
      const scene = (window as any).scene as THREE.Scene;
      if (!scene) return;

      scene.environment = envMap;

      if (backgroundImagePath) {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(backgroundImagePath, (texture) => {
          scene.background = texture;
          if (srgbEncoding) {
            scene.background.encoding = THREE.sRGBEncoding;
          } else {
            scene.background.encoding = THREE.LinearEncoding;
          }
        });
      } else if (clearColor) {
        scene.background = new THREE.Color(clearColor);
      }

      setLoadingEnvironment(false);
    });
  };

  useEffect(() => {
    if (selectedEnvironment) {
      updateEnvironnment();
    }
  }, [selectedEnvironment]);

  const handleFullscreenChange = () => {
    const container = containerRef.current;
    const canvas = container?.querySelector('canvas');

    if (canvas) {
      const renderer = (window as any).renderer as THREE.WebGLRenderer;
      const camera = (window as any).camera as THREE.PerspectiveCamera;

      if (document.fullscreenElement) {
        // ENTERED FULL SCREEN
        renderer.setSize(window.innerWidth, window.innerHeight);

        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        renderer.setPixelRatio(pixelRatio);

        if (camera && (camera as any).isPerspectiveCamera) {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        }
      } else {
        // EXITED FULL SCREEN
        if (container && renderer) {
          let width = (container as HTMLElement).clientWidth || 800;
          let height = width / 1.7777777;
          renderer.setSize(width, height);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

          if (camera && (camera as any).isPerspectiveCamera) {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
          }
        }
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    if (path && !loadedRef.current) {
      loadedRef.current = true;

      const container = containerRef.current;
      if (!container) {
        return;
      }

      console.log('Initializing ThreeJSViewer for', path);

      document.addEventListener('fullscreenchange', handleFullscreenChange);

      scene = new THREE.Scene();

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      pmremGenerator = new THREE.PMREMGenerator(renderer);
      pmremGenerator.compileEquirectangularShader();

      (window as any).pmremGenerator = pmremGenerator;

      neutralEnvironment = pmremGenerator.fromScene(
        new RoomEnvironment()
      ).texture;

      (window as any).neutralEnvironment = neutralEnvironment;

      //updateEnvironnment();

      let width = (container as HTMLElement).clientWidth || 800;
      let height =
        (container as HTMLElement).clientHeight ||
        Math.round(width / 1.7777777);
      // If the container has zero height (modal hidden/layout issues), give it a sensible fallback
      if (!height || height <= 0) {
        height = Math.round(width / 1.7777777) || 450;
        (container as HTMLElement).style.height = `${height}px`;
      }
      renderer.setSize(width, height);
      // ensure canvas displays as block so CSS width/height apply predictably
      renderer.domElement.style.display = 'block';
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      addLights();

      const MANAGER = new THREE.LoadingManager();
      const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`;
      const DRACO_LOADER = new DRACOLoader(MANAGER).setDecoderPath(
        `${THREE_PATH}/examples/js/libs/draco/gltf/`
      );
      const KTX2_LOADER = new KTX2Loader(MANAGER).setTranscoderPath(
        `${THREE_PATH}/examples/js/libs/basis/`
      );
      const assetLoader = new GLTFLoader(MANAGER)
        .setDRACOLoader(DRACO_LOADER)
        .setKTX2Loader(KTX2_LOADER.detectSupport(renderer))
        .setMeshoptDecoder(MeshoptDecoder);

      let _lastCameraState: {
        position: THREE.Vector3;
        rotation: THREE.Euler;
      } | null = null;
      const _logCameraState = (reason?: string) => {
        if (!camera) return;
        /* console.log(`camera changed${reason ? ` (${reason})` : ''}`, {
          position: {
            x: Number(camera.position.x.toFixed(6)),
            y: Number(camera.position.y.toFixed(6)),
            z: Number(camera.position.z.toFixed(6)),
          },
          rotation: {
            x: Number(camera.rotation.x.toFixed(6)),
            y: Number(camera.rotation.y.toFixed(6)),
            z: Number(camera.rotation.z.toFixed(6)),
          },
        }); */
      };

      console.log('start loading gltf');
      assetLoader.load(
        path,
        function (gltf) {
          console.log('gltf', gltf);

          setSelectedEnvironment(environments.FootprintCourt.id);

          object = gltf.scene || gltf.scenes[0];
          object.name = 'main_object';
          object.updateMatrixWorld();

          object.receiveShadow = true;
          object.castShadow = true;

          gltf.scene.traverse(function (object) {
            (object as any).frustumCulled = false;
          });

          mixer = new THREE.AnimationMixer(scene);
          animations = gltf.animations;

          //const fov = options.preset === Preset.ASSET_GENERATOR ? (0.8 * 180) / Math.PI : 60;
          camera = new THREE.PerspectiveCamera(
            60,
            (container as HTMLElement).clientWidth /
              (container as HTMLElement).clientHeight,
            0.001,
            1000
          );
          // sensible default so model is visible even if no camera provided
          camera.position.set(0, 0, 5);

          if (enableOrbit) {
            orbit = new OrbitControls(camera, renderer.domElement);

            if (orbitSettings) {
              (
                Object.keys(orbitSettings) as Array<keyof typeof orbitSettings>
              ).forEach((key) => {
                (orbit as any)[key] = orbitSettings[key];
              });
            }

            (window as any).orbit = orbit;
            console.log('SET SCENE TO WINDOW');
            (window as any).scene = scene;
            (window as any).renderer = renderer;
            (window as any).camera = camera;

            orbit.update();
          }

          if (cameraConfig) {
            camera.position.x = cameraConfig.position.x;
            camera.position.y = cameraConfig.position.y;
            camera.position.z = cameraConfig.position.z;

            camera.rotation.x = cameraConfig.rotation.x;
            camera.rotation.y = cameraConfig.rotation.y;
            camera.rotation.z = cameraConfig.rotation.z;
          }

          // initialize camera-state tracker so animate() can detect changes
          _lastCameraState = {
            position: new THREE.Vector3().copy((camera as any).position),
            rotation: new THREE.Euler().copy((camera as any).rotation),
          };

          // OrbitControls emits 'change' when the user interacts — log those changes immediately
          if (orbit) {
            orbit.addEventListener('change', () => {
              if (
                _lastCameraState &&
                (!camera.position.equals(_lastCameraState.position) ||
                  !camera.rotation.equals(_lastCameraState.rotation))
              ) {
                _logCameraState('orbit');
                _lastCameraState.position.copy(camera.position);
                _lastCameraState.rotation.copy(camera.rotation);
              }
            });
          }

          if (childrenCallback) {
            childrenCallback(gltf.scene.children);
          }

          gltf.scene.children
            .filter((x) => x.name.includes('Cloud'))
            .forEach((child) => {
              const mat = new THREE.MeshStandardMaterial({ color: 0xffffff });
              (child as any).material = mat;
            });
          const box = new THREE.Box3().setFromObject(object);
          const center = box.getCenter(new THREE.Vector3());
          // center the object at the origin (more robust than the previous additive math)
          try {
            object.position.sub(center);
            object.updateMatrixWorld(true);
          } catch (e) {}
          (window as any).object = object;

          // Add object to scene (keep lights and targets separate so they don't follow object transforms)
          scene.add(object);

          // collect lights for the inspector UI and keep references in a map
          /* const lights = scene.children.filter((n: any) => n && n.isLight);
          if (lights.length > 0) {
            const firstLight = lights[0] as any;

            const worldPos = new THREE.Vector3();
            if (typeof firstLight.getWorldPosition === 'function')
              firstLight.getWorldPosition(worldPos);
            else
              worldPos.set(
                firstLight.position?.x ?? 0,
                firstLight.position?.y ?? 0,
                firstLight.position?.z ?? 0
              );
          } */

          // Optional axes helper to show X/Y/Z directions in the viewport
          if (showAxes) {
            const bboxSize = box.getSize(new THREE.Vector3()).length();
            const axesSize = Math.max(bboxSize * 0.35, 0.5);
            const axes = new THREE.AxesHelper(axesSize);
            axes.name = 'axes_helper';
            // keep axes at scene origin (object already centered)
            axes.position.set(0, 0, 0);
            scene.add(axes);
          }

          // Ensure orbit (camera controls) rotates around the object center, not the world origin
          orbit.update();

          updateTextureEncoding(object);

          if (loopingAnimationsFilter) {
            loopingAnimationsFilter(animations).forEach((animation) => {
              const clip = mixer.clipAction(animation);
              clip.reset().play();
            });
          }
          if (playOnceAnimationsFilter) {
            playOnceAnimationsFilter(animations).forEach((animation) => {
              const clip = mixer.clipAction(animation);
              clip.setLoop(THREE.LoopOnce, 1);
              clip.clampWhenFinished = true;
              clip.reset().play();
            });
          }

          setLoading(false);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
      animate();
    }
  }, [path]);

  return (
    <MainWrapper>
      {!loadedRef.current && (
        <LoadingContainer>
          <LoadBoxFancy />
          <LoadingLabel>Loading 3D Model</LoadingLabel>
        </LoadingContainer>
      )}
      <ThreeJSViewerContainer
        $isLoading={loadedRef.current === false || loadedRef.current === null}
      >
        <ThreeJSCanvasWrapper ref={containerRef} />
        <SetRotateButton
          onClick={() => {
            (window as any).orbit.autoRotate = !(window as any).orbit
              .autoRotate;
          }}
        >
          <ThreeSixtyIcon />
        </SetRotateButton>
        <GoFullScreenButton
          onClick={() => {
            const canvas = containerRef.current?.querySelector('canvas');
            if (canvas) {
              canvas.requestFullscreen();
            }
          }}
        >
          <FullscreenIcon />
        </GoFullScreenButton>
        <ThreeJSViewerControls
          loading={loading || loadingEnvironment}
          selectedEnvironment={selectedEnvironment}
          onEnvironmentChange={setSelectedEnvironment}
          environments={environments}
        />
      </ThreeJSViewerContainer>
    </MainWrapper>
  );
};

export default ThreeJSViewer;
