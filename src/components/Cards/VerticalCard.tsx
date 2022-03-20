import React from 'react';
import styled from 'styled-components';
import { Toggle } from '../../schema';
import BasicToggle from '../Toggles/BasicToggle';
import getToggleComponent from '../../utils/get-toggle-component';

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
          if (toggle.type) {
            return (
              <ToggleWrapper key={toggle.id}>
                {getToggleComponent(toggle)}
              </ToggleWrapper>
            )
          } else {
            return null;
          }
        }
        )}
      </TogglesContainer>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  flex-basis: 33%;
  display: inline-block;
  background-color: #292e31;
  margin-left: 10px;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const CardTitle = styled.div`
  font-size: 18;
  font-weight: bold;
`;

const TogglesContainer = styled.div`
  width: 100%;
  padding-left: 5%;
`;

const ToggleWrapper = styled.div`
  display: inline-block;
  background: #18191d;
  border-radius: 5%;
  min-width: 90%;
  padding: 5px;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
`;

export default VerticalCard;