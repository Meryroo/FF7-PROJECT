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
const Input = ({ ref, placeholder, type }) => {
  return <InputStyled ref={ref} placeholder={placeholder} type={type}></InputStyled>;
};

export default Input;
