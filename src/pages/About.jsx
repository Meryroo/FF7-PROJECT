import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';
import AboutComponent from '../ui-components/AboutComponent';
import DivFlex from '../ui-components/Divflex';

const About = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('about');
  }, []);
  return (
    <DivFlex direction="column" margin="40px">
      <h1>{page}</h1>
      <AboutComponent>
        <DivFlex height={'350px'} width={'300px'} variant={'blue'}></DivFlex>
        <DivFlex height={'350px'} width={'300px'} variant={'blue'}></DivFlex>
        <DivFlex height={'350px'} width={'300px'} variant={'blue'}></DivFlex>
        <DivFlex height={'350px'} width={'300px'} variant={'blue'}></DivFlex>
      </AboutComponent>
    </DivFlex>
  );
};
export default About;
