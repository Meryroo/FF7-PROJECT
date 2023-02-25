import styled from 'styled-components';

const AboutComponentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const AboutComponent = ({ children }) => {
  return <AboutComponentStyled>{children}</AboutComponentStyled>;
};

export default AboutComponent;
