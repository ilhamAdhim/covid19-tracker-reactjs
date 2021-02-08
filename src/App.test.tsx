import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('Renders Landing Page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Monitor COVID-19/i);
  expect(linkElement).toBeInTheDocument();
});
