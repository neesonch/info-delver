import React from 'react';
import styled from 'styled-components';
import { Toggle } from '../../schema';
import getToggleComponent from '../../utils/get-toggle-component';

interface VerticalCardProps {
  title: string;
  toggles: Toggle[];
}

const VerticalCard = ({ title, toggles }: VerticalCardProps) => {
  return (
    <CardWrapper key={title}>
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
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const CardTitle = styled.div`
  font-size: 1.125em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
  margin-left: 1.125em;
`;

const TogglesContainer = styled.div`
  margin-left: 5%;
  margin-right: auto;
  background-color: #292e31;
  border-radius: 0.2em;
  text-align: center;
`;

const ToggleWrapper = styled.div`
  display: inline-block;
  background: #18191d;
  border-radius: 0.25em;
  min-width: 95%;
  padding-left: 0.3125em;
  padding-right: 0.3125em;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-top: 3px;
  margin-left: auto;
  margin-right: auto;
  &:last-child {
    margin-bottom: 3px;
  }
`;

export default VerticalCard;