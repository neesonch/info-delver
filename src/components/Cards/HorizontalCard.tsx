import React from 'react';
import styled from 'styled-components';
import { Toggle } from '../../schema';
import BasicToggle from '../Toggles/BasicToggle';

interface HorizontalCardProps {
  title: string;
  toggles: Toggle[];
}


const HorizontalCard = ({ title, toggles }: HorizontalCardProps) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <TogglesContainer>
        {toggles.map(toggle => {
          const { id, label } = toggle;
          return (
            <ToggleWrapper key={id}>
              <BasicToggle label={label} id={id} />
            </ToggleWrapper>
          );
        }
        )}
      </TogglesContainer>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  flex-basis: 100%;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const CardTitle = styled.div`
  font-size: 18;
  font-weight: bold;
`;

const TogglesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ToggleWrapper = styled.div`
  display: inline-block;
  background: #18191d;
  border-radius: 10%;
  min-width: 30%;
  flex-basis: 30%;
  padding: 5px;
  margin: 5px;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export default HorizontalCard;