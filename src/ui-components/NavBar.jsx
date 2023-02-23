import { useContext } from 'react';
import styled from 'styled-components';

import { PageContext } from '../context/PageContext';
import { UserContext } from '../context/UserContext';
import _NavLink from './NavLink';

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: ${({ justify }) =>
    justify === 'center'
      ? 'center'
      : justify === 'flex-end'
      ? 'flex-end'
      : justify === 'flex-star'
      ? 'flex-star'
      : justify === 'space-around'
      ? 'space-around'
      : justify === 'space-between'
      ? 'space-between'
      : 'center'};
  align-items: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'flex-end'
      ? 'flex-end'
      : align === 'flex-star'
      ? 'flex-star'
      : align === 'space-around'
      ? 'space-around'
      : align === 'space-between'
      ? 'space-between'
      : 'center'};
  background-color: ${({ color }) => (color ? color : '#10101C')};
  color: ${({ color }) => (color ? color : 'inherit')};
  height: ${({ height }) => height};
  width: 100%;
  padding: ${({ padding }) => padding};
  position: ${({ position }) => (position ? position : 'relative')};
`;

const NavBar = ({ height, justify, align, color, padding, position }) => {
  const { user } = useContext(UserContext);
  const { page } = useContext(PageContext);

  return (
    <NavBarStyled
      justify={justify}
      align={align}
      height={height}
      color={color}
      padding={padding}
      position={position}
    >
      {page !== 'home' && <_NavLink page={'home'} />}
      {page !== 'bestiary' && <_NavLink page={'Bestiary'} />}
      {page !== 'data' && <_NavLink page={'Data'} />}
      {page !== 'about' && <_NavLink page={'About'} />}
      {!user && <_NavLink page={'Login'} />}
      {user && <_NavLink page={'Logout'} />}
    </NavBarStyled>
  );
};

export default NavBar;
