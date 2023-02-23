import styled from 'styled-components';

import Palette from '../styles/Palette';

const StyledForm = styled.form`
  background-color: transparent;
  border: 2px solid ${Palette.main.secondary};
  padding: ${({ size }) =>
    size === 'lg' ? '0.6rem 1.2rem' : size === 'sm' ? '0.2rem 0.4rem' : '0.4rem 0.8rem'};
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ size }) => (size === 'lg' ? '2rem' : size === 'sm' ? '0.5rem' : '1rem')};
  border-radius: ${({ size }) => (size === 'lg' ? '7px' : size === 'sm' ? '2px' : '5px')};
  backdrop-filter: blur(10px);
  position: relative;
`;

const Form = ({ size, ref, children, action }) => {
  return (
    <StyledForm size={size} ref={ref} onSubmit={action}>
      {children}
    </StyledForm>
  );
};
export default Form;

/* const navigate = useNavigate();
  const { setUser, logout } = useContext(UserContext);
  const { password, setPassword } = useContext(PasswordContext);
  const { email, setEmail } = useContext(EmailContext);
  const userInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  const emailInput = useRef();
  const handleSubmit = () => {};
  const handleClick = () => {};
  const [see, setSee] = useState(false);
  const [register, setRegister] = useState(() => {
    email == null ? 'login' : 'register';
  }); */
/*   import { EmailContext } from '../context/EmailContext';
import { PasswordContext } from '../context/PasswordContext';
import UserContext from '../context/UserContext';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Input from './InputForm';
import ButtonRegister from './Register'; */
{
  /* <Input ref={userInput} placeholder="user" type="text"></Input>
      <Input
        ref={passwordInput}
        placeholder="password"
        type={see ? 'text' : password}
      ></Input>
      <Button
        size="sm"
        action={() => {
          setSee(!see);
        }}
      >
        See password
      </Button>
      {email == null ?? (
        <Input
          ref={passwordConfirmInput}
          placeholder="confirm password"
          type={see ? 'text' : password}
        ></Input>
      )}
      {email == null ?? <Input ref={emailInput} placeholder="email" type="text"></Input>}
      <Button></Button>
      <ButtonRegister
        action={() => {
          email == null ? setEmail(localStorage.getItem('email')) : setEmail(null);
        }}
      >
        {register}
      </ButtonRegister> */
}
