import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
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
  background-color: ${({ color }) => (color ? color : '#10101C')};
  color: ${({ color }) => (color ? color : 'inherit')};
  height: ${({ height }) => height};
  width: 100%;
  padding: ${({ padding }) => padding};
`;
const Header = ({ children, justify, align, color, height, padding }) => {
  return (
    <HeaderStyled
      justify={justify}
      align={align}
      color={color}
      height={height}
      padding={padding}
    >
      {children}
    </HeaderStyled>
  );
};

export default Header;
