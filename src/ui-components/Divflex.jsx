import styled from 'styled-components';

const StyledDiv = styled.div`
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
  flex-direction: ${({ direction }) => (direction === 'column' ? 'column' : 'row')};
  background-color: ${({ variant }) => (variant ? variant : 'none')};
  color: ${({ color }) => (color === 'white' ? 'white' : '#526F80')};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
  border: ${({ border }) => (border === 'yes' ? '2px solid black' : 'none')};
  flex-wrap: wrap;
  width: 100%;
`;

const DivFlex = ({
  direction,
  children,
  margin,
  padding,
  variant,
  color,
  height,
  width,
  gap,
  border,
}) => {
  return (
    <StyledDiv
      direction={direction}
      margin={margin}
      padding={padding}
      variant={variant}
      color={color}
      height={height}
      width={width}
      gap={gap}
      border={border}
    >
      {children}
    </StyledDiv>
  );
};

export default DivFlex;
