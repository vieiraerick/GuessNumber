import styled from 'styled-components';
import { shade } from 'polished';

import Colors from 'styles/default';

export const Container = styled.div`
  height: 100vh;
  position: relative;

  background: ${Colors.softWhite};
`;

export const Main = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  margin: 0;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1024px) {
    min-width: 1000px;
    max-width: 1000px;

    min-height: 580px;
    max-height: 580px;

    border-radius: 16px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    min-width: 420px;
    max-width: 420px;

    min-height: 600px;
    max-height: 600px;

    border-radius: 16px;
  }

  @media (max-width: 767px) {
    min-width: 300px;
    max-width: 300px;

    min-height: 500px;
    max-height: 500px;

    border-radius: 12px;
  }

  background: ${Colors.white};
  justify-content: center;

  > button {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 0.8rem;
    color: ${Colors.white};

    margin: 0 auto 50px;

    width: 140px;
    height: 44px;

    background: linear-gradient(${Colors.darkGray}, ${Colors.gray});

    border: none;
    border-radius: 4px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &:hover {
      background: ${shade(0.05, Colors.darkGray)};
    }
  }
`;

export const Title = styled.h1`
  @media (min-width: 768px) {
    font-size: 1.85rem;
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }

  font-family: 'Montserrat', sans-serif;
  text-align: center;

  padding-bottom: 4px;

  background-image: linear-gradient(${Colors.primary}, ${Colors.dark});
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const Bar = styled.div`
  &::before {
    @media (min-width: 768px) {
      max-width: 260px;
    }

    @media (max-width: 767px) {
      max-width: 200px;
    }

    content: ' ';
    display: flex;
    margin: 0 auto;
    border: 1px solid ${Colors.softWhite};
  }
`;

export const Guess = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: ${Colors.primary};
    margin-bottom: 8px;

    &.success {
      color: ${Colors.success};
    }

    &.error {
      color: ${Colors.error};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  margin: 0 auto;

  @media (min-width: 768px) {
    input {
      width: 220px;
    }
  }

  @media (max-width: 767px) {
    input {
      width: 180px;
    }
  }

  input {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;

    height: 42px;

    padding: 4px 12px;
    margin: 0 20px 40px 0;

    border: 1px solid ${Colors.softWhite};
    border-radius: 4px;

    &.error {
      border: 1px solid ${Colors.primary};
    }
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 0.85rem;
    color: ${Colors.softWhite};

    width: 68px;
    height: 42px;

    background: linear-gradient(${Colors.primary}, ${Colors.dark});

    border: none;
    border-radius: 4px;

    &:hover {
      background: ${shade(0.05, Colors.dark)};
    }

    &:disabled {
      background: ${Colors.lightGray};
      color: ${Colors.white};

      cursor: default;
    }
  }
`;
