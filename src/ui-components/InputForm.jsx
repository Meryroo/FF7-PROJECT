import styled from 'styled-components';

const InputStyled = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: transparent;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #e8dcb6;
  }
`;
const Input = ({ children }) => {
  return <InputStyled>{children}</InputStyled>;
};

export default Input;
