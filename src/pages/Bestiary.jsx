import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';

const Bestiary = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('bestiary');
  }, []);
  return <h1>{page}</h1>;
};
export default Bestiary;
