import styled from 'styled-components';

import Colors from 'styles/default';

export const Container = styled.div`
  position: absolute;
  display: flex;

  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100vw;

  left: 0;
  bottom: 0;

  border-top: 1px solid ${Colors.lightGray};
  background: linear-gradient(${Colors.white}, ${Colors.softWhite});

  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;

  footer {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }

  .hearts {
    color: ${Colors.primary};
  }
`;
