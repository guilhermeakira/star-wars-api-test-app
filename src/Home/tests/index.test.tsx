import React from 'react';
import { render } from '@testing-library/react';
import Home from '..';

describe('Home', () => {
  it('renders heading', () => {
    const { getByText } = render(<Home />);
    const heading = getByText('Welcome to');
    expect(heading).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    const { getByText } = render(<Home />);
    const subtitle = getByText('FRONTEND CHALLENGE');
    expect(subtitle).toBeInTheDocument();
  });

  it('renders button', () => {
    const { getByText } = render(<Home />);
    const button = getByText('S t a r t').closest('button');
    expect(button).toBeInTheDocument();
  });
});
