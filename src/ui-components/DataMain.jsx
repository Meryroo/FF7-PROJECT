import styled from 'styled-components';

const DataMainStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
  color: #526f80;
  width: 100vw;
  padding: 4rem;
  gap: 5rem;
  @media (max-width: 1284px) {
    flex-direction: column;
  }
`;

const DataMain = ({ children }) => {
  return <DataMainStyled>{children}</DataMainStyled>;
};

export default DataMain;
