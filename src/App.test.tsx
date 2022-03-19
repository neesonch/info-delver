import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { schema } from './schema';

test('renders learn react link', () => {
  render(<App schema={schema} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
