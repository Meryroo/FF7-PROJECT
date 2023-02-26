import styled from 'styled-components';

const DivGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 40px;
`;

const DivGrid = ({ children }) => {
  return <DivGridStyled>{children}</DivGridStyled>;
};

export default DivGrid;
