import { useState } from 'react';
import styled from 'styled-components';

const EnemyCardStyled = styled.div`
  & .hidden {
    display: none !important;
  }
  & .enemycard {
    position: relative;
  }
  & .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.918);
    z-index: 999;
  }
  & .modal-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 40%;
    padding: 2rem;
  }
`;

const EnemyCard = ({ enemy }) => {
  const [modal, setModal] = useState(false);

  return (
    <EnemyCardStyled>
      <div className="enemy">
        <div className="enemycard" key={enemy.id}>
          <img src={enemy.img} alt={enemy.name} />
          <h3>{enemy.name}</h3>
          <button
            onClick={() => {
              setModal(!modal);
            }}
          >
            Caracterisiticas
          </button>
        </div>

        <div className={modal ? 'modal' : 'hidden'}>
          <div className="modal-container">
            <h2>{enemy.name}</h2>
            <h4>Level: {enemy.level}</h4>
            <h3>Atributes</h3>
            <h4>HP: {enemy.atributes.HP}</h4>
            <h4>MP: {enemy.atributes.MP}</h4>
            <h3>Earned</h3>
            <h4>Exp: {enemy.earned.exp}</h4>
            <h4>Ap: {enemy.earned.AP}</h4>
            <h4>Gil: {enemy.earned.gil}</h4>
            <h3>Items</h3>
            <h4>Drop: {enemy.items.drop}</h4>
            <h4>Morph: {enemy.items.morph}</h4>
            <h4>Steal: {enemy.items.steal}</h4>
            <h3>Strategy</h3>
            <h4>Weakness: {enemy.strategy.weakness}</h4>
            <h4>Immune: {enemy.strategy.inmune}</h4>
            <h4>Absorbs: {enemy.strategy.absorbs}</h4>
            <h4>Enemy Skills: {enemy.enemy_skill}</h4>
            <h4>Location: {enemy.location}</h4>
            <button
              onClick={() => {
                setModal(!modal);
              }}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </EnemyCardStyled>
  );
};

export default EnemyCard;
