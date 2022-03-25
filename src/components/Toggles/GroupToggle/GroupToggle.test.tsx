import React from 'react';
import { render, screen } from '@testing-library/react';
import GroupToggle from './GroupToggle';

test('Renders BasicToggle', () => {

  render(
    <GroupToggle
      label={'MOCK GROUP TOGGLE'}
      id={'mock-group-toggle-id'}
      childToggles={[]}
    />
  );
  expect(screen.getByText(/MOCK GROUP TOGGLE/)).toBeTruthy();
});