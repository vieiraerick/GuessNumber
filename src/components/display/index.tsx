import { FC } from 'react';

import DisplayNumber from '../displayNumber';

import { Container } from './styles';

type DisplayProps = {
  guess: string;
  status: string;
};

const Display: FC<DisplayProps> = props => {
  const { guess, status } = props;

  const removeLeadingZeros = parseInt(guess, 10);

  // Passando valores separados para cada display.
  const splitedGuess = String(removeLeadingZeros).split('');

  return (
    <Container>
      <DisplayNumber guess={splitedGuess[0]} status={status} />
      {splitedGuess[1] !== undefined && (
        <DisplayNumber guess={splitedGuess[1]} status={status} />
      )}
      {splitedGuess[2] !== undefined && (
        <DisplayNumber guess={splitedGuess[2]} status={status} />
      )}
    </Container>
  );
};

export default Display;
