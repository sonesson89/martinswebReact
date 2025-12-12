import React from 'react';
import styled from 'styled-components';

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const StyledSliderInput = styled.input`
  width: 100%;
  margin-top: 4px;
`;

const StyledContainer = styled.div``;
const StyledLabel = styled.label`
  display: block;
`;

export const Slider: React.FC<SliderProps> = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
}) => {
  const getRoundedValue = (val: number) => {
    const decimalPlaces = step.toString().split('.')[1]?.length || 0;
    return parseFloat(val.toFixed(decimalPlaces));
  };

  return (
    <StyledContainer>
      <StyledLabel>
        {label}: {getRoundedValue(value)}
      </StyledLabel>
      <StyledSliderInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          onChange(Number(e.target.value));
        }}
      />
    </StyledContainer>
  );
};

export default Slider;
