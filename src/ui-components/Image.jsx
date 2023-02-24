import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100vw;
  height: 100vh;
`;

const Image = () => {
  return <StyledImage src={'src'} alt={'alt'}></StyledImage>;
};
export default Image;
