import React from 'react';
import styled from 'styled-components';

interface ToggleCheckboxProps {
  id: string;
}

const ToggleCheckbox = ({ id }: ToggleCheckboxProps) => {
  return (
    <ToggleCheckboxWrapper>
      <Slider id={id} /><Notch htmlFor={id}></Notch>
    </ToggleCheckboxWrapper>
  );
}

const ToggleCheckboxWrapper = styled.div`
  display: inline-block;
`;

const Notch = styled.label`
  cursor: pointer;
  position: relative;
  width: 35px;
	height: 15px;
	background: #e4e5df;
	display: block;
	border-radius: 100px;
  &::after {
    content: '';
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    transition: 0.3s;
    position: absolute;
    top: 0px;
    left: 0px;
	}
`;

const Slider = styled.input.attrs({
  type: 'checkbox',
})`
  height: 0;
  width: 0;
  visibility: hidden;
  background: #6f6f6f;
  &:checked + ${Notch} {
    background: #5f97fb;
    &::after{
      left: calc(100% - 10px);
    }
  }
`;



export default ToggleCheckbox;