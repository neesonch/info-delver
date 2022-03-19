import React from 'react';
import styled from 'styled-components';
import ToggleCheckbox from './ToggleCheckbox';


interface BasicToggleProp {
  label: string;
  id: string
}

const BasicToggle = ({ label, id }: BasicToggleProp) => {
  return (
    <BasicToggleWrapper>
      <ToggleLabel>{label}</ToggleLabel>
      <ToggleCheckbox id={`checkbox-${id}`} />
    </BasicToggleWrapper>
  );
}

const BasicToggleWrapper = styled.div`

`;

const ToggleLabel = styled.div`
  display: inline-block;
`

export default BasicToggle;