import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

test('renders vite link', () => {
  render(<App />)
  const headerElement = screen.getByText(/Vite \+ React/i);
  expect(headerElement).toBeInTheDocument();
});
