import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicToggle from './BasicToggle';

test('Renders BasicToggle', () => {

  render(
    <BasicToggle
      label={'MOCK BASIC TOGGLE'}
      id={'mock-basic-toggle-id'}
    />
  );
  expect(screen.getByText(/MOCK BASIC TOGGLE/)).toBeTruthy();
});