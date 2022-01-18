import styled from 'styled-components';

import Colors from 'styles/default';

export const Container = styled.div`
  height: 100vh;
  position: relative;

  background: ${Colors.softWhite};
`;

export const Menu = styled.div`
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
