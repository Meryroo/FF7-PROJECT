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

const Form = ({ size, children, action }) => {
  return (
    <StyledForm size={size} onSubmit={action}>
      {children}
    </StyledForm>
  );
};
export default Form;
