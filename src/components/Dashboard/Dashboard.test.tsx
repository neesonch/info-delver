import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import { Card } from 'schema';


const mockData: Card[] = [
  {
    id: 'horizontal-card-mock-id',
    title: 'Mock Horizontal Card',
    type: 'Horizontal',
    toggles: [

    ]
  },
  {
    id: 'vertical-card-mock-id',
    title: 'Mock Vertical Card',
    type: 'Vertical',
    toggles: [

    ],
  },
]

test('Dashboard renders cards with correct headers', () => {

  const { getByText } = render(
    <Dashboard cards={mockData} />
  );
  mockData.forEach(card => {
    const cardElement = getByText(card.title);
    expect(cardElement).toBeTruthy();
    expect(cardElement.tagName).toEqual('HEADER');
  })
});