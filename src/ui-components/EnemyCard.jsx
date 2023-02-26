import './EnemyCard.css';

import { useState } from 'react';

import styled from './styled-components';

const EnemyCardStyled = styled.div`
  & .hidden {
    display: none !important;
  }
  & .enemycard {
    position: relative;
  }
  &.modal {
    position: absolute;
  }
`;

const EnemyCard = ({ enemy }) => {
  const [modal, setModal] = useState(false);
  const [hidden, setHidden] = useState(true);

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
          <h4>{enemy.name}</h4>
          <h4>{enemy.level}</h4>
          <h4>{enemy.atributes.HP}</h4>
          <h4>{enemy.atributes.MP}</h4>
          <h4>{enemy.earned.exp}</h4>
          <h4>{enemy.earned.AP}</h4>
          <h4>{enemy.earned.gil}</h4>
          <h4>{enemy.items.drop}</h4>
          <h4>{enemy.items.morph}</h4>
          <h4>{enemy.items.steal}</h4>
          <h4>{enemy.strategy.weakness}</h4>
          <h4>{enemy.strategy.inmune}</h4>
          <h4>{enemy.strategy.absorbs}</h4>
          <h4>{enemy.enemy_skill}</h4>
          <h4>{enemy.location}</h4>
          <button
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            x
          </button>
        </div>
      </div>
    </EnemyCardStyled>
  );
};

export default EnemyCard;
