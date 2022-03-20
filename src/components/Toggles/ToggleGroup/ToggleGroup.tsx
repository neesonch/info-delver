import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Toggle } from '../../../schema';
import ToggleCheckbox from '../ToggleCheckbox';
import ChildToggleList from './ChildToggleList';
import Chevron from './Chevron';
import getToggleComponent from '../../../utils/get-toggle-component';


interface GroupToggleProps {
  label: string;
  id: string
  childToggles?: Toggle[];
}

const GroupToggle = ({ label, id, childToggles }: GroupToggleProps) => {

  const [expanded, setExpanded] = useState(false);


  useEffect(() => {
    console.log(expanded); //DEBUG
  }, [expanded]);

  return (
    <GroupToggleWrapper>
      <ParentToggleWrapper>
        <ToggleLabel>{label}</ToggleLabel>
        <ToggleCheckbox id={`checkbox-${id}`} handleToggle={setExpanded} />
        <Chevron expanded={expanded} />
      </ParentToggleWrapper>
      {childToggles && <ChildToggleList toggles={childToggles} expanded={expanded} />}
    </GroupToggleWrapper>
  );
}

const GroupToggleWrapper = styled.div`

`;

const ParentToggleWrapper = styled.div`

`;

interface ChildrenToggleContainerProps {
  expanded: boolean;
}

// const ChildrenToggleContainer = styled.div<ChildrenToggleContainerProps>`
// transition: all ease-in-out 0.3s;
// ${props => props.expanded ? `
//   opacity: 1;
// `: `
//   opacity: 0
// `
//   };
// `;

const ToggleLabel = styled.div`
  display: inline-block;
`

export default GroupToggle;