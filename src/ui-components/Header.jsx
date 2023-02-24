import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
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
  background-color: ${({ variant }) => (variant ? variant : '#10101C')};
  color: ${({ color }) => (color ? color : 'inherit')};
  height: ${({ height }) => height};
  width: 100%;
  padding: ${({ padding }) => padding};
`;
const Header = ({ children, justify, align, color, height, padding, variant }) => {
  return (
    <HeaderStyled
      justify={justify}
      align={align}
      color={color}
      height={height}
      padding={padding}
      variant={variant}
    >
      {children}
    </HeaderStyled>
  );
};

export default Header;
