import { SceneConfiguration } from "../../components/3dviewer/types";

export const orcSceneConfiguration: SceneConfiguration = {
  "orbitRotate": true,
  "camera": {
    "position": {
      "x": -0.8443003557344836,
      "y": 0.6342684564183438,
      "z": 3.7136468176524935
    },
    "rotation": {
      "x": -0.204827623311423,
      "y": -0.1933718813293874,
      "z": -0.03990019519633305
    },
    "fov": 60
  },
  "lights": [
    {
      "type": "SpotLight",
      "color": 16777215,
      "intensity": 5.55,
      "penumbra": 0.3,
      "angle": 0.3665191429188092,
      "distance": 16,
      "position": {
        "x": 0,
        "y": -0.15,
        "z": 5.4
      },
      "rotation": {
        "x": 0,
        "y": 0,
        "z": 0
      }
    },
    {
      "type": "SpotLight",
      "color": 16777215,
      "intensity": 6.54,
      "penumbra": 0.3,
      "angle": 0.39269908169872414,
      "distance": 28,
      "position": {
        "x": 0,
        "y": -1.55,
        "z": -11.9
      },
      "rotation": {
        "x": 3.0543261909900767,
        "y": 0,
        "z": 0
      }
    }
  ],
  "environment": "neutral",
  "sRGBE": false
}