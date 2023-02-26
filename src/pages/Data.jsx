import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../context/PageContext';
import Button from '../ui-components/Button';
import DataDivModal from '../ui-components/DataDivModal';
import DataEnemyCard from '../ui-components/DataEnemyCard';
import DataForm from '../ui-components/DataForm';
import DataFormModal from '../ui-components/DataFormModal';
import DataModal from '../ui-components/DataModal';
import DivFlex from '../ui-components/Divflex';
import DivGrid from '../ui-components/DivGrid';
import InputData from '../ui-components/InputData';
import SectionFlex from '../ui-components/SectionFlex';

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
  const [editAppear, setEditAppear] = useState(false);

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
    fetch(`https://63f9da57beec322c57e8bc1d.mockapi.io/prueba/${id}`, {
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
    <div>
      <SectionFlex>
        <DivFlex gap="2rem" direction="column">
          <h2>CREATE ENEMY</h2>
          <DataForm onSubmit={(ev) => createEnemies(ev)}>
            <InputData
              type="text"
              ph="Imagen URL"
              onChange={(ev) => setNewEnemy({ ...newEnemy, img: ev.target.value })}
            />
            <InputData
              type="text"
              ph="name"
              onChange={(ev) => setNewEnemy({ ...newEnemy, name: ev.target.value })}
            />
            <InputData
              type="number"
              ph="level"
              onChange={(ev) => setNewEnemy({ ...newEnemy, level: ev.target.value })}
            />
            <InputData
              type="number"
              ph="HP"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  atributes: { ...newEnemy.atributes, HP: ev.target.value },
                })
              }
            />
            <InputData
              type="number"
              ph="MP"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  atributes: { ...newEnemy.atributes, MP: ev.target.value },
                })
              }
            />
            <InputData
              type="number"
              ph="exp"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  earned: { ...newEnemy.earned, exp: ev.target.value },
                })
              }
            />
            <InputData
              type="number"
              ph="AP"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  earned: { ...newEnemy.earned, AP: ev.target.value },
                })
              }
            />
            <InputData
              type="number"
              ph="gil"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  earned: { ...newEnemy.earned, gil: ev.target.value },
                })
              }
            />
            <InputData
              type="text"
              ph="drop"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  items: { ...newEnemy.items, drop: ev.target.value },
                })
              }
            />
            <InputData
              type="text"
              ph="morph"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  items: { ...newEnemy.items, morph: ev.target.value },
                })
              }
            />
            <InputData
              type="text"
              ph="steal"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  items: { ...newEnemy.items, steal: ev.target.value },
                })
              }
            />
            <InputData
              type="text"
              ph="Weakness"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  strategy: { ...newEnemy.strategy, weakness: ev.target.value },
                })
              }
            />
            <InputData
              type="text"
              ph="Immune"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  strategy: { ...newEnemy.strategy, immune: ev.target.value },
                })
              }
            />
            <InputData
              type="text"
              ph="Absorbs"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  strategy: { ...newEnemy.strategy, absorbs: ev.target.value },
                })
              }
            />
            <InputData
              type="text"
              ph="Enemy Skill"
              onChange={(ev) =>
                setNewEnemy({ ...newEnemy, enemy_skill: ev.target.value })
              }
            />
            <InputData type="text" ph="Location" />
            <Button
              type="button"
              text="Add Location"
              action={(ev) => {
                setLocationInput([...locationInput, ev.target.previousSibling.value]);
                const updateInput = [...locationInput, ev.target.previousSibling.value];
                setNewEnemy({ ...newEnemy, location: updateInput });
              }}
            />

            <Button type="submit" text="Create Enemy" />
            <Button
              type="button"
              text="Reset Data"
              action={() => setNewEnemy(...newEnemy, newEnemy)}
            />
          </DataForm>
          {error && <h3>{error}</h3>}
        </DivFlex>
        <DivGrid>
          {loaded ? (
            enemies.map((enemy) => (
              <DataEnemyCard key={enemy.id}>
                <img src={enemy.img} alt={enemy.name} />
                <h3>{enemy.name}</h3>
                <h3>Level: {enemy.level}</h3>
                <h4>Atributes</h4>
                <p>HP: {enemy.atributes.HP}</p>
                <p>MP: {enemy.atributes.MP}</p>
                {/* <h4>Earned</h4>
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
                <h4>{enemy.enemy_skill}</h4> */}
                <DivFlex gap="1rem">
                  <Button
                    size="sm"
                    text="Edit"
                    action={() => setEditEnemy(enemy) & setEditAppear(true)}
                  />
                  <Button
                    size="sm"
                    text="delete"
                    action={() => deleteEnemies(enemy.id)}
                  />
                </DivFlex>
              </DataEnemyCard>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </DivGrid>
      </SectionFlex>
      {editAppear && (
        <DataModal>
          <DataDivModal>
            <h2 className="h2data">EDIT ENEMY</h2>
            <DataFormModal onSubmit={(ev) => handleEditEnemy(ev, editEnemy.id)}>
              <InputData
                type="text"
                ph="Imagen URL"
                value={editEnemy.img}
                onChange={(ev) => setEditEnemy({ ...editEnemy, img: ev.target.value })}
              />
              <InputData
                type="text"
                ph="Name"
                value={editEnemy.name}
                onChange={(ev) => setEditEnemy({ ...editEnemy, name: ev.target.value })}
              />
              <InputData
                type="number"
                ph="Level"
                value={editEnemy.level}
                onChange={(ev) => setEditEnemy({ ...editEnemy, level: ev.target.value })}
              />
              <InputData
                type="number"
                ph="HP"
                value={editEnemy.atributes.HP}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    atributes: { ...editEnemy.atributes, HP: ev.target.value },
                  })
                }
              />
              <InputData
                type="number"
                ph="MP"
                value={editEnemy.atributes.MP}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    atributes: { ...editEnemy.atributes, MP: ev.target.value },
                  })
                }
              />
              <InputData
                type="number"
                ph="Exp"
                value={editEnemy.earned.exp}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    earned: { ...editEnemy.earned, exp: ev.target.value },
                  })
                }
              />
              <InputData
                type="number"
                ph="AP"
                value={editEnemy.earned.AP}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    earned: { ...editEnemy.earned, AP: ev.target.value },
                  })
                }
              />
              <InputData
                type="number"
                ph="gil"
                value={editEnemy.earned.gil}
                onChange={(ev) =>
                  editEnemy({
                    ...editEnemy,
                    earned: { ...editEnemy.earned, gil: ev.target.value },
                  })
                }
              />
              <InputData
                type="text"
                ph="drop"
                value={editEnemy.items.drop}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    items: { ...editEnemy.items, drop: ev.target.value },
                  })
                }
              />
              <InputData
                type="text"
                ph="morph"
                value={editEnemy.items.morph}
                onChange={(ev) =>
                  editEnemy({
                    ...editEnemy,
                    items: { ...editEnemy.items, morph: ev.target.value },
                  })
                }
              />
              <InputData
                type="text"
                ph="Steal"
                value={editEnemy.items.steal}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    items: { ...editEnemy.items, steal: ev.target.value },
                  })
                }
              />
              <InputData
                type="text"
                ph="Weakness"
                value={editEnemy.strategy.steal}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    strategy: { ...editEnemy.strategy, weakness: ev.target.value },
                  })
                }
              />
              <InputData
                type="text"
                ph="Immune"
                value={editEnemy.strategy.immune}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    strategy: { ...editEnemy.strategy, immune: ev.target.value },
                  })
                }
              />
              <InputData
                type="text"
                ph="Absorbs"
                value={editEnemy.strategy.absorbs}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    strategy: { ...editEnemy.strategy, absorbs: ev.target.value },
                  })
                }
              />
              <InputData
                type="text"
                ph="Enemy Skill"
                value={editEnemy.enemy_skill}
                onChange={(ev) =>
                  setEditEnemy({ ...editEnemy, enemy_skill: ev.target.value })
                }
              />
            </DataFormModal>
            <Button text="Edit Enemy" type="submit" action={() => setEditAppear(false)} />
            <Button text="Close" action={() => setEditAppear(false)} />
          </DataDivModal>
        </DataModal>
      )}
    </div>
  );
};

export default Data;
