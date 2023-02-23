import styled from 'styled-components';

const ButtonStyled = styled.button`
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
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: cadetblue;
  }
`;

const Button = ({ action, variant, color, border, text, size }) => {
  return (
    <ButtonStyled
      onClick={action}
      variant={variant}
      color={color}
      border={border}
      size={size}
    >
      {text}
    </ButtonStyled>
  );
};
export default Button;
