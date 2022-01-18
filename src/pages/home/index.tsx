import { FC, useEffect } from 'react';

import {
  faPlay as playDef,
  faCog as cogDef,
} from '@fortawesome/fontawesome-free-solid';
import { faPlay, faCog } from '@fortawesome/free-solid-svg-icons';

import Header from 'components/header';
import Footer from 'components/footer';
import MenuItem from 'components/menuItem';

import { Container, Menu } from './styles';

const Home: FC = () => {
  useEffect(() => {
    localStorage.setItem('minNumber', '0');
    localStorage.setItem('maxNumber', '300');
  }, []);

  return (
    <Container>
      <Header />
      <Menu>
        <MenuItem
          label="COMEÇAR"
          route="/play"
          icon={faPlay}
          iconDefinition={playDef}
        />
        <MenuItem
          label="CONFIGURAÇÕES"
          route="configuracoes"
          icon={faCog}
          iconDefinition={cogDef}
        />
      </Menu>
      <Footer />
    </Container>
  );
};

export default Home;
