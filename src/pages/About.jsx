import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';
import AboutComponents from '../ui-components/AboutComponent';
import DivFlex from '../ui-components/Divflex';

const About = () => {
  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('about');
  }, []);
  return (
    <DivFlex direction="column" padding="1rem" gap="30px">
      <h1>EQUIPO</h1>
      <DivFlex gap="3rem">
        <AboutComponents
          link1=""
          link2="https://github.com/Meryroo"
          img="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
          alt="mery"
          name="Maria"
        />
        <AboutComponents
          link1="https://www.linkedin.com/in/rafael-garc%C3%ADa-rivas-9b5303264/"
          link2="https://github.com/Rgrivas9"
          img="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
          alt="rafa"
          name="Rafa"
        />
        <AboutComponents
          link1="https://www.linkedin.com/in/adrian-soto-9b66a9246/"
          link2="https://github.com/Kirk810"
          img="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
          alt="adri"
          name="Adrián"
        />
        <AboutComponents
          link1="https://www.linkedin.com/in/carlos-olano-gonz%C3%A1lez-338b3b68/"
          link2="https://github.com/olanovich3?tab=repositories"
          img="https://res.cloudinary.com/dysog0ybg/image/upload/v1677166274/9JM2umQBwkZPwTXA3vvWdf_myjjft.jpg"
          alt="carlos"
          name="Carlos"
        />
      </DivFlex>
    </DivFlex>
  );
};
export default About;
