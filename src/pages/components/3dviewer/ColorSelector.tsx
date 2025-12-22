import React from 'react';
import { Tooltip } from 'react-tooltip';
import styled from 'styled-components';

interface ColorSelectorProps {
  color: string;
  label?: string;
  onChange?: (color: string) => void;
  tooltipContent?: string;
  tooltipId?: string;
}

const StyledContainer = styled.div`
  margin-bottom: 6px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
`;

const StyledSliderInput = styled.input`
  width: 100%;
  margin-top: 4px;
  border: none;
  border-radius: 6px;
  outline: none;
`;

const ColorSelector: React.FC<ColorSelectorProps> = ({
  onChange,
  color,
  label = null,
  tooltipContent = null,
  tooltipId = null,
}) => {
  const extraProps: { [key: string]: string } = {};
  if (tooltipContent && tooltipId) {
    extraProps['data-tooltip-id'] = tooltipId;
    extraProps['data-tooltip-content'] = tooltipContent;
  }

  return (
    <>
      <StyledContainer {...extraProps}>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledSliderInput
          type="color"
          value={color}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
        />
      </StyledContainer>
      {tooltipContent && tooltipId ? (
        <Tooltip
          opacity={1}
          positionStrategy="fixed"
          place="bottom"
          key={tooltipId}
          id={tooltipId}
          style={{
            zIndex: '999999',
            textAlign: 'center',
            color: 'black',
            background: 'white',
            fontSize: '14px',
            minWidth: '140px',
            fontWeight: '600',
            borderRadius: '0px',
            opacity: '1',
            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.4))',
          }}
        />
      ) : null}
    </>
  );
};

export default ColorSelector;
