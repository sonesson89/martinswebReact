import styled, { css } from 'styled-components';

export const ThreeJSCanvasWrapper = styled.div`
  aspect-ratio: 1.7777777777777777 !important;
  width: 100%;

  canvas {
    width: 100% !important;
    aspect-ratio: 1.7777777777777777 !important;
  }
`;

export const ControlsOverlay = styled.div<{ $isHidden?: boolean }>`
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 8px 20px;
  width: 100%;

  input[type='range'] {
    width: 100%;
  }

  select {
    width: 100%;
    border-radius: 6px;
    padding: 2px 6px;
    height: 32px;
  }
  input[type='color'] {
    width: 50px;
    height: 25px;
  }

  transition:
    height 0.4s,
    max-height 0.4s,
    padding 0.4s;

  ${(props) => {
    if (props.$isHidden) {
      return css`
        max-height: 0;
        overflow: hidden;
        padding: 0;
        height: 0;
      `;
    }
    return '';
  }}
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;

export const ThreeJSViewerButton = styled.button`
  position: absolute;
  padding: 6px 8px;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  box-shadow: 0 0 14px #0000009e;
  opacity: 0.7;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 14px #ff0000;
    opacity: 1;
  }
`;

export const ShowControlsButton = styled(ThreeJSViewerButton)`
  left: 8px;
  top: -43px;
`;

export const GoFullScreenButton = styled(ThreeJSViewerButton)`
  top: 6px;
  right: 6px;
  padding: 3px;
  width: 32px;
  height: 32px;
`;

export const SetRotateButton = styled(ThreeJSViewerButton)`
  right: 45px;
  top: 6px;
  padding: 3px;
  width: 32px;
  height: 32px;
`;
