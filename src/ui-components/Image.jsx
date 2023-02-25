import styled from 'styled-components';

const StyledImage = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-radius: 0.8rem;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Image = ({ src, alt, height, width }) => {
  return <StyledImage src={src} alt={alt} height={height} width={width} />;
};

export default Image;
