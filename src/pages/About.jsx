import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';

const About = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('about');
  }, []);
  return <h1>{page}</h1>;
};
export default About;
