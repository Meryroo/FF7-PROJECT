import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivFlex = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default DivFlex;
