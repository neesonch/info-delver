import React, { useState } from 'react';
import styled from 'styled-components';
import { Toggle } from 'schema';
import ToggleCheckbox from '../ToggleSlider';
import ChildToggleList from './ChildToggleList';
import Chevron from './Chevron';


interface GroupToggleProps {
  label: string;
  id: string
  childToggles?: Toggle[];
}

const GroupToggle = ({ label, id, childToggles }: GroupToggleProps) => {

  const [expanded, setExpanded] = useState(false);

  const handleChevronClick = () => {
    setExpanded(!expanded);
    const siblingCheckbox = document.getElementById(id);
    siblingCheckbox && siblingCheckbox.click();
  }

  return (
    <GroupToggleWrapper>
      <ParentToggleWrapper>
        <ToggleLabel htmlFor={id}> {label}</ToggleLabel>
        <ToggleCheckbox id={id} handleToggle={setExpanded} />
        <Chevron expanded={expanded} handleClick={handleChevronClick} />
      </ParentToggleWrapper>
      {childToggles && <ChildToggleList toggles={childToggles} expanded={expanded} />}
    </GroupToggleWrapper >
  );
}

const GroupToggleWrapper = styled.div`

`;

const ParentToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.label`
  display: flex;
  padding-left: 10%;
  flex-grow: 6;
`

export default GroupToggle;