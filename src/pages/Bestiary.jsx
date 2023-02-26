import '.Bestiary.css';

import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../context/PageContext';
import Divflex from '../ui-components/Divflex';
import DivGrid from '../ui-components/DivGrid';
import EnemyCard from '../ui-components/EnemyCard';
import InputData from '../ui-components/InputData';
import MinMaxFilter from '../ui-components/MinMaxFilter';
import FilterFunction from '../utils/FilterFunction';
import GetMinMax from '../utils/GetMinMax';
import GetUnics from '../utils/GetUnics';
import mock from '../utils/Mock';
/* const object = {
    name: '',
    level: [0, 100],
    HP: [0, 100],
    MP: [0, 100],
    exp: [0, 100],
    AP: [0, 100],
    gil: [0, 100],
    items: [],
    strategy: [],
    enemy_skill: [],
    location: [],
  }; */
const Bestiary = () => {
  const [enemies, setEnemies] = useState([]);
  const getEnemies = async () => {
    const res = await fetch('https://63f26f29f28929a9df5a9085.mockapi.io/enemies');
    const data = await res.json();
    setEnemies(data);
  };

  useEffect(() => {
    getEnemies();
    console.log(enemies);
  }, []);

  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('bestiary');
  }, []);
  const handleChange = (ev) => {
    let min = 0;
    let max = 0;
    if (ev.currentTarget.className == 'maxInput') {
      min = ev.currentTarget.nextSibling.value;
      max = ev.currentTarget.value;
    } else {
      max = ev.currentTarget.previousSibling.value;
      min = ev.currentTarget.value;
    }
    return [min, max];
  };
  const list = mock.slice(0, 5); //resultado del filter
  const items = GetUnics(list, 'items');
  const strategy = GetUnics(list, 'strategy');
  const enemy_skill = GetUnics(list, 'enemy_skill');
  const location = GetUnics(list, 'location');
  const minMaxLevelValues = GetMinMax(mock.slice(0, 5), ['level']);
  const minMaxHPValues = GetMinMax(mock.slice(0, 5), ['atributes', 'HP']);
  const minMaxMPValues = GetMinMax(mock.slice(0, 5), ['atributes', 'MP']);
  const minMaxExpValues = GetMinMax(mock.slice(0, 5), ['earned', 'exp']);
  const minMaxAPValues = GetMinMax(mock.slice(0, 5), ['earned', 'AP']);
  const minMaxGilValues = GetMinMax(mock.slice(0, 5), ['earned', 'gil']);
  const maxMaxLevel = minMaxLevelValues[1];
  const minMinLevel = minMaxLevelValues[0];
  const maxMaxHP = minMaxHPValues[1];
  const minMinHP = minMaxHPValues[0];
  const maxMaxMP = minMaxMPValues[1];
  const minMinMP = minMaxMPValues[0];
  const maxMaxExp = minMaxExpValues[1];
  const minMinExp = minMaxExpValues[0];
  const maxMaxAP = minMaxAPValues[1];
  const minMinAP = minMaxAPValues[0];
  const maxMaxGil = minMaxGilValues[1];
  const minMinGil = minMaxGilValues[0];
  const [minMaxLevel, setMinLevel] = useState(minMinLevel);
  const [maxMinLevel, setMaxLevel] = useState(maxMaxLevel);
  const [minMaxHP, setMinHP] = useState(minMinHP);
  const [maxMinHP, setMaxHP] = useState(maxMaxHP);
  const [minMaxMP, setMinMP] = useState(minMinMP);
  const [maxMinMP, setMaxMP] = useState(maxMaxMP);
  const [minMaxAP, setMinAP] = useState(minMinAP);
  const [maxMinAP, setMaxAP] = useState(maxMaxAP);
  const [minMaxExp, setMinExp] = useState(minMinExp);
  const [maxMinExp, setMaxExp] = useState(maxMaxExp);
  const [minMaxGil, setMinGil] = useState(minMinGil);
  const [maxMinGil, setMaxGil] = useState(maxMaxGil);
  const [newObject, setNewObject] = useState({
    name: '',
    level: [0, 100],
    HP: [0, 100],
    MP: [0, 100],
    exp: [0, 100],
    AP: [0, 100],
    gil: [0, 100],
    items: [],
    strategy: [],
    enemy_skill: [],
    location: [],
  });
  return (
    <Divflex variant={'#10101C'} gap={'5rem'}>
      <div className="filter-container">
        <InputData
          type={'text'}
          placeholder={name}
          onChange={(ev) => {
            setNewObject({ ...newObject, name: ev.target.value });
            const actulizedObject = { ...newObject, name: ev.target.value };
            setEnemies(FilterFunction(list, actulizedObject));
          }}
        />
        <h4>Level</h4>
        <MinMaxFilter
          action={(ev) => {
            const minmax = handleChange(ev);
            setMinLevel(minmax[0]);
            setMaxLevel(minmax[1]);
            setNewObject({ ...newObject, level: [minmax[0], minmax[1]] });
            const actulizedObject = { ...newObject, level: [minmax[0], minmax[1]] };
            setEnemies(FilterFunction(list, actulizedObject));
          }}
          minMin={minMinLevel}
          maxMin={maxMinLevel}
          minMax={minMaxLevel}
          maxMax={maxMaxLevel}
        />
        <h4>HP</h4>
        <MinMaxFilter
          action={(ev) => {
            const minmax = handleChange(ev);
            setMinHP(minmax[0]);
            setMaxHP(minmax[1]);
            setNewObject({ ...newObject, HP: [minmax[0], minmax[1]] });
            const actulizedObject = { ...newObject, HP: [minmax[0], minmax[1]] };
            setEnemies(FilterFunction(list, actulizedObject));
          }}
          minMin={minMinHP}
          maxMin={maxMinHP}
          minMax={minMaxHP}
          maxMax={maxMaxHP}
        />
        <h4>MP</h4>
        <MinMaxFilter
          action={(ev) => {
            const minmax = handleChange(ev);
            setMinMP(minmax[0]);
            setMaxMP(minmax[1]);
            setNewObject({ ...newObject, MP: [minmax[0], minmax[1]] });
            const actulizedObject = { ...newObject, MP: [minmax[0], minmax[1]] };
            setEnemies(FilterFunction(list, actulizedObject));
          }}
          minMin={minMinMP}
          maxMin={maxMinMP}
          minMax={minMaxMP}
          maxMax={maxMaxMP}
        />
        <h4>exp</h4>
        <MinMaxFilter
          action={(ev) => {
            const minmax = handleChange(ev);
            setMinExp(minmax[0]);
            setMaxExp(minmax[1]);
            setNewObject({ ...newObject, exp: [minmax[0], minmax[1]] });
            const actulizedObject = { ...newObject, exp: [minmax[0], minmax[1]] };
            setEnemies(FilterFunction(list, actulizedObject));
          }}
          minMin={minMinExp}
          maxMin={maxMinExp}
          minMax={minMaxExp}
          maxMax={maxMaxExp}
        />
        <h4>AP</h4>
        <MinMaxFilter
          action={(ev) => {
            const minmax = handleChange(ev);
            setMinAP(minmax[0]);
            setMaxAP(minmax[1]);
            setNewObject({ ...newObject, AP: [minmax[0], minmax[1]] });
            const actulizedObject = { ...newObject, AP: [minmax[0], minmax[1]] };
            setEnemies(FilterFunction(list, actulizedObject));
          }}
          minMin={minMinAP}
          maxMin={maxMinAP}
          minMax={minMaxAP}
          maxMax={maxMaxAP}
        />
        <h4>Gil</h4>
        <MinMaxFilter
          action={(ev) => {
            const minmax = handleChange(ev);
            setMinGil(minmax[0]);
            setMaxGil(minmax[1]);
            setNewObject({ ...newObject, gil: [minmax[0], minmax[1]] });
            const actulizedObject = { ...newObject, gil: [minmax[0], minmax[1]] };
            setEnemies(FilterFunction(list, actulizedObject));
          }}
          minMin={minMinGil}
          maxMin={maxMinGil}
          minMax={minMaxGil}
          maxMax={maxMaxGil}
        />
        <div name="items" id="items">
          {items.map((item) =>
            item != 'None' ? (
              <div key={item}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={(ev) => {
                    if (ev.target.checked) {
                      const actulizedObject = {
                        ...newObject,
                        items: [...newObject.items, ev.target.id],
                      };
                      setNewObject({
                        ...newObject,
                        items: [...newObject.items, ev.target.id],
                      });
                      setEnemies(FilterFunction(list, actulizedObject));
                    } else {
                      const removed = [];
                      newObject.items.forEach((item) => {
                        if (item != ev.target.id) {
                          removed.push(item);
                        }
                      });
                      const actulizedObject = {
                        ...newObject,
                        items: removed,
                      };
                      setNewObject({
                        ...newObject,
                        items: removed,
                      });
                      setEnemies(FilterFunction(list, actulizedObject));
                    }
                  }}
                />
                <h4>{item}</h4>
              </div>
            ) : (
              <div key={item}></div>
            ),
          )}
        </div>
        <div name="strategy" id="strategy">
          {strategy.map((item) =>
            item != 'None' ? (
              <div key={item}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={(ev) => {
                    if (ev.target.checked) {
                      const actulizedObject = {
                        ...newObject,
                        strategy: [...newObject.strategy, ev.target.id],
                      };
                      setNewObject({
                        ...newObject,
                        strategy: [...newObject.strategy, ev.target.id],
                      });
                      setEnemies(FilterFunction(list, actulizedObject));
                    } else {
                      const removed = [];
                      newObject.strategy.forEach((item) => {
                        if (item != ev.target.id) {
                          removed.push(item);
                        }
                      });
                      const actulizedObject = {
                        ...newObject,
                        strategy: removed,
                      };
                      setEnemies(FilterFunction(list, actulizedObject));
                    }
                  }}
                />
                <h4>{item}</h4>
              </div>
            ) : (
              <div key={item}></div>
            ),
          )}
        </div>
        <div name="enemy_skill" id="enemy_skill">
          {enemy_skill.map((item) =>
            item != 'None' ? (
              <div key={item}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={(ev) => {
                    if (ev.target.checked) {
                      const actulizedObject = {
                        ...newObject,
                        enemy_skill: [...newObject.enemy_skill, ev.target.id],
                      };
                      setNewObject({
                        ...newObject,
                        enemy_skill: [...newObject.enemy_skill, ev.target.id],
                      });
                      setEnemies(FilterFunction(list, actulizedObject));
                    } else {
                      const removed = [];
                      newObject.enemy_skill.forEach((item) => {
                        if (item != ev.target.id) {
                          removed.push(item);
                        }
                      });
                      const actulizedObject = {
                        ...newObject,
                        enemy_skill: removed,
                      };
                      setNewObject({
                        ...newObject,
                        enemy_skill: removed,
                      });
                      setEnemies(FilterFunction(list, actulizedObject));
                    }
                  }}
                />
                <h4>{item}</h4>
              </div>
            ) : (
              <div key={item}></div>
            ),
          )}
        </div>
        <div name="location" id="location">
          {location.map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                id={item}
                onChange={(ev) => {
                  if (ev.target.checked) {
                    const actulizedObject = {
                      ...newObject,
                      location: [...newObject.location, ev.target.id],
                    };
                    setNewObject({
                      ...newObject,
                      location: [...newObject.location, ev.target.id],
                    });
                    setEnemies(FilterFunction(list, actulizedObject));
                  } else {
                    const removed = [];
                    newObject.location.forEach((item) => {
                      if (item != ev.target.id) {
                        removed.push(item);
                      }
                    });
                    const actulizedObject = {
                      ...newObject,
                      location: [...removed],
                    };
                    setNewObject({
                      ...newObject,
                      location: [...removed],
                    });
                    setEnemies(FilterFunction(list, actulizedObject));
                  }
                }}
              />
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </div>
      <DivGrid gap={'2rem'} cols={'300px 300px 300px 300px'}>
        {enemies.map((enemy) => (
          <EnemyCard enemy={enemy} key={enemy.id} />
        ))}
      </DivGrid>
    </Divflex>
  );
};
export default Bestiary;
