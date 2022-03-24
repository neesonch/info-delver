import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleCheckbox from '../ToggleCheckbox';
import NumberDropdown from './NumberDropdown';

interface ToggleNumberDropdownProps {
  label: string;
  id: string;
  min: number;
  max: number;
}

const ToggleNumberDropdown = ({ label, id, min, max }: ToggleNumberDropdownProps) => {

  const [active, setActive] = useState(false);

  return (
    <ToggleNumberDropdownWrapper>
      <ToggleLabel htmlFor={id}>{label}</ToggleLabel>
      <NumberDropdown min={min} max={max} active={active} />
      <ToggleCheckboxWrapper >
        <ToggleCheckbox id={id} handleToggle={setActive} />
      </ToggleCheckboxWrapper>
    </ToggleNumberDropdownWrapper>
  )
}

const ToggleNumberDropdownWrapper = styled.div`
  display: flex
`;

const ToggleLabel = styled.label`
  display: flex;
  padding-left: 10%;
  flex-grow: 6;
`

const ToggleCheckboxWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-left: auto;
  margin-right: 5px;
  margin-top: 3px;
`

export default ToggleNumberDropdown;