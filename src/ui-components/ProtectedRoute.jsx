import UseContext from 'react';
import { Navigate } from 'react-router-dom/dist';

import { UserContext } from '../context/UserContext';

const ProtectecRoute = ({ children }) => {
  const { user } = UseContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
export default ProtectecRoute;
