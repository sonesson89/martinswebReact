import React from 'react';
import styled from 'styled-components';

interface ColorSelectorProps {
  onChange?: (color: string) => void;
  color: string;
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

const ColorSelector: React.FC<ColorSelectorProps> = ({ onChange, color }) => {
  return (
    <StyledContainer>
      <StyledLabel>Color</StyledLabel>
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
  );
};

export default ColorSelector;
