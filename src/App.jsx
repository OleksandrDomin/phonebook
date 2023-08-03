import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home/HomePage';
import { Layout } from './components/Layout/Layout';
import { fetchCurrentUserThunk } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { PublicRoute } from 'hoc/PublicRoute';
import { PrivateRoute } from 'hoc/PrivateRoute';
import LoadingPage from 'pages/LoadingPage/LoadingPage';

const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));
const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LogInPage = lazy(() => import('pages/LogIn/LogInPage'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <LoadingPage />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={<HomePage />} />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
              restricted
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<LogInPage />}
              restricted
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<PublicRoute component={<NotFound />} />} />
      </Route>
    </Routes>
  );
};
