import React from 'react';
import styled from 'styled-components';
import { Toggle } from '../../schema';
import BasicToggle from '../Toggles/BasicToggle';

interface VerticalCardProps {
  title: string;
  toggles: Toggle[];
}

const VerticalCard = ({ title, toggles }: VerticalCardProps) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <TogglesContainer>
        {toggles.map(toggle => {
          const { id, label } = toggle;
          return (
            <ToggleWrapper key={id}>
              <BasicToggle label={label} id={id} key={id} />
            </ToggleWrapper>
          );
        }
        )}
      </TogglesContainer>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  min-width: 33%;
  display: inline-block;
  border: 1px solid red;
  flex-shrink: 0;
  background-color: #292e31;
`;

const CardTitle = styled.div`
  font-size: 18;
  font-weight: bold;
`;

const TogglesContainer = styled.div`
  width: 100%;
`;

const ToggleWrapper = styled.div`
  display: inline-block;
  background: #18191d;
  border-radius: 10%;
  min-width: 90%;
  padding: 5px;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
`;

export default VerticalCard;