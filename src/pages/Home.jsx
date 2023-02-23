import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';

const Home = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('home');
  }, []);
  return <h1>{page}</h1>;
};
export default Home;
