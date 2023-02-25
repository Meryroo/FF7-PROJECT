import styled from 'styled-components';

const StyledImage = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

const Image = ({ src, alt, height, width }) => {
  return <StyledImage src={src} alt={alt} height={height} width={width} />;
};

export default Image;
