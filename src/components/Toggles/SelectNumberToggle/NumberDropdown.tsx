import React from 'react';
import styled from 'styled-components';

interface NumberDropdownProps {
  min: number;
  max: number;
  active: boolean;
}

const NumberDropdown = ({ active, min, max }: NumberDropdownProps) => {
  const options = [];

  for (let i = min; i <= max; i++) {
    options.push(<option key={i} value={i}>{i}</option>)
  }

  return (
    <DropdownWrapper>
      <DropdownSelect disabled={!active}>
        {options}
      </DropdownSelect>
    </DropdownWrapper >
  )
}

const DropdownWrapper = styled.div`
  margin-right: 0.25em
`;

const DropdownSelect = styled.select`
  color: white;
  background-color: #101012;
  border: none;
  width: 4.5em;
  padding-left: 0.75em;
  &:disabled {
    color: dimgrey;
  }
`;


export default NumberDropdown;