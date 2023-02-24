const FilterFunction = (list, unalteredList, object, newObject) => {
  const filter = CompareObjects(object, newObject);
  if (filter.method === 'add') {
    return filter.key === 'name'
      ? filterName(unalteredList, filter.value)
      : filter.key === 'enemy_skill' || filter.key === 'location'
      ? FilterArrays(unalteredList, filter.key, filter.value[filter.value.length - 1])
      : FilterObjects(unalteredList, filter.key, filter.value[filter.value.length - 1]);
  }
  if (filter.method === 'remove') {
    const listName = filter.name == '' ? list : filterName(list, filter.name);
    const listLevel = filter.level == [] ? listName : FilterLevel(listName, filter.level);
    const listHP =
      filter.HP == []
        ? listLevel
        : FilterNumbers(listLevel, ['atributes', 'HP'], filter.HP);
    const listMP =
      filter.MP == [] ? listHP : FilterNumbers(listLevel, ['atributes', 'MP'], filter.MP);
    const listExp =
      filter.exp == [] ? listMP : FilterNumbers(listMP, ['earned', 'exp'], filter.exp);
    const listAP =
      filter.AP == [] ? listExp : FilterNumbers(listExp, ['earned', 'AP'], filter.AP);
    const listGil =
      filter.gil == [] ? listAP : FilterNumbers(listAP, ['earned', 'gil'], filter.gil);
    return listGil;
  }
};
export default FilterFunction;
const CompareObjects = (object, newObject) => {
  let finalObject = {};
  for (const key in object) {
    if (object[key] !== newObject[key]) {
      object[key].length < newObject[key].length
        ? (finalObject = { key: [key], value: newObject[key], method: 'add' })
        : (finalObject = { ...newObject, method: 'remove' });
    }
    return finalObject;
  }
};
const filterName = (list, value) => {
  return list.filter((enemy) => enemy.name.toLowerCase().includes(value.toLowerCase()));
};
const FilterObjects = (list, key, value) => {
  const array = [];
  list.forEach((enemy) => {
    let match = 0;
    for (const keys in enemy[key]) {
      enemy[key][keys].forEach((val) => {
        if (val === value) {
          match = 1;
        }
      });
    }
    if (match === 1) {
      array.push(enemy);
    }
  });
  return array;
};
const FilterArrays = (list, key, value) => {
  return list.filter((enemy) => value === enemy[key].map((val) => val === value)[0]);
};
const FilterNumbers = (list, keys, value) => {
  return list.filter(
    (enemy) => enemy[keys[0]][keys[1]] >= value[0] && enemy[keys[0]][keys[1]] <= value[1],
  );
};
const FilterLevel = (list, value) => {
  return list.filter((enemy) => enemy.level >= value[0] && enemy.level <= value[1]);
};
