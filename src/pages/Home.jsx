import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';
import Heading from '../ui-components/Heading';

const Home = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('home');
  }, []);
  return (
    <Heading as={'h1'} size={'xl'}>
      {page}
    </Heading>
  );
};
export default Home;
