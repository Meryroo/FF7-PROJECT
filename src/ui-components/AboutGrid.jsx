import styled from 'styled-components';

const AboutGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const AboutGrid = ({ children }) => {
  return <AboutGridStyled>{children}</AboutGridStyled>;
};

export default AboutGrid;
