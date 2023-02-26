import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../context/PageContext';
import Button from '../ui-components/Button';
import DataDivModal from '../ui-components/DataDivModal';
import DataEnemyCard from '../ui-components/DataEnemyCard';
import DataForm from '../ui-components/DataForm';
import DataFormModal from '../ui-components/DataFormModal';
import DataMain from '../ui-components/DataMain';
import DataModal from '../ui-components/DataModal';
import DivFlex from '../ui-components/Divflex';
import InputData from '../ui-components/InputData';
import Main from '../ui-components/Main';
import Spinner from '../ui-components/Spinner';
import TextComponent from '../ui-components/TextComponent';

const Data = () => {
  const { setPage } = useContext(PageContext);
  const [enemies, setEnemies] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [locationInput, setLocationInput] = useState([]);
  const resetEnemy = {
    name: '',
    img: '',
    level: 0,
    atributes: {
      HP: 0,
      MP: 0,
    },
    earned: {
      exp: 0,
      AP: 0,
      gil: 0,
    },
    items: {
      drop: '',
      morph: '',
      steal: '',
    },
    strategy: {
      weakness: '',
      immune: '',
      absorbs: '',
    },
    enemy_skill: '',
    location: [],
  };
  const [newEnemy, setNewEnemy] = useState({ ...resetEnemy });
  const [currentLocation, setCurrentLocation] = useState('');

  const [error, setError] = useState();
  const [editEnemy, setEditEnemy] = useState({
    name: '',
    img: '',
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
    if (
      !newEnemy.img ||
      !newEnemy.name ||
      !newEnemy.level ||
      !newEnemy.atributes.HP ||
      !newEnemy.atributes.MP ||
      !newEnemy.earned.exp ||
      !newEnemy.earned.AP ||
      !newEnemy.earned.gil ||
      !newEnemy.items.drop ||
      !newEnemy.items.morph ||
      !newEnemy.items.steal ||
      !newEnemy.strategy.weakness ||
      !newEnemy.strategy.immune ||
      !newEnemy.strategy.absorbs ||
      !newEnemy.enemy_skill
    ) {
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
    <Main>
      <DataMain>
        <DivFlex gap="2rem" direction="column">
          <h2>
            <TextComponent color="black" text="CREATE ENEMY" />
          </h2>
          <DataForm onSubmit={(ev) => createEnemies(ev)}>
            <InputData
              value={newEnemy.img}
              type="text"
              ph="Imagen URL"
              onChange={(ev) => setNewEnemy({ ...newEnemy, img: ev.target.value })}
            />
            <InputData
              value={newEnemy.name}
              type="text"
              ph="name"
              onChange={(ev) => setNewEnemy({ ...newEnemy, name: ev.target.value })}
            />
            <InputData
              value={newEnemy.level}
              type="number"
              ph="level"
              onChange={(ev) => setNewEnemy({ ...newEnemy, level: ev.target.value })}
            />
            <InputData
              value={newEnemy.atributes.HP}
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
              value={newEnemy.atributes.MP}
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
              value={newEnemy.earned.exp}
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
              value={newEnemy.earned.AP}
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
              value={newEnemy.earned.gil}
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
              value={newEnemy.items.drop}
              type="text"
              ph="drop"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  items: { ...newEnemy.items, drop: [ev.target.value] },
                })
              }
            />
            <InputData
              value={newEnemy.items.morph}
              type="text"
              ph="morph"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  items: { ...newEnemy.items, morph: [ev.target.value] },
                })
              }
            />
            <InputData
              value={newEnemy.items.steal}
              type="text"
              ph="steal"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  items: { ...newEnemy.items, steal: [ev.target.value] },
                })
              }
            />
            <InputData
              value={newEnemy.strategy.weakness}
              type="text"
              ph="Weakness"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  strategy: { ...newEnemy.strategy, weakness: [ev.target.value] },
                })
              }
            />
            <InputData
              value={newEnemy.strategy.immune}
              type="text"
              ph="Immune"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  strategy: { ...newEnemy.strategy, immune: [ev.target.value] },
                })
              }
            />
            <InputData
              value={newEnemy.strategy.absorbs}
              type="text"
              ph="Absorbs"
              onChange={(ev) =>
                setNewEnemy({
                  ...newEnemy,
                  strategy: { ...newEnemy.strategy, absorbs: [ev.target.value] },
                })
              }
            />
            <InputData
              value={newEnemy.enemy_skill}
              type="text"
              ph="Enemy Skill"
              onChange={(ev) =>
                setNewEnemy({ ...newEnemy, enemy_skill: [ev.target.value] })
              }
            />
            <InputData
              type="text"
              ph="Location"
              value={currentLocation}
              onChange={(ev) => setCurrentLocation(ev.target.value)}
            />
            <Button
              variant={'dark'}
              type="button"
              text="Add Location"
              action={(ev) => {
                setLocationInput([...locationInput, ev.target.previousSibling.value]);
                const updateInput = [...locationInput, ev.target.previousSibling.value];
                setNewEnemy({ ...newEnemy, location: updateInput });
                setCurrentLocation('');
              }}
            />

            <Button variant={'dark'} type="submit" text="Create Enemy" />
            <Button
              variant={'dark'}
              type="button"
              text="Reset Data"
              action={() => setNewEnemy({ ...resetEnemy }) & setCurrentLocation('')}
            />
          </DataForm>
          {error && <h3>{error}</h3>}
        </DivFlex>
        <DivFlex gap="2rem" padding="5rem" height="550px" flowx="hidden" flowy="scroll">
          {loaded ? (
            enemies.map((enemy) => (
              <DataEnemyCard key={enemy.id}>
                <img src={enemy.img} alt={enemy.name} />
                <h3>
                  <TextComponent text={enemy.name} />
                </h3>
                <h3>
                  <TextComponent text={`LEVEL: ${enemy.level}`} />
                </h3>

                <p>
                  <TextComponent text={`HP: ${enemy.atributes.HP}`} />
                </p>
                <p>
                  <TextComponent text={`MP: ${enemy.atributes.MP}`} />
                </p>

                <DivFlex gap="1rem">
                  <Button
                    size="sm"
                    variant={'dark'}
                    text="Edit"
                    action={() => setEditEnemy(enemy) & setEditAppear(true)}
                  />
                  <Button
                    size="sm"
                    variant={'dark'}
                    text="delete"
                    action={() => deleteEnemies(enemy.id)}
                  />
                </DivFlex>
              </DataEnemyCard>
            ))
          ) : (
            <Spinner />
          )}
        </DivFlex>
      </DataMain>
      {editAppear && (
        <DataModal>
          <DataDivModal>
            <h2>EDIT ENEMY</h2>
            <DataFormModal>
              <InputData
                type="text"
                ph="Imagen URL"
                value={editEnemy.img}
                onChange={(ev) => {
                  setEditEnemy({ ...editEnemy, img: ev.target.value });
                }}
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
                    items: { ...editEnemy.items, drop: [ev.target.value] },
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
                    items: { ...editEnemy.items, morph: [ev.target.value] },
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
                    items: { ...editEnemy.items, steal: [ev.target.value] },
                  })
                }
              />
              <InputData
                type="text"
                ph="Weakness"
                value={editEnemy.strategy.weakness}
                onChange={(ev) =>
                  setEditEnemy({
                    ...editEnemy,
                    strategy: { ...editEnemy.strategy, weakness: [ev.target.value] },
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
                    strategy: { ...editEnemy.strategy, immune: [ev.target.value] },
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
                    strategy: { ...editEnemy.strategy, absorbs: [ev.target.value] },
                  })
                }
              />
              <InputData
                type="text"
                ph="Enemy Skill"
                value={editEnemy.enemy_skill}
                onChange={(ev) =>
                  setEditEnemy({ ...editEnemy, enemy_skill: [ev.target.value] })
                }
              />
              <Button
                variant={'dark'}
                text="Edit Enemy"
                type="submit"
                action={(ev) => {
                  handleEditEnemy(ev, editEnemy.id);
                  setEditAppear(false);
                }}
              />
            </DataFormModal>

            <Button variant={'dark'} text="Close" action={() => setEditAppear(false)} />
          </DataDivModal>
        </DataModal>
      )}
    </Main>
  );
};

export default Data;
