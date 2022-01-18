import styled from 'styled-components';
import { shade } from 'polished';

import Colors from 'styles/default';

export const Container = styled.div`
  height: 100vh;
  position: relative;

  background: ${Colors.softWhite};
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    min-width: 500px;
    max-width: 500px;

    min-height: 580px;
    max-height: 580px;

    border-radius: 16px;

    form label {
      font-size: 1.25rem;
    }

    form input {
      font-size: 1.2rem;

      width: 320px;
      height: 52px;

      margin-bottom: 40px;

      border-radius: 4px;
    }

    button {
      font-size: 1.3rem;

      width: 320px;
      height: 52px;

      border-radius: 4px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    min-width: 420px;
    max-width: 420px;

    min-height: 500px;
    max-height: 500px;

    border-radius: 16px;

    form label {
      font-size: 1.1rem;
    }

    form input {
      font-size: 1.2rem;

      width: 284px;
      height: 52px;

      margin-bottom: 40px;

      border-radius: 4px;
    }

    button {
      font-size: 1.2rem;

      width: 284px;
      height: 52px;

      border-radius: 4px;
    }
  }

  @media (max-width: 767px) {
    min-width: 280px;
    max-width: 280px;

    min-height: 360px;
    max-height: 360px;

    border-radius: 12px;

    form input {
      font-size: 1.1rem;

      width: 240px;
      height: 44px;

      margin-bottom: 40px;

      border-radius: 4px;
    }

    button {
      width: 240px;
      height: 44px;

      border-radius: 4px;
    }
  }

  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  background: ${Colors.white};

  form {
    display: flex;
    flex-direction: column;

    label {
      font-family: 'Montserrat', sans-serif;
      color: ${Colors.primary};
      margin-bottom: 8px;
    }

    input {
      font-family: 'Roboto', sans-serif;
      padding: 4px 16px;
      border: 1px solid ${Colors.softWhite};
    }

    button {
      font-family: 'Montserrat', sans-serif;
      color: ${Colors.softWhite};

      background: linear-gradient(${Colors.primary}, ${Colors.dark});

      border: none;

      &:hover {
        background: ${shade(0.05, Colors.dark)};
      }
    }
  }
`;
