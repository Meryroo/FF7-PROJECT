import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Palette from '../styles/Palette';

const NavLinkStyled = styled.link`
  background-color: ${({ variant }) =>
    variant === 'dark' ? '#517388' : variant === 'light' ? '#E8DCB6' : 'white'};
  border: ${({ border }) => (border === 'yes' ? '2px solid black' : 'none')};
  color: ${({ color }) => (color === 'white' ? 'white' : 'black')};
  width: fit-content;
  font-family: 'Helvetica';
  font-size: ${({ size }) => (size === 'lg' ? '25px' : size === 'sm' ? '14px' : '20px')};
  font-weight: 700;
  letter-spacing: 0.5px;
  outline: none;
  padding: ${({ size }) =>
    size === 'lg' ? '1.3rem 4.5rem' : size === 'sm' ? '8px 16px' : '0.8rem 4.3rem'};
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: cadetblue;
    transform: scale(0.97);
  }
  &:active {
    color: ${Palette.main.secondary};
  }
`;

const Button = ({ page, variant, color, border, size }) => {
  const navigate = useNavigate();
  return (
    <NavLinkStyled
      onClick={() => {
        page == 'home' ? navigate('/') : navigate(`/${page}`);
      }}
      variant={variant}
      color={color}
      border={border}
      size={size}
    >
      {page}
    </NavLinkStyled>
  );
};
export default Button;
