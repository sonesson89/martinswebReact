/* import * as THREE from 'three'; */

import { useEffect } from "react";

function Start() {
  useEffect(() => {    
    if (document.getElementById('sonesson3dlogo')) {
      (window as any).start3dAnimation();
    }
  }, []);

  return (
    <>
      <div className="centeringBox start">
        <div className="centeringInnerBox notSelectable">
          <div className="signature">
            <div id="sonesson3dlogooverlay">
            </div>
            <div id="sonesson3dlogo"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;