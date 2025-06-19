import { render, screen } from '@testing-library/react';
test('renders placeholder', () => {
  render(<div>Test</div>);
  const el = screen.getByText('Test');
  expect(el).toBeInTheDocument();
});
