import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import styled from 'styled-components';


interface ChevronProps {
  expanded: boolean;
}

const Chevron = ({ expanded }: ChevronProps) => {
  return (
    <ChevronWrapper expanded={expanded}><IoChevronDown /></ChevronWrapper>
  )
}

interface ChevronWrapper {
  expanded: boolean;
}

const ChevronWrapper = styled.div<ChevronWrapper>`
display: inline-block;
transition: all ease-in-out 0.3s;
transform-origin: center;
max-height: 1em;
margin-left: 0.5em;
margin-right: 0.25em;
${props => props.expanded ? `
transform: rotate(-180deg);
`: `
 transform: rotate(0deg);
`
  };
`

export default Chevron;