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
    options.push(<DropdownOption key={i} value={i}>{i}</DropdownOption>)
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

`;

const DropdownSelect = styled.select`

`;

const DropdownOption = styled.option`

`;

export default NumberDropdown;