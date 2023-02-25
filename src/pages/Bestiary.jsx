import { useContext, useEffect, useState } from 'react';

//useState
import { PageContext } from '../context/PageContext';
import FilterFunction from '../utils/FilterFunction';
import GetUnics from '../utils/GetUnics';
//import FilterFunction from '../utils/FilterFunction';
import mock from '../utils/Mock';
//import MinMaxFilter from '../ui-components/MinMaxFilter';
const Bestiary = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('bestiary');
  }, []);
  /*  const maxMax = 100;
  const minMin = 0;
  const [minMax, setMin] = useState(minMin);
  const [maxMin, setMax] = useState(maxMax);
  const handleChange = (ev) => {
    if (ev.currentTarget.className == 'maxInput') {
      setMin(ev.currentTarget.nextSibling.value);
      setMax(ev.currentTarget.value);
    } else {
      setMin(ev.currentTarget.value);
      setMax(ev.currentTarget.previousSibling.value);
    }
  }; 
  <MinMaxFilter
        action={(ev) => handleChange(ev)}
        minMin={minMin}
        maxMin={maxMin}
        minMax={minMax}
        maxMax={maxMax}
      />*/
  const object = {
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
  };
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
  const list = mock;
  const [unalteredList, setUnalteredList] = useState([]); //allnumberslist
  const [bothList, setBothList] = useState(
    FilterFunction(list, unalteredList, object, newObject),
  ); //resultado del filter
  const [finalList, setFinalList] = useState(bothList[1]); //finallist
  const items = GetUnics(list, 'items');
  const strategy = GetUnics(list, 'strategy');
  const enemy_skill = GetUnics(list, 'enemy_skill');
  const location = GetUnics(list, 'location');
  return (
    <div>
      <h1>{page}</h1>
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
                    const filtered = FilterFunction(
                      list,
                      unalteredList,
                      newObject,
                      actulizedObject,
                    );
                    setBothList(filtered);
                    setUnalteredList(filtered[0]);
                    setFinalList(filtered[1]);
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
                    const filtered = FilterFunction(
                      list,
                      unalteredList,
                      newObject,
                      actulizedObject,
                    );
                    setBothList(filtered);
                    setUnalteredList(filtered[0]);
                    setFinalList(filtered[1]);
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
                    const filtered = FilterFunction(
                      list,
                      unalteredList,
                      newObject,
                      actulizedObject,
                    );
                    setBothList(filtered);
                    setUnalteredList(filtered[0]);
                    setFinalList(filtered[1]);
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
                    setNewObject({
                      ...newObject,
                      strategy: removed,
                    });
                    const filtered = FilterFunction(
                      list,
                      unalteredList,
                      newObject,
                      actulizedObject,
                    );
                    setBothList(filtered);
                    setUnalteredList(filtered[0]);
                    setFinalList(filtered[1]);
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
                    const filtered = FilterFunction(
                      list,
                      unalteredList,
                      newObject,
                      actulizedObject,
                    );
                    setBothList(filtered);
                    setUnalteredList(filtered[0]);
                    setFinalList(filtered[1]);
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
                    const filtered = FilterFunction(
                      list,
                      unalteredList,
                      newObject,
                      actulizedObject,
                    );
                    setBothList(filtered);
                    setUnalteredList(filtered[0]);
                    setFinalList(filtered[1]);
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
                  const filtered = FilterFunction(
                    list,
                    unalteredList,
                    newObject,
                    actulizedObject,
                  );
                  setBothList(filtered);
                  setUnalteredList(filtered[0]);
                  setFinalList(filtered[1]);
                } else {
                  const removed = [];
                  newObject.location.forEach((item) => {
                    if (item != ev.target.id) {
                      removed.push(item);
                    }
                  });
                  const actulizedObject = {
                    ...newObject,
                    location: removed,
                  };
                  setNewObject({
                    ...newObject,
                    location: removed,
                  });
                  const filtered = FilterFunction(
                    list,
                    unalteredList,
                    newObject,
                    actulizedObject,
                  );
                  setBothList(filtered);
                  setUnalteredList(filtered[0]);
                  setFinalList(filtered[1]);
                }
              }}
            />
            <h4>{item}</h4>
          </div>
        ))}
      </div>
      <div>
        {finalList.map((enemy) => (
          <div key={enemy.id}>
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
            <p>---------</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Bestiary;
