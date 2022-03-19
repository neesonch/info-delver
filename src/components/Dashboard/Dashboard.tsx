import React from 'react';
import styled from 'styled-components';
import { Card } from '../../schema';
import GenericCard from '../Cards/GenericCard';
import HorizontalCard from '../Cards/HorizontalCard';
import VerticalCard from '../Cards/VerticalCard';

interface DashboardProps {
  cards: Card[]
}

const Dashboard = ({ cards }: DashboardProps) => {
  console.log('CARDS: ', cards);
  return (
    <DashboardWrapper>
      {cards.map(card => {
        return (
          getCard(card)
        );
      })}
    </DashboardWrapper>
  )
}

const getCard = (card: Card) => {
  const { type, title, toggles } = card;
  switch (type) {
    case 'Horizontal':
      return <HorizontalCard title={title} toggles={toggles} />
    case 'Vertical':
      return <VerticalCard title={title} toggles={toggles} />
    default:
      return null;
  }
}

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`

export default Dashboard;