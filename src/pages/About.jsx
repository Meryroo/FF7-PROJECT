import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';
import AboutComponents from '../ui-components/AboutComponent';
import DivFlex from '../ui-components/Divflex';
import Image from '../ui-components/Image';

const About = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('about');
  }, []);
  return (
    <DivFlex direction="column" padding="1rem" gap="30px">
      <h1>{page}</h1>
      <DivFlex gap="3rem">
        <DivFlex height={'350px'} width={'300px'} variant={'blue'}>
          <Image
            width="100%"
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
            alt="Mery"
          />
        </DivFlex>
        <DivFlex height={'350px'} width={'300px'} variant={'blue'}>
          <Image
            width="100%"
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
            alt="Rafa"
          />
        </DivFlex>
        <DivFlex height={'350px'} width={'300px'} variant={'blue'}>
          <Image
            width="100%"
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
            alt="Adri"
          />
        </DivFlex>
        <AboutComponents
          variant={'blue'}
          img="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
          alt="carlos"
        />
      </DivFlex>
    </DivFlex>
  );
};
export default About;
