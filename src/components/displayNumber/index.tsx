/* eslint-disable operator-linebreak */
import { FC } from 'react';

import Colors from 'styles/default';

import {
  Container,
  TopBar,
  BottomBar,
  MiddleBar,
  VerticalContainer,
  LeftTopBar,
  LeftBottomBar,
  RightTopBar,
  RightBottomBar,
} from './styles';

type DisplayNumberProps = {
  guess: string;
  status: string;
};

const DisplayNumber: FC<DisplayNumberProps> = props => {
  const { guess, status } = props;

  const color = () => {
    switch (status) {
      case 'victory':
        return Colors.success;
      case 'error':
        return Colors.error;
      default:
        return Colors.darkGray;
    }
  };

  /*
    Cada barra do display de 7 segmentos foi nomeada de P1 a P7
    (posição 1 à posição 7), para facilitar a identificação ao
    programar quando ligar e desligar no código abaixo.

     --P1--
    |      |
    P6     P2
    |      |
    |--P7--|
    |      |
    P5    P3
    |      |
     --P4--

  */

  // Esses métodos identificam se o número escolhido pertence ao array
  // para definir se o led "acende" ou não.
  const colorP1 =
    ['0', '2', '3', '5', '6', '7', '8', '9'].indexOf(guess) !== -1
      ? color()
      : Colors.softWhite;

  const colorP2 =
    ['0', '1', '2', '3', '4', '7', '8', '9'].indexOf(guess) !== -1
      ? color()
      : Colors.softWhite;

  const colorP3 =
    ['0', '1', '3', '4', '5', '6', '7', '8', '9'].indexOf(guess) !== -1
      ? color()
      : Colors.softWhite;

  const colorP4 =
    ['0', '2', '3', '5', '6', '8', '9'].indexOf(guess) !== -1
      ? color()
      : Colors.softWhite;

  const colorP5 =
    ['0', '2', '6', '8'].indexOf(guess) !== -1 ? color() : Colors.softWhite;

  const colorP6 =
    ['0', '4', '5', '6', '8', '9'].indexOf(guess) !== -1
      ? color()
      : Colors.softWhite;

  const colorP7 =
    ['2', '3', '4', '5', '6', '8', '9'].indexOf(guess) !== -1
      ? color()
      : Colors.softWhite;

  return (
    <Container>
      <TopBar id="P1" color={colorP1} />
      <VerticalContainer>
        <LeftTopBar id="P6" color={colorP6} />
        <RightTopBar id="P2" color={colorP2} />
      </VerticalContainer>
      <MiddleBar id="P7" color={colorP7} />
      <VerticalContainer>
        <LeftBottomBar id="P5" color={colorP5} />
        <RightBottomBar id="P3" color={colorP3} />
      </VerticalContainer>
      <BottomBar id="P4" color={colorP4} />
    </Container>
  );
};
export default DisplayNumber;
