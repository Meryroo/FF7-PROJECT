import { useState } from 'react';

const EnemyCard = ({ enemy }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="enemy">
      <div className="enemycard" key={enemy.id}>
        <img src={enemy.img} alt={enemy.name} />
        <h3>{enemy.name}</h3>
        <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          Abrir modal
        </button>
      </div>

      <div className={modal ? 'modal' : 'hidden'}>
        <h1>Modal</h1>
      </div>
    </div>
  );
};

export default EnemyCard;
