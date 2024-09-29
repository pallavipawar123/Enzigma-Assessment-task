import { render, screen } from '@testing-library/react';

import TaskList from './components/TaskList';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
