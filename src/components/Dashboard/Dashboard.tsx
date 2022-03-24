import React from 'react';
import styled from 'styled-components';
import { Card } from 'schema';
import getCardComponent from 'utils/get-card-component';

interface DashboardProps {
  cards: Card[];
}

const Dashboard = ({ cards }: DashboardProps) => {

  return (
    <CardsContainer>
      {cards.map(card => {
        return (
          getCardComponent(card)
        );
      })}
    </CardsContainer>
  )
}

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
`


export default Dashboard;