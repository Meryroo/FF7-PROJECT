const FilterFunction = (list, unalteredList, object, newObject) => {
  const filter =
    CompareObjects(object, newObject).length == 0
      ? object
      : CompareObjects(object, newObject);
  let finalList = list;
  let allNumbersList = [];
  if (filter.method === 'numberOrName') {
    finalList = FilterNumberOrName(unalteredList, filter);
    allNumbersList = unalteredList;
    return [allNumbersList, finalList];
  }
  if (filter.method === 'addArray') {
    allNumbersList = [...unalteredList, ...FilterArrays(list, filter.key, filter.value)];
    allNumbersList = removeDuplicates(allNumbersList);
    finalList = FilterNumberOrName(allNumbersList, filter);
    return [allNumbersList, finalList];
  }
  if (filter.method === 'removeArray' && filter.value.length != 0) {
    filter.value.forEach((value) =>
      allNumbersList.push(...FilterArrays(unalteredList, filter.key, value)),
    );
    allNumbersList = removeDuplicates(allNumbersList);
    finalList = FilterNumberOrName(allNumbersList, filter);
    return [allNumbersList, finalList];
  }
  if (filter.method === 'addObject') {
    allNumbersList = [...unalteredList, ...FilterObjects(list, filter.key, filter.value)];
    allNumbersList = removeDuplicates(allNumbersList);
    finalList = FilterNumberOrName(allNumbersList, filter);
    return [allNumbersList, finalList];
  }
  if (filter.method === 'removeObject' && filter.value.length != 0) {
    filter.value.forEach((value) =>
      allNumbersList.push(...FilterObjects(unalteredList, filter.key, value)),
    );
    allNumbersList = removeDuplicates(allNumbersList);
    finalList = FilterNumberOrName(allNumbersList, filter);
    return [allNumbersList, finalList];
  } else {
    return [allNumbersList, finalList];
  }
};
export default FilterFunction;

const FilterNumberOrName = (list, filter) => {
  const listName = filter.name == '' ? list : filterName(list, filter.name);
  const listLevel =
    filter.level[0] == 0 && filter.level[1] == 100
      ? listName
      : FilterLevel(listName, filter.level);
  const listHP =
    filter.HP[0] == 0 && filter.HP[1] == 100
      ? listLevel
      : FilterNumbers(listLevel, ['atributes', 'HP'], filter.HP);
  const listMP =
    filter.MP[0] == 0 && filter.MP[1] == 100
      ? listHP
      : FilterNumbers(listLevel, ['atributes', 'MP'], filter.MP);

  const listExp =
    filter.exp[0] == 0 && filter.exp[1] == 100
      ? listMP
      : FilterNumbers(listMP, ['earned', 'exp'], filter.exp);
  const listAP =
    filter.AP[0] == 0 && filter.AP[1] == 100
      ? listExp
      : FilterNumbers(listExp, ['earned', 'AP'], filter.AP);
  const listGil =
    filter.gil[0] == 0 && filter.gil[1] == 100
      ? listAP
      : FilterNumbers(listAP, ['earned', 'gil'], filter.gil);

  return listGil;
};
const CompareObjects = (object, newObject) => {
  let finalObject = {};
  for (const key in object) {
    if (
      object[key][0] != newObject[key][0] ||
      object[key][object[key].length - 1] != newObject[key][[newObject[key].length - 1]]
    ) {
      if (
        key != 'items' &&
        key != 'strategy' &&
        key != 'enemy_skill' &&
        key != 'location'
      ) {
        finalObject = { ...newObject, method: 'numberOrName' };
      }
      if (key == 'enemy_skill' || key == 'location') {
        object[key].length < newObject[key].length
          ? (finalObject = {
              ...newObject,
              key: key,
              value: newObject[key][newObject[key].length - 1],
              method: 'addArray',
            })
          : (finalObject = {
              ...newObject,
              key: key,
              value: newObject[key],
              method: 'removeArray',
            });
      }
      if (key == 'items' || key == 'strategy') {
        object[key].length < newObject[key].length
          ? (finalObject = {
              ...newObject,
              key: key,
              value: newObject[key][newObject[key].length - 1],
              method: 'addObject',
            })
          : (finalObject = {
              ...newObject,
              key: key,
              value: newObject[key],
              method: 'removeObject',
            });
      }
    }
  }
  return finalObject;
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
  return list.filter((enemy) => value == enemy[key].find((val) => val === value));
};
const FilterNumbers = (list, keys, value) => {
  return list.filter(
    (enemy) => enemy[keys[0]][keys[1]] >= value[0] && enemy[keys[0]][keys[1]] <= value[1],
  );
};
const FilterLevel = (list, value) => {
  return list.filter((enemy) => enemy.level >= value[0] && enemy.level <= value[1]);
};
const removeDuplicates = (list) => {
  const idList = list.map((enemy) => enemy.id);
  idList.sort((a, b) => a - b);
  const noRepeatIds = [];
  const noRepeatEnemies = [];
  let index = 0;
  idList.forEach((id) => {
    index++;
    if (id !== idList[index]) {
      noRepeatIds.push(id);
    }
  });
  noRepeatIds.forEach((id) => {
    noRepeatEnemies.push(list.find((enemy) => enemy.id === id));
  });
  return noRepeatEnemies;
};
