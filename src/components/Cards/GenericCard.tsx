import React from 'react';
import styled from 'styled-components';
import { Toggle } from '../../schema';
import { Card } from '../../schema';
import HorizontalCard from './HorizontalCard';
import VerticalCard from './VerticalCard';

interface GenericCardProps {
  card: Card;
}

const GenericCard = ({ card }: GenericCardProps) => {
  console.log('CARD: ', card)
  const { type, title, toggles } = card;
  //console.log({ type }); //DEBUG
  switch (type) {
    case 'Horizontal':
      return <HorizontalCard title={title} toggles={toggles} />
    case 'Vertical':
      return <VerticalCard title={title} toggles={toggles} />
    default:
      return null;
  }
}

export default GenericCard;