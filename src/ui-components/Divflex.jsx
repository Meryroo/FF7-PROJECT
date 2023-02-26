import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => (direction === 'column' ? 'column' : 'row')};
  background-color: ${({ variant }) => (variant ? variant : 'none')};
  color: ${({ color }) => (color === 'white' ? 'white' : '#E8DCB6')};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
  border: ${({ border }) => (border === 'yes' ? '2px solid black' : 'none')};
  flex-wrap: wrap;
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
