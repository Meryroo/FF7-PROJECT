import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';
import Heading from '../ui-components/Heading';
import Main from '../ui-components/Main';

const Home = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('home');
  }, []);
  return (
    <Main>
      <Heading color={'#E8DCB6'} as={'h1'} size={'xl'}>
        {page}
      </Heading>
    </Main>
  );
};
export default Home;
