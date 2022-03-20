import React, { useState, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { Toggle } from '../../../schema';
import getToggleComponent from '../../../utils/get-toggle-component';

interface ChildToggleListProps {
  toggles: Toggle[]
  expanded: boolean;
}

const ChildToggleList = ({ toggles, expanded }: ChildToggleListProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
    console.log(dimensions); //DEBUG
  }, [expanded]);

  return (
    <ChildToggleListContainer ref={targetRef} expanded={expanded} height={dimensions.height}>
      {toggles.map(toggle => {
        return (
          getToggleComponent(toggle)
        )
      })}
    </ChildToggleListContainer>
  );
}
export default ChildToggleList;

interface ChildrenToggleContainerProps {
  expanded: boolean;
  height: number;
}

const ChildToggleListContainer = styled.div<ChildrenToggleContainerProps>`
 transition: all ease-in-out 0.3s;
 overflow: hidden;
 transform-origin: top;
 ${props => props.expanded ? `
 height: auto;
 transform: scaleY(1);
 `: `
 height: 0;
  transform: scaleY(0);
 `
  };
`