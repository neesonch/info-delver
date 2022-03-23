import React from 'react';
import { Card } from '../schema';
import HorizontalCard from '../components/Cards/HorizontalCard';
import VerticalCard from '../components/Cards/VerticalCard';
import { HORIZONTAL, VERTICAL } from './constants';

const getCardComponent = (card: Card) => {
  const { type, title, toggles } = card;
  switch (type) {
    case HORIZONTAL:
      return <HorizontalCard title={title} toggles={toggles} />
    case VERTICAL:
      return <VerticalCard title={title} toggles={toggles} />
    default:
      return null;
  }
}
export default getCardComponent;