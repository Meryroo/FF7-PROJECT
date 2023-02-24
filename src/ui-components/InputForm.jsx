import styled from 'styled-components';

import Palette from '../styles/Palette';

const InputStyled = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: transparent;
  border: none;
  border-radius: 3px;
  color: ${Palette.main.highlight};
  ::placeholder {
    color: #e8dcb6;
  }
`;
const Input = ({ placeholder, type }) => {
  return <InputStyled placeholder={placeholder} type={type}></InputStyled>;
};

export default Input;
