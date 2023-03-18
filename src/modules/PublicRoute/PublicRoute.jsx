import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>...loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
