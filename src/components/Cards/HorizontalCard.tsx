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
    <CardWrapper key={title}>
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

const CardWrapper = styled.section`
  flex-basis: 100%;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const CardTitle = styled.header`
  font-size: 1.125em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
  margin-left: 1.25em;
`;

const TogglesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ToggleWrapper = styled.div`
  display: inline-block;
  background: #18191d;
  border-radius: 0.25em;
  min-width: 30%;
  flex-basis: 30%;
  padding-left: 0.3125em;
  padding-right: 0.3125em;
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 5px;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export default HorizontalCard;