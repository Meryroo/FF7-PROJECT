import { useContext, useEffect } from 'react';

import { PageContext } from '../context/PageContext';

const Login = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('login');
  }, []);
  return <h1>{page}</h1>;
};
export default Login;
