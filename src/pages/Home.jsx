import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';
import Palette from '../styles/Palette';
import DivFlex from '../ui-components/Divflex';
import Heading from '../ui-components/Heading';
import Image from '../ui-components/Image';
import Main from '../ui-components/Main';
import TextHome from '../ui-components/TextHome';

const Home = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('home');
  }, []);
  return (
    <Main homeheight={'100%'}>
      <Heading headcolor={`${Palette.main.primary}`} as={'h1'} size={'xl'}>
        {page}
      </Heading>
      <DivFlex>
        <Image
          height={'300px'}
          width={'600px'}
          src="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166204/1366_2000_exzuxa.jpg"
          alt="character"
        />
        <TextHome />
      </DivFlex>
    </Main>
  );
};
export default Home;
