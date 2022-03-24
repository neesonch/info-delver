import React from 'react';
import styled from 'styled-components';
import { Toggle } from 'schema';
import getToggleComponent from 'utils/get-toggle-component';

interface ChildToggleListProps {
  toggles: Toggle[]
  expanded: boolean;
}

const ChildToggleList = ({ toggles, expanded }: ChildToggleListProps) => {

  return (
    <ChildToggleListContainer expanded={expanded}>
      {expanded && toggles.map(toggle => {
        return (
          getToggleComponent(toggle)
        );
      })}
    </ChildToggleListContainer>
  );
}
export default ChildToggleList;

interface ChildrenToggleContainerProps {
  expanded: boolean;
}

const ChildToggleListContainer = styled.div<ChildrenToggleContainerProps>`
 transition: transform ease-in-out 0.3s;
 overflow: hidden;
 transform-origin: top;
 margin-left: 5%;
 margin-right: 10%;
 font-size: 0.875em;
 & > div{
   margin-top: 0.5em;
 }
 ${props => props.expanded ? `
 height: auto;
 transform: scaleY(1);
 `: `
 height: 0;
  transform: scaleY(0);
 `
  };
`