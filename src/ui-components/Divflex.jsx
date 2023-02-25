import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => (direction === 'column' ? 'column' : 'row')};
  background-color: ${({ variant }) => (variant ? variant : 'yellow')};
  color: ${({ color }) => (color === 'white' ? 'white' : 'black')};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: 2px solid black;
  border-radius: 15%;
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
    >
      {children}
    </StyledDiv>
  );
};

export default DivFlex;
