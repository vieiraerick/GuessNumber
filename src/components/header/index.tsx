import { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/favicon.png';
import { Container } from './styles';

const Header: FC = () => (
  <Container>
    <Link to="/">
      <img src={Logo} alt="" />
    </Link>
    <span>Advinhe o Número</span>
  </Container>
);

export default Header;
