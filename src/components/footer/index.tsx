import { FC } from 'react';

import { Container } from './styles';

const Footer: FC = () => (
  <Container>
    <footer>
      <span>
        Desenvolvido por&nbsp;
        <strong>Erick Vieira</strong>
        &nbsp;com&nbsp;
        <span className="hearts">❤</span>
        &nbsp;para&nbsp;
        <strong>Studio Sol</strong>
      </span>
    </footer>
  </Container>
);

export default Footer;
