import React from 'react';
import { render } from '@testing-library/react';
import Result from '..';
import messages from '../messages';

describe('Result', () => {
  it('renders back', () => {
    const { getByText } = render(<Result />);
    const backText = getByText(messages.back);
    expect(backText).toBeInTheDocument();
  });

  it('renders master result text', () => {
    const { getByText } = render(<Result />);
    const result = getByText(messages.yourMaster.trim());
    expect(result).toBeInTheDocument();
  });

  it('renders button', () => {
    const { getByText } = render(<Result />);
    const button = getByText(messages.buttonLabel).closest('button');
    expect(button).toBeInTheDocument();
  });
});
