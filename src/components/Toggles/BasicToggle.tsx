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
      <ToggleLabel htmlFor={id}>{label}</ToggleLabel>
      <ToggleCheckboxWrapper>
        <ToggleCheckbox id={id} />
      </ToggleCheckboxWrapper>
    </BasicToggleWrapper>
  );
}

const BasicToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.label`
  display: flex;
  padding-left: 10%;
  flex-grow: 6;
`

const ToggleCheckboxWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 5px;
`

export default BasicToggle;