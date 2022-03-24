import getCardComponent from './get-card-component';
import { Card } from 'schema';
import { HORIZONTAL, VERTICAL } from './constants';


const mockData: Card[] = [
  {
    id: 'horizontal-card-mock-id',
    title: 'Mock Horizontal Card',
    type: HORIZONTAL,
    toggles: [

    ]
  },
  {
    id: 'vertical-card-mock-id',
    title: 'Mock Vertical Card',
    type: VERTICAL,
    toggles: [

    ],
  },
  {
    id: 'invalid-type-card-mock-id',
    title: 'Mock Invalid Type Card',
    type: ' ',
    toggles: [

    ],
  },
]

describe('getCardComponent', () => {
  test('Returns correct React components for given type', () => {
    console.log()
    const horizontalCard = getCardComponent(mockData[0])
    expect(horizontalCard?.type.name).toBe('HorizontalCard');

    const verticalCard = getCardComponent(mockData[1])
    expect(verticalCard?.type.name).toBe('VerticalCard');

    const invalidCard = getCardComponent(mockData[2])
    expect(invalidCard).toBe(null);
  });
});
