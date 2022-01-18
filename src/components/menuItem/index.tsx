import { FC } from 'react';
import { Link } from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/fontawesome-free-solid';

import { Container } from './styles';

type MenuItemProps = {
  label: string;
  route: string;
  icon: IconProp;
  iconDefinition: IconDefinition;
};

const MenuItem: FC<MenuItemProps> = props => {
  const { label, route, icon, iconDefinition } = props;

  fontawesome.library.add(iconDefinition);

  return (
    <Link to={route}>
      <Container>
        <FontAwesomeIcon icon={icon} size="4x" />
        <h1>{label}</h1>
      </Container>
    </Link>
  );
};

export default MenuItem;
