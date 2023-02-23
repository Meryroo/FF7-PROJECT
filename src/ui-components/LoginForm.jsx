import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import UserContext from '../context/UserContext';
import Palette from '../styles/Palette';

const StyledForm = styled.form`
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: ${({ color }) => (color === 'dark' ? Palette.main.dark : Palette.main.light)};
  font-family: 'Helvetica';
  text-transform: capitalize;
  font-size: ${({ size }) => (size === 'lg' ? '15px' : size === 'sm' ? '8px' : '12px')};
  padding: ${({ size }) =>
    size === 'lg' ? '0.3rem 0.6rem' : size === 'sm' ? '0.1rem 0.2rem' : '0.2rem 0.3rem'};
  font-weight: 700;
  letter-spacing: 0.5px;
  outline: none;
  transition: 0.5s ease-in-out;
  width: fit-content;
  &:hover {
    background-color: ${({ color }) =>
      color === 'dark' ? Palette.main.light : Palette.main.dark};
  }
  &:active {
    color: ${Palette.main.highlight};
  }
`;

const Form = ({ page, size }) => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  return (
    <StyledForm
      size={size}
      onClick={() => {
        page == 'home'
          ? navigate('/')
          : page == 'logout'
          ? logout()
          : navigate(`/${page}`);
      }}
    >
      {page}
    </StyledForm>
  );
};
export default Form;
