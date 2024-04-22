import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Assuming this is your main component

// A simple test to render the App component
test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Notes App/i);
  expect(linkElement).toBeInTheDocument();
});

