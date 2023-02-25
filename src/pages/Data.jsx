import '../pages/Data.css';

import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../context/PageContext';

const Data = () => {
  const { setPage } = useContext(PageContext);
  const [enemies, setEnemies] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [locationInput, setLocationInput] = useState([]);
  const [newEnemy, setNewEnemy] = useState({
    img: '',
    name: '',
    level: '',
    atributes: '',
    earned: '',
    items: '',
    strategy: '',
    enemy_skill: '',
    location: [],
  });
  const [error, setError] = useState();
  const [editEnemy, setEditEnemy] = useState({
    img: '',
    name: '',
    level: '',
    atributes: '',
    earned: '',
    items: '',
    strategy: '',
    enemy_skill: '',
    location: [],
  });

  const getEnemies = async () => {
    const res = await fetch('https://63f9da57beec322c57e8bc1d.mockapi.io/prueba');
    const data = await res.json();
    setEnemies(data);
    setloaded(true);
  };

  const createEnemies = (ev) => {
    ev.preventDefault();
    if (!newEnemy.img) {
      setError('Formulario imcompleto');
    } else {
      setError(null);
      fetch('https://63f9da57beec322c57e8bc1d.mockapi.io/prueba', {
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
    fetch(`https://63f9da57beec322c57e8bc1d.mockapi.io/prueba/${id}`, {
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
      <section className="data-container">
        <div className="Createform">
          <h2>CREATE ENEMY</h2>
          <form onSubmit={(ev) => createEnemies(ev)}>
            <input
              type="text"
              placeholder="Imagen URL"
              onChange={(ev) => setNewEnemy({ ...newEnemy, img: ev.target.value })}
            />
            <input
              type="text"
              placeholder="name"
              onChange={(ev) => setNewEnemy({ ...newEnemy, name: ev.target.value })}
            />
            <input
              type="number"
              placeholder="level"
              onChange={(ev) => setNewEnemy({ ...newEnemy, level: ev.target.value })}
            />
            <input
              type="number"
              placeholder="HP"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  atributes: { ...newEnemy.atributes, HP: ev.target.value },
                })
              }
            />
            <input
              type="number"
              placeholder="MP"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  atributes: { ...newEnemy.atributes, MP: ev.target.value },
                })
              }
            />
            <input
              type="number"
              placeholder="exp"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  earned: { ...newEnemy.earned, exp: ev.target.value },
                })
              }
            />
            <input
              type="number"
              placeholder="AP"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  earned: { ...newEnemy.earned, AP: ev.target.value },
                })
              }
            />
            <input
              type="number"
              placeholder="gil"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  earned: { ...newEnemy.earned, gil: ev.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="drop"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  items: { ...newEnemy.items, drop: ev.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="morph"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  items: { ...newEnemy.items, morph: ev.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="steal"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  items: { ...newEnemy.items, steal: ev.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="Weakness"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  strategy: { ...newEnemy.strategy, weakness: ev.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="Immune"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  strategy: { ...newEnemy.strategy, immune: ev.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="Absorbs"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  strategy: { ...newEnemy.strategy, absorbs: ev.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="Enemy Skill"
              onChange={(ev) =>
                setNewEnemy({ ...newEnemy, enemy_skill: ev.target.value })
              }
            />
            <input type="text" placeholder="Location" />
            <button
              type="button"
              onClick={(ev) => {
                setLocationInput([...locationInput, ev.target.previousSibling.value]);
                const updateInput = [...locationInput, ev.target.previousSibling.value];
                setNewEnemy({ ...newEnemy, location: updateInput });
              }}
            >
              add Location
            </button>
            <button type="submit">Create Enemy</button>
          </form>
          {error && <h3>{error}</h3>}
        </div>
        {loaded ? (
          enemies.map((enemy) => (
            <div className="enemycard" key={enemy.id}>
              <img src={enemy.img} alt={enemy.name} />
              <h3>{enemy.name}</h3>
              <h3>{enemy.level}</h3>
              <h4>Atributes</h4>
              <p>HP: {enemy.atributes.HP}</p>
              <p>MP: {enemy.atributes.MP}</p>
              <h4>Earned</h4>
              <p>Exp: {enemy.earned.exp}</p>
              <p>AP: {enemy.earned.AP}</p>
              <p>gil: {enemy.earned.gil}</p>
              <h4>Items</h4>
              <p>Drop: {enemy.items.drop}</p>
              <p>Morph: {enemy.items.morph}</p>
              <p>Steal: {enemy.items.steal}</p>
              <h4>Strategy</h4>
              <p>Weakness: {enemy.strategy.weakness}</p>
              <p>Immune: {enemy.strategy.immune}</p>
              <p>Absorbs: {enemy.strategy.absorbs}</p>
              <h4>{enemy.enemy_skill}</h4>
              <button onClick={() => setEditEnemy(enemy)}>Edit</button>
              <button onClick={() => deleteEnemies(enemy.id)}>Delete</button>
            </div>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </section>
      <div className="editform">
        <h2>EDIT ENEMY</h2>
        <form onSubmit={(ev) => handleEditEnemy(ev, editEnemy.id)}>
          <input
            type="text"
            placeholder="Imagen URL"
            value={editEnemy.img}
            onChange={(ev) => setEditEnemy({ ...editEnemy, img: ev.target.value })}
          />
          <input
            type="text"
            placeholder="Name"
            value={editEnemy.name}
            onChange={(ev) => setEditEnemy({ ...editEnemy, name: ev.target.value })}
          />
          <input
            type="number"
            placeholder="Level"
            value={editEnemy.level}
            onChange={(ev) => setEditEnemy({ ...editEnemy, level: ev.target.value })}
          />
          <input
            type="number"
            placeholder="HP"
            value={editEnemy.atributes.HP}
            onChange={(ev) =>
              setEditEnemy({
                ...editEnemy,
                atributes: { ...editEnemy.atributes, HP: ev.target.value },
              })
            }
          />
          <input
            type="number"
            placeholder="MP"
            value={editEnemy.atributes.MP}
            onChange={(ev) =>
              setEditEnemy({
                ...editEnemy,
                atributes: { ...editEnemy.atributes, MP: ev.target.value },
              })
            }
          />
          <input
            type="number"
            placeholder="Exp"
            value={editEnemy.earned.exp}
            onChange={(ev) =>
              setEditEnemy({
                ...editEnemy,
                earned: { ...editEnemy.earned, exp: ev.target.value },
              })
            }
          />
          <input
            type="number"
            placeholder="AP"
            value={editEnemy.earned.AP}
            onChange={(ev) =>
              setEditEnemy({
                ...editEnemy,
                earned: { ...editEnemy.earned, AP: ev.target.value },
              })
            }
          />
          <input
            type="number"
            placeholder="gil"
            value={editEnemy.earned.gil}
            onChange={(ev) =>
              editEnemy({
                ...editEnemy,
                earned: { ...editEnemy.earned, gil: ev.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="drop"
            value={editEnemy.items.drop}
            onChange={(ev) =>
              setEditEnemy({
                ...editEnemy,
                items: { ...editEnemy.items, drop: ev.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="morph"
            value={editEnemy.items.morph}
            onChange={(ev) =>
              editEnemy({
                ...editEnemy,
                items: { ...editEnemy.items, morph: ev.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Steal"
            value={editEnemy.items.steal}
            onChange={(ev) =>
              setEditEnemy({
                ...editEnemy,
                items: { ...editEnemy.items, steal: ev.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Weakness"
            value={editEnemy.strategy.steal}
            onChange={(ev) =>
              setEditEnemy({
                ...editEnemy,
                strategy: { ...editEnemy.strategy, weakness: ev.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Immune"
            value={editEnemy.strategy.immune}
            onChange={(ev) =>
              setEditEnemy({
                ...editEnemy,
                strategy: { ...editEnemy.strategy, immune: ev.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Absorbs"
            value={editEnemy.strategy.absorbs}
            onChange={(ev) =>
              setEditEnemy({
                ...editEnemy,
                strategy: { ...editEnemy.strategy, absorbs: ev.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Enemy Skill"
            value={editEnemy.enemy_skill}
            onChange={(ev) =>
              setEditEnemy({ ...editEnemy, enemy_skill: ev.target.value })
            }
          />
          <button type="submit">Edit Enemy</button>
        </form>
      </div>
    </div>
  );
};

export default Data;
