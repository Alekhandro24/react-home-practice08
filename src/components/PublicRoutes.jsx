import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PublicRoutes({ restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="contacts" /> : <Outlet />;
}
