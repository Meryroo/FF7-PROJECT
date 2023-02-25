import { useContext, useEffect } from 'react';

//useState
import { PageContext } from '../context/PageContext';
import FilterFunction from '../utils/FilterFunction';
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
  const newObject = {
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
    location: ['Corel prison'],
  };
  const list = mock;
  const unalteredList = mock;
  const bothList = FilterFunction(list, unalteredList, object, newObject);
  const finalList = bothList[1];

  return (
    <div>
      <h1>{page}</h1>
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
