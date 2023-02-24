import styled from 'styled-components';

const HomeTextStyled = styled.div`
  background-color: ${({ variant }) => (variant === 'dark' ? 'black' : 'yellow')};
  color: ${(color) => (color === 'white' ? 'white' : 'black')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${(heigh) => heigh};
  width: ${(width) => width};
  padding: ${(padding) => padding};
  margin: ${(margin) => margin};
`;

const HomeText = ({ variant, color, heigh, width, padding, margin, children }) => {
  return (
    <HomeTextStyled
      variant={variant}
      color={color}
      heigh={heigh}
      width={width}
      padding={padding}
      margin={margin}
    >
      {children}
    </HomeTextStyled>
  );
};

export default HomeText;
