import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let object: THREE.Object3D,
  pmremGenerator: THREE.PMREMGenerator,
  directionalLight: THREE.DirectionalLight,
  orbit: OrbitControls,
  camera: THREE.Camera,
  mixer: THREE.AnimationMixer,
  animations: THREE.AnimationClip[];
const clock = new THREE.Clock();

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

export const initiate3dModel = (
  gltfSource: string,
  containerName: string,
  enableOrbit = true,
  cameraConfig: any = null,
  childrenCallback: ((children: THREE.Object3D[]) => void) | null = null,
  loopingAnimationsFilter:
    | ((animations: THREE.AnimationClip[]) => THREE.AnimationClip[])
    | undefined = undefined,
  playOnceAnimationsFilter:
    | ((animations: THREE.AnimationClip[]) => THREE.AnimationClip[])
    | undefined = undefined,
  orbitSettings: any = false,
  clearColor = 0x000000
) => {
  console.log('initiate3dModel', gltfSource, containerName);

  const container = document.querySelector(containerName);
  if (!container || container.innerHTML !== '') {
    return;
  }

  const bbox = container.getBoundingClientRect();
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  //const neutralEnvironment = pmremGenerator.fromScene(new RoomEnvironment()).texture;
  //scene.environment = neutralEnvironment;
  renderer.setSize(bbox.width, bbox.height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setClearColor(clearColor);
  //renderer.setClearAlpha(0);
  container.appendChild(renderer.domElement);

  // Create a loading overlay (hidden/updated by LoadingManager callbacks)
  try {
    const cs = window.getComputedStyle(container as Element);
    if (!cs || cs.position === 'static') {
      (container as HTMLElement).style.position = 'relative';
    }
  } catch (e) {}

  const loadingOverlay = document.createElement('div');
  loadingOverlay.style.position = 'absolute';
  loadingOverlay.style.top = '0';
  loadingOverlay.style.left = '0';
  loadingOverlay.style.width = '100%';
  loadingOverlay.style.height = '100%';
  loadingOverlay.style.display = 'flex';
  loadingOverlay.style.alignItems = 'center';
  loadingOverlay.style.justifyContent = 'center';
  loadingOverlay.style.background = 'rgba(0,0,0,0.5)';
  loadingOverlay.style.color = '#fff';
  loadingOverlay.style.zIndex = '9999';
  loadingOverlay.style.pointerEvents = 'none';
  loadingOverlay.innerHTML = `
    <div style="text-align:center">
      <div style="border:4px solid rgba(255,255,255,0.18);border-top-color:#fff;border-radius:50%;width:40px;height:40px;animation:mw-spin 1s linear infinite;margin:0 auto"></div>
      <div class="mw-loading-text" style="margin-top:8px;font-size:13px">Loading...</div>
    </div>
    <style>@keyframes mw-spin{to{transform:rotate(360deg)}}</style>
  `;
  loadingOverlay.style.display = 'none';
  (container as HTMLElement).appendChild(loadingOverlay);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff, 0.3);
  spotLight.position.set(0, 30, 30);

  /* spotLight.castShadow = true;
    spotLight.position.set(0, 100, 20)
    spotLight.shadow.mapSize.width = 512;
    spotLight.shadow.mapSize.height = 512;
    spotLight.shadow.radius = 20;
    spotLight.shadow.bias = -0.0005;
    spotLight.shadow.camera.left = -20;
    spotLight.shadow.camera.right = 20;
    spotLight.shadow.camera.top = 15;
    spotLight.shadow.camera.bottom = -15;
    spotLight.travelRight = true; */

  scene.add(spotLight);
  /* const spotLightHelper = new THREE.SpotLightHelper(spotLight, 1);
    scene.add(spotLightHelper); */

  directionalLight = new THREE.DirectionalLight(
    0xffffff,
    1.4
  ) as THREE.DirectionalLight & { travelRight: boolean };
  directionalLight.castShadow = true;
  directionalLight.position.set(0, 100, 20);
  directionalLight.shadow.mapSize.width = 512;
  directionalLight.shadow.mapSize.height = 512;
  directionalLight.shadow.radius = 20;
  directionalLight.shadow.bias = -0.0005;
  directionalLight.shadow.camera.left = -20;
  directionalLight.shadow.camera.right = 20;
  directionalLight.shadow.camera.top = 15;
  directionalLight.shadow.camera.bottom = -15;
  (directionalLight as any).travelRight = true;
  scene.add(directionalLight);
  (window as any).directionalLight = directionalLight;
  /* const helper2 = new THREE.DirectionalLightHelper(directionalLight, 5);
    scene.add(helper2);
    const helper = new THREE.CameraHelper(directionalLight.shadow.camera)
    scene.add(helper); */

  /* const hemiLight = new THREE.HemisphereLight(0xffffff, 0x9420ab, 0.2);
    scene.add(hemiLight); */

  const MANAGER = new THREE.LoadingManager();
  // show/hide/update the loading overlay using the manager callbacks
  MANAGER.onStart = function () /* url?: string,
    itemsLoaded?: number,
    itemsTotal?: number */
  {
    try {
      loadingOverlay.style.display = 'flex';
      const text = loadingOverlay.querySelector(
        '.mw-loading-text'
      ) as HTMLElement;
      if (text) text.textContent = 'Loading...';
    } catch (e) {}
  };
  MANAGER.onProgress = function (
    _url?: string,
    itemsLoaded?: number,
    itemsTotal?: number
  ) {
    try {
      const text = loadingOverlay.querySelector(
        '.mw-loading-text'
      ) as HTMLElement;
      if (!text) return;
      if (
        typeof itemsLoaded === 'number' &&
        typeof itemsTotal === 'number' &&
        itemsTotal > 0
      ) {
        const pct = Math.round((itemsLoaded / itemsTotal) * 100);
        text.textContent = `Loading... ${pct}%`;
      } else {
        text.textContent = 'Loading...';
      }
    } catch (e) {}
  };
  MANAGER.onLoad = function () {
    try {
      loadingOverlay.style.display = 'none';
    } catch (e) {}
  };
  MANAGER.onError = function (_url?: string) {
    try {
      const text = loadingOverlay.querySelector(
        '.mw-loading-text'
      ) as HTMLElement;
      if (text) text.textContent = 'Error loading file';
      setTimeout(() => {
        try {
          loadingOverlay.style.display = 'none';
        } catch (e) {}
      }, 2000);
    } catch (e) {}
  };
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

  // camera change tracking state (initialized when camera is available)
  let _lastCameraState: {
    position: THREE.Vector3;
    rotation: THREE.Euler;
  } | null = null;
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

  assetLoader.load(
    gltfSource,
    function (gltf) {
      console.log('gltf', gltf);

      object = gltf.scene || gltf.scenes[0];

      object.receiveShadow = true;
      object.castShadow = true;

      gltf.scene.traverse(function (object) {
        (object as any).frustumCulled = false;
      });

      mixer = new THREE.AnimationMixer(scene);
      animations = gltf.animations;

      if (gltf.cameras && gltf.cameras.length > 0) {
        camera = gltf.cameras[0];
        (camera as any).near = 0.001;
        (camera as any).far = 3000;
      } else {
        camera = new THREE.PerspectiveCamera(
          60,
          bbox.width / bbox.height,
          0.001,
          1000
        );
      }

      (window as any).camera = camera;

      if (enableOrbit) {
        orbit = new OrbitControls(camera, renderer.domElement);

        if (orbitSettings) {
          Object.keys(orbitSettings).forEach((key) => {
            (orbit as any)[key] = orbitSettings[key];
          });
        }

        (window as any).orbit = orbit;

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
      object.position.x += object.position.x - center.x;
      object.position.y += object.position.y - center.y;
      object.position.z += object.position.z - center.z;
      (window as any).object = object;
      scene.add(object);

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
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  function animate() {
    requestAnimationFrame(animate);
    if (mixer) mixer.update(clock.getDelta());
    // detect programmatic camera changes (not caused by OrbitControls)
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
    if (camera && scene) {
      renderer.render(scene, camera);
    }
  }

  animate();
};
