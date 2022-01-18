import styled from 'styled-components';
import { shade } from 'polished';

import Colors from 'styles/default';

export const Container = styled.button`
  @media (min-width: 1024px) {
    margin: 24px;
    width: 360px;
    height: 360px;

    border: none;
    border-radius: 32px;

    svg {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 20px;
    width: 280px;
    height: 280px;

    border: none;
    border-radius: 24px;

    font-size: 0.6rem;

    svg {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    position: relative;

    align-items: center;
    justify-content: center;

    margin: 16px;
    width: 300px;
    height: 60px;

    border: none;
    border-radius: 1rem;

    font-size: 0.4rem;

    svg {
      position: absolute;
      left: 30px;
    }
  }

  background: linear-gradient(${Colors.primary}, ${Colors.dark});

  font-family: 'Montserrat', sans-serif;
  color: ${Colors.softWhite};

  &:hover {
    background: ${shade(0.05, Colors.dark)};
  }

  svg {
    color: ${Colors.white};
  }
`;
