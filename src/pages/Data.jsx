import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../context/PageContext';

const Data = () => {
  const { page, setPage } = useContext(PageContext);
  const [enemies, setEnemies] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [newEnemy, setNewEnemy] = useState({
    image: '',
    name: '',
    subname: '',
    cc: '',
  });
  const [error, setError] = useState(null);
  const [editEnemy, setEditEnemy] = useState({
    image: '',
    name: '',
    subname: '',
    cc: '',
  });

  const getEnemies = async () => {
    const res = await fetch('https://63f26f29f28929a9df5a9085.mockapi.io/enemies');
    const data = await res.json();
    setEnemies(data);
    setloaded(true);
  };

  const createEnemies = (ev) => {
    ev.preventDefault();
    if (!newEnemy.image || !newEnemy.name || !newEnemy.subname || !newEnemy.cc) {
      setError('Formulario imcompleto');
    } else {
      setError(null);
      fetch('https://63f26f29f28929a9df5a9085.mockapi.io/enemies', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newEnemy),
      }).then(() => {
        getEnemies();
      });
    }
  };

  const deleteEnemies = (id) => {
    fetch(`https://63f26f29f28929a9df5a9085.mockapi.io/enemies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      getEnemies();
    });
  };

  const handleEditEnemy = (ev, id) => {
    ev.preventDefault();
    fetch(`https://63f26f29f28929a9df5a9085.mockapi.io/enemies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(editEnemy),
    }).then(() => {
      getEnemies();
    });
  };
  useEffect(() => {
    setPage('data');
    getEnemies();
  }, []);

  return (
    <div className="Api">
      <h1>{page}</h1>
      {loaded ? (
        enemies.map((enemy) => (
          <div className="enemycard" key={enemy.id}>
            <img src={enemy.image} alt={enemy.name} />
            <h3>{enemy.name}</h3>
            <h3>{enemy.subname}</h3>
            <h3>{enemy.cc}</h3>
            <button onClick={() => setEditEnemy(enemy)}>Edit</button>
            <button onClick={() => deleteEnemies(enemy.id)}>Delete</button>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
      <h2>CREATE ENEMY</h2>
      <form onSubmit={(ev) => createEnemies(ev)}>
        <input
          type="text"
          placeholder="Image URL"
          onChange={(ev) => setNewEnemy({ ...newEnemy, image: ev.target.value })}
        />
        <input
          type="text"
          placeholder="Brand"
          onChange={(ev) => setNewEnemy({ ...newEnemy, name: ev.target.value })}
        />
        <input
          type="text"
          placeholder="Model"
          onChange={(ev) => setNewEnemy({ ...newEnemy, subname: ev.target.value })}
        />
        <input
          type="number"
          placeholder="CC"
          onChange={(ev) => setNewEnemy({ ...newEnemy, cc: ev.target.value })}
        />
        <button type="submit">Create Enemy</button>
      </form>
      {error && <h3>{error}</h3>}
      <h2>EDIT ENEMY</h2>
      <form onSubmit={(ev) => handleEditEnemy(ev, editEnemy.id)}>
        <input
          type="text"
          placeholder="Image URL"
          value={editEnemy.image}
          onChange={(ev) => setEditEnemy({ ...editEnemy, image: ev.target.value })}
        />
        <input
          type="text"
          placeholder="Brand"
          value={editEnemy.name}
          onChange={(ev) => setEditEnemy({ ...editEnemy, name: ev.target.value })}
        />
        <input
          type="text"
          placeholder="Model"
          value={editEnemy.subname}
          onChange={(ev) => setEditEnemy({ ...editEnemy, subname: ev.target.value })}
        />
        <input
          type="number"
          placeholder="CC"
          value={editEnemy.cc}
          onChange={(ev) => setEditEnemy({ ...editEnemy, cc: ev.target.value })}
        />
        <button type="submit">Edit Enemy</button>
      </form>
    </div>
  );
};

export default Data;
