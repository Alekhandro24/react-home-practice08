import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PrivateRoutes() {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="login" />;
}
