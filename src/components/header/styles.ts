import styled from 'styled-components';

import Colors from 'styles/default';

export const Container = styled.div`
  display: flex;
  height: 60px;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background: linear-gradient(${Colors.softWhite}, ${Colors.white});

  padding: 8px;

  border-bottom: 1px solid ${Colors.lightGray};
  align-items: center;

  font-family: 'Roboto', sans-serif;

  img {
    width: 40px;
    height: 40px;

    margin-right: 20px;
    padding: 4px;

    border-right: 1px solid ${Colors.softWhite};
  }
`;
