import styled from 'styled-components';

import Palette from '../styles/Palette';

const StyledMain = styled.main`
  background-color: ${Palette.main.background};
  background-image: ${({ image }) => image};
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: ${({ direction }) => (direction == 'rows' ? 'rows' : 'column')};
  align-items: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'flex-end'
      ? 'flex-end'
      : align === 'flex-star'
      ? 'flex-star'
      : align === 'space-around'
      ? 'space-around'
      : align === 'space-between'
      ? 'space-between'
      : 'center'};
  justify-content: ${({ justify }) =>
    justify === 'center'
      ? 'center'
      : justify === 'flex-end'
      ? 'flex-end'
      : justify === 'flex-star'
      ? 'flex-star'
      : justify === 'space-around'
      ? 'space-around'
      : justify === 'space-between'
      ? 'space-between'
      : 'center'};
  width: 100vw;
  height: ${({ homeheight }) => (homeheight ? homeheight : '100vh')};
`;

const Main = ({ children, homeheight, direction, justify, align, image }) => {
  return (
    <StyledMain
      direction={direction}
      justify={justify}
      align={align}
      homeheight={homeheight}
      image={image}
    >
      {children}
    </StyledMain>
  );
};
export default Main;
