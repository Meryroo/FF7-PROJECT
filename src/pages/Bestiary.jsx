import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../context/PageContext';
import MinMaxFilter from '../ui-components/MinMaxFilter';
const Bestiary = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('bestiary');
  }, []);
  const maxMax = 100;
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
  return (
    <div>
      <h1>{page}</h1>
      <MinMaxFilter
        action={(ev) => handleChange(ev)}
        minMin={minMin}
        maxMin={maxMin}
        minMax={minMax}
        maxMax={maxMax}
      />
    </div>
  );
};
export default Bestiary;
