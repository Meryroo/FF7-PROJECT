import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';
import AboutComponents from '../ui-components/AboutComponent';
import DivFlex from '../ui-components/Divflex';

const About = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('about');
  }, []);
  return (
    <DivFlex direction="column" padding="1rem" gap="30px">
      <h1>{page}</h1>
      <DivFlex gap="3rem">
        <AboutComponents
          img="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
          alt="mery"
        />
        <AboutComponents
          img="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
          alt="rafa"
        />
        <AboutComponents
          img="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
          alt="adri"
        />
        <AboutComponents
          link1="https://www.linkedin.com/in/carlos-olano-gonz%C3%A1lez-338b3b68/"
          link2="https://github.com/olanovich3?tab=repositories"
          img="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
          alt="carlos"
        />
      </DivFlex>
    </DivFlex>
  );
};
export default About;
