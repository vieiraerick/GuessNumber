/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Play from 'pages/play';

jest.spyOn(global, 'fetch').mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve({ value: 123 }),
  });
});

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

describe('Play Page', () => {
  render(<Play />);
  const guessField = screen.getByPlaceholderText('Digite o palpite');
  const sendButton = screen.getByText('ENVIAR');

  it('Should block an null input value', async () => {
    fireEvent.change(guessField, { target: { value: undefined } });
    fireEvent.click(sendButton);

    waitFor(() =>
      expect(screen.getByText('Insira um valor.')).toBeInTheDocument()
    );
  });

  it('Should be able to input a value', () => {
    fireEvent.change(guessField, { target: { value: '123' } });

    expect(guessField).toHaveValue(123);
  });
});
