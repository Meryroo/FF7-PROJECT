import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';

const Data = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('data');
  }, []);

  return <h1>{page}</h1>;
};
export default Data;
