import * as THREE from 'three';
import React, { useEffect, useState } from 'react';
import { ControlsOverlay, ShowControlsButton } from './Components';
import { Environment } from './environments';
import Slider from './Slider';
import ColorSelector from './ColorSelector';
import styled from 'styled-components';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddIcon from '@mui/icons-material/Add';
import { SceneConfiguration, SupportedTypes } from './types';
import {
  addAmbientLight,
  addDirectionalLight,
  addHemisphereLight,
  addSpotlight,
  getSceneConfiguration,
} from './helpers';

type ThreeJSViewerControlsProps = {
  loading: boolean;
  onEnvironmentChange: (envId: string) => void;
  environments: Record<string, Environment>;
  selectedEnvironment: string | null;
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  > div {
    flex-grow: 1;
    max-width: 20%;
  }
`;

const CloseButton = styled.div`
  flex: 1;
  font-weight: 600;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;

  &:hover {
    svg {
      fill: red;
    }
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

const ControlsButton = styled.button`
  border-radius: 6px;
  padding: 2px 6px;
  height: 32px;
`;

const RemoveButton = styled(ControlsButton)`
  background: #db1d1d;
  color: white;

  &:hover {
    background: #ff4c4c;
  }
`;
const AddButton = styled(ControlsButton)`
  background: #27a41c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #28c328;
  }
`;
const Checkbox = styled.input`
  width: 30px;
  height: 30px;
`;

const ThreeJSViewerControls: React.FC<ThreeJSViewerControlsProps> = ({
  loading,
  onEnvironmentChange,
  environments,
  selectedEnvironment,
}) => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const [lightProps, setLightProps] = useState<{
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    intensity: number;
    distance: number | null;
    angle: number | null;
    penumbra: number | null;
    color: string;
  }>({
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    intensity: 1,
    distance: 12,
    angle: 1,
    penumbra: 0.1,
    color: '#ffffff',
  });

  const [selectedLight, setSelectedLight] = useState<string | null>(null);
  const [lights, setLights] = useState<SupportedTypes[] | null>(null);
  const [useSrgbEncoding, setUseSrgbEncoding] = useState<boolean>(false);

  let loaded = false;

  useEffect(() => {
    if (loading) return;
    if (!loaded) {
      loaded = true;
      const scene = (window as any).scene as THREE.Scene;
      if (scene) {
        const sceneLights = scene.children.filter(
          (light: any) =>
            light.type === 'AmbientLight' ||
            light.type === 'HemisphereLight' ||
            light.type === 'SpotLight' ||
            light.type === 'DirectionalLight'
        ) as SupportedTypes[];
        setLights(sceneLights);
        if (sceneLights.length > 0) {
          setSelectedLight(sceneLights[0].uuid || null);
        }
        if (
          scene.background &&
          (scene.background as any).encoding === THREE.sRGBEncoding
        ) {
          setUseSrgbEncoding(true);
        } else {
          setUseSrgbEncoding(false);
        }
      }
    }
  }, [loading]);

  useEffect(() => {
    const scene = (window as any).scene as THREE.Scene;
    if (scene) {
      const helpers = scene.children.filter(
        (x) =>
          x.type === 'SpotLightHelper' ||
          x.type === 'AxesHelper' ||
          x.type === 'DirectionalLightHelper' ||
          x.type === 'AmbientLightHelper' ||
          x.type === 'HemisphereLightHelper'
      );
      helpers.forEach((x) => (x.visible = isDisplayed));
    }
  }, [loading, isDisplayed]);

  useEffect(() => {
    if (lights) {
      const light = lights.find((l) => l.uuid === selectedLight);
      if (light) {
        setLightProps({
          position: {
            x: light.position.x,
            y: light.position.y,
            z: light.position.z,
          },
          rotation: {
            x: THREE.MathUtils.radToDeg(light.rotation.x),
            y: THREE.MathUtils.radToDeg(light.rotation.y),
            z: THREE.MathUtils.radToDeg(light.rotation.z),
          },
          intensity: light.intensity ?? 1,
          distance:
            'distance' in (light as any) ? (light as any).distance : null,
          angle: 'angle' in (light as any) ? (light as any).angle : null,
          penumbra:
            'penumbra' in (light as any) ? (light as any).penumbra : null,
          color: light.color ? `#${light.color.getHexString()}` : '#ffffff',
        });
      }
    }
  }, [selectedLight]);

  const getCurrentLight = (): any => {
    const light = ((window as any).scene as THREE.Scene).children.find(
      (x) => x.uuid === selectedLight
    );
    return light;
  };

  const updateLightPosition = (axel: 'x' | 'y' | 'z', value: number) => {
    setLightProps((p) => ({
      ...p,
      position: { ...p.position, [axel]: value },
    }));

    const light = getCurrentLight();

    if (light) {
      light.position[axel] = value;
      updateHelperForLight(light);
    }
  };

  const updateLightRotation = (axel: 'x' | 'y' | 'z', value: number) => {
    setLightProps((p) => ({
      ...p,
      rotation: { ...p.rotation, [axel]: value },
    }));

    const light = getCurrentLight();

    if (light) {
      light.rotation[axel] = THREE.MathUtils.degToRad(value);
      light.updateMatrixWorld();
      updateHelperForLight(light);
    }
  };

  const updateHelperForLight = (light: any) => {
    const helper = ((window as any).scene as THREE.Scene).children.find(
      (x: any) =>
        x.type.endsWith('Helper') && x.userData.lightUuid === light.uuid
    );
    if (helper) {
      (helper as any).update();
    }
  };

  const updateLights = () => {
    const scene = (window as any).scene as THREE.Scene;
    const sceneLights = scene.children.filter(
      (light: any) =>
        light.type === 'AmbientLight' ||
        light.type === 'HemisphereLight' ||
        light.type === 'SpotLight' ||
        light.type === 'DirectionalLight'
    ) as SupportedTypes[];
    setLights(sceneLights);
  };

  return (
    <>
      {!isDisplayed ? (
        <ControlsOverlay
          style={{
            padding: 0,
          }}
        >
          <ShowControlsButton
            onClick={() => {
              setIsDisplayed(true);
            }}
          >
            Controls
          </ShowControlsButton>
        </ControlsOverlay>
      ) : null}
      <ControlsOverlay $isHidden={!isDisplayed}>
        <CloseButton
          onClick={() => {
            setIsDisplayed(false);
          }}
        >
          <HighlightOffIcon />
        </CloseButton>
        <div style={{ fontWeight: 600 }}>3D Scene Controls</div>
        <Row style={{ alignItems: 'end', gap: '30px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: 4 }}>
              Select environment
            </label>
            <select
              value={selectedEnvironment ?? ''}
              onChange={(e) => {
                onEnvironmentChange(e.target.value);
              }}
            >
              {Object.keys(environments).map((key) => {
                const env = (environments as any)[key];
                return (
                  <option key={env.id} value={env.id}>
                    {env.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Checkbox
              type="checkbox"
              checked={useSrgbEncoding}
              onChange={() => {
                const newValue = !useSrgbEncoding;
                setUseSrgbEncoding(newValue);

                const scene = (window as any).scene as THREE.Scene;
                const background = scene.background as any;

                if (background && background.encoding !== undefined) {
                  if (newValue) {
                    background.encoding = THREE.sRGBEncoding;
                  } else {
                    background.encoding = THREE.LinearEncoding;
                  }
                  background.needsUpdate = true;

                  // Force re-render
                  const renderer = (window as any)
                    .renderer as THREE.WebGLRenderer;
                  const camera = (window as any).camera;
                  if (renderer && camera) {
                    renderer.render(scene, camera);
                  }
                }
              }}
            />
            <p style={{ lineHeight: '30px' }}>sRGB Encoding</p>
          </div>
          <AddButton
            onClick={() => {
              addSpotlight();
              updateLights();
            }}
          >
            <AddIcon /> Spotlight
          </AddButton>
          <AddButton
            onClick={() => {
              addDirectionalLight();
              updateLights();
            }}
          >
            <AddIcon /> DirectionalLight
          </AddButton>
          <AddButton
            onClick={() => {
              addHemisphereLight();
              updateLights();
            }}
          >
            <AddIcon /> HemisphereLight
          </AddButton>
          <AddButton
            onClick={() => {
              addAmbientLight();
              updateLights();
            }}
          >
            <AddIcon /> AmbientLight
          </AddButton>
        </Row>
        <Row style={{ alignItems: 'end' }}>
          {lights && lights.length > 0 ? (
            <div>
              <label style={{ display: 'block', marginBottom: 4 }}>
                Select light
              </label>
              <select
                value={selectedLight || ''}
                onChange={(e) => {
                  const scene = (window as any).scene as THREE.Scene;
                  const light = scene.children.find(
                    (x: any) => x.uuid === e.target.value
                  );
                  setSelectedLight(light ? light.uuid : null);
                }}
              >
                {lights &&
                  lights.length > 0 &&
                  lights.map((l: any, i: number) => (
                    <option key={i} value={l.uuid}>
                      light {i + 1} - {l.type || l.constructor?.name}
                    </option>
                  ))}
              </select>
            </div>
          ) : null}
          {selectedLight ? (
            <RemoveButton
              onClick={() => {
                const scene = (window as any).scene as THREE.Scene;
                const light = scene.children.find(
                  (x: any) => x.uuid === selectedLight
                );
                if (light) {
                  // Remove target if it's a SpotLight or DirectionalLight
                  if ((light as any).target) {
                    scene.remove((light as any).target);
                  }
                  scene.remove(light);
                  const helpers = scene.children.filter(
                    (x: any) =>
                      x.type.endsWith('Helper') &&
                      x.userData?.lightUuid === selectedLight
                  );
                  helpers.forEach((h: any) => scene.remove(h));

                  const filteredLights: SupportedTypes[] = (
                    lights ?? []
                  ).filter((x: any) => x.uuid !== selectedLight);
                  setLights(filteredLights.length > 0 ? filteredLights : null);
                  setSelectedLight(
                    filteredLights.length > 0 ? filteredLights[0].uuid : null
                  );
                }
              }}
            >
              Remove light
            </RemoveButton>
          ) : null}
        </Row>

        {selectedLight ? (
          <>
            <Row>
              <Slider
                min={-20}
                max={20}
                step={0.05}
                value={lightProps.position.x}
                label="Position X"
                onChange={(x) => updateLightPosition('x', x)}
              />
              <Slider
                min={-20}
                max={20}
                step={0.05}
                value={lightProps.position.z}
                label="Position Y"
                onChange={(val) => updateLightPosition('z', val)}
              />
              <Slider
                min={-20}
                max={20}
                step={0.05}
                value={lightProps.position.y}
                label="Position Z"
                onChange={(val) => updateLightPosition('y', val)}
              />

              {!['DirectionalLight', 'HemisphereLight'].includes(
                lights?.find((l) => l.uuid === selectedLight)?.type ?? ''
              ) ? (
                <>
                  <Slider
                    min={0}
                    max={360}
                    step={1}
                    value={lightProps.rotation.x}
                    label="Rotation X"
                    onChange={(x) => updateLightRotation('x', x)}
                  />
                  <Slider
                    min={0}
                    max={360}
                    step={1}
                    value={lightProps.rotation.y}
                    label="Rotation Y"
                    onChange={(y) => updateLightRotation('y', y)}
                  />
                  <Slider
                    min={0}
                    max={360}
                    step={1}
                    value={lightProps.rotation.z}
                    label="Rotation Z"
                    onChange={(z) => updateLightRotation('z', z)}
                  />
                </>
              ) : null}
            </Row>
            <Row>
              {lightProps.distance !== null ? (
                <Slider
                  min={0}
                  max={40}
                  step={1}
                  value={lightProps.distance}
                  label="Distance"
                  onChange={(distance) => {
                    setLightProps((p) => ({ ...p, distance }));

                    const light = getCurrentLight();

                    if (light) {
                      (light as any).distance = distance;
                      updateHelperForLight(light);
                    }
                  }}
                />
              ) : null}
              {lightProps.angle !== null ? (
                <Slider
                  min={0}
                  max={90}
                  step={1}
                  value={THREE.MathUtils.radToDeg(lightProps.angle)}
                  label="Angle"
                  onChange={(angle) => {
                    setLightProps((p) => ({
                      ...p,
                      angle: THREE.MathUtils.degToRad(angle),
                    }));

                    const light = getCurrentLight();

                    if (light) {
                      (light as any).angle = THREE.MathUtils.degToRad(angle);
                      light.updateMatrixWorld();
                      updateHelperForLight(light);
                    }
                  }}
                />
              ) : null}
              <Slider
                min={0}
                max={20}
                step={0.03}
                value={lightProps.intensity}
                label="Intensity"
                onChange={(intensity) => {
                  setLightProps((p) => ({ ...p, intensity }));

                  const light = getCurrentLight();

                  if (light) {
                    (light as any).intensity = intensity;
                  }
                }}
              />
              <ColorSelector
                label="Color"
                color={lightProps.color}
                onChange={(color) => {
                  setLightProps((p) => ({ ...p, color }));

                  const light = getCurrentLight();

                  if (light) {
                    if ((light as any).isHemisphereLight) {
                      (light as THREE.HemisphereLight).groundColor.set(
                        '#222222'
                      );
                      (light as THREE.HemisphereLight).color.set(color);
                    } else {
                      (light as any).color.set(color);
                    }
                  }
                }}
              />

              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <Checkbox
                  type="checkbox"
                  checked={
                    lights?.find((x) => x.uuid === selectedLight)?.visible ||
                    false
                  }
                  onChange={() => {
                    const light = getCurrentLight();
                    const newValue = !light.visible;
                    light.visible = newValue;
                    if (
                      lights &&
                      lights.find((x) => x.uuid === selectedLight)
                    ) {
                      const copy = [...lights];
                      (
                        copy.find(
                          (x) => x.uuid === selectedLight
                        ) as SupportedTypes
                      ).visible = newValue;
                      setLights(copy);
                    }
                  }}
                />
                <p style={{ lineHeight: '30px' }}>Enabled</p>
              </div>
            </Row>
            <Row>
              {lightProps.penumbra !== null ? (
                <Slider
                  min={0}
                  max={1}
                  step={0.05}
                  value={lightProps.penumbra}
                  label="Penumbra"
                  onChange={(penumbra) => {
                    setLightProps((p) => ({ ...p, penumbra }));

                    const light = getCurrentLight();

                    if (light) {
                      (light as any).penumbra = penumbra;
                      updateHelperForLight(light);
                    }
                  }}
                />
              ) : null}
            </Row>
            <Row>
              <ControlsButton
                onClick={() => {
                  const configuration: SceneConfiguration =
                    getSceneConfiguration(selectedEnvironment || '');
                  console.log(JSON.stringify(configuration, null, 2));
                  navigator.clipboard.writeText(
                    JSON.stringify(configuration, null, 2)
                  );
                }}
              >
                Export current setup
              </ControlsButton>
            </Row>
          </>
        ) : null}
      </ControlsOverlay>
    </>
  );
};

export default ThreeJSViewerControls;
