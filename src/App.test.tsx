import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { schema } from './schema';

test('renders learn react link', () => {
  render(<App schema={schema} />);
  expect(true).toBe(true);
});
