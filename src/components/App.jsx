import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const isCurrentUserLoading = useSelector(authSelectors.isCurrentUserLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2c588a',
      },
      secondary: {
        main: '#a69cac',
      },
    },
  });
  return (
    <>
      {!isCurrentUserLoading && (
        <div>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Navigate to="login" />} />
                <Route element={<PublicRoutes restricted />}>
                  <Route path="login" element={<Login />} />
                </Route>
                <Route element={<PublicRoutes restricted />}>
                  <Route path="register" element={<Register />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                  <Route path="contacts" element={<Contacts />} />
                </Route>
                <Route element={<PublicRoutes restricted />}>
                  <Route path="*" element={<Login />} />
                </Route>
              </Route>
            </Routes>
          </ThemeProvider>
        </div>
      )}
    </>
  );
};
