import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI Element Header', () => {
  render(<App />);
  const linkElement = screen.getByText("Queensland Cycling Club");
  expect(linkElement).toBeInTheDocument();
});

