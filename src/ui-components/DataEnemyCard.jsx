import styled from 'styled-components';

const EnemyCardDataStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 350px;
  width: 350px;
  border: 3px solid hsl(202, 22%, 41%);
  padding: 1rem;
  gap: 1rem;
`;

const DataEnemyCard = ({ children }) => {
  return <EnemyCardDataStyled>{children}</EnemyCardDataStyled>;
};

export default DataEnemyCard;
