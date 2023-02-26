import styled from 'styled-components';

const EnemyCardDataStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid hsl(202, 22%, 41%);
  border-radius: 0.5rem;
  padding: 1rem;
`;

const DataEnemyCard = ({ children }) => {
  return <EnemyCardDataStyled>{children} </EnemyCardDataStyled>;
};

export default DataEnemyCard;
