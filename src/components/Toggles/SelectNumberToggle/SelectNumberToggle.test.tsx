import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectNumberToggle from './SelectNumberToggle';

test('Renders SelectNumberToggle', () => {

  render(
    <SelectNumberToggle
      label={'MOCK SELECT NUMBER TOGGLE'}
      id={'mock-basic-toggle-id'}
      min={0}
      max={10}
    />
  );
  expect(screen.getByText(/MOCK SELECT NUMBER TOGGLE/)).toBeTruthy();
});