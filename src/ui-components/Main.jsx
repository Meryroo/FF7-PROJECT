import styled from 'styled-components';

import Palette from '../styles/Palette';

const StyledMain = styled.main`
  background-color: ${Palette.main.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};
export default Main;
