import React from 'react';
import styled from 'styled-components';

interface ToggleCheckboxProps {
  id: string;
  handleToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleCheckbox = ({ id, handleToggle }: ToggleCheckboxProps) => {

  return (
    <ToggleCheckboxWrapper>
      <Handle id={id} onChange={(e) => { if (handleToggle) { handleToggle(e.target.checked) } }} /><Notch htmlFor={id}></Notch>
    </ToggleCheckboxWrapper >
  );
}

const ToggleCheckboxWrapper = styled.div`
  display: flex;
`;

const Notch = styled.label`
  cursor: pointer;
  position: relative;
  width: 35px;
	height: 15px;
	background: var(--props-inactive-toggle-color);
	display: block;
	border-radius: 100px;
  &::after {
    content: '';
    width: 15px;
    height: 15px;
    background: var(--props-toggle-handle-color);
    border-radius: 50%;
    transition: 0.3s;
    position: absolute;
    top: 0px;
    left: 0px;
	}
`;

const Handle = styled.input.attrs({
  type: 'checkbox'
})`
  position: fixed;
  width: 1px;
  height: 1px;
  top: -5px;
  left: -5px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
  &:focus-visible + ${Notch} {
    -webkit-box-shadow:inset 0px 0px 0px 2px var(--props-focus-ring-color);
    -moz-box-shadow:inset 0px 0px 0px 2px var(--props-focus-ring-color);
    box-shadow:inset 0px 0px 0px 2px var(--props-focus-ring-color);
  }
  &:checked + ${Notch} {
    background: var(--props-active-toggle-color);
    &::after{
      left: calc(100% - 15px);
    }
  }
`;



export default ToggleCheckbox;