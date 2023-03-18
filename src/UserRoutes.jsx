import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from 'modules/PublicRoute/PublicRoute';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';

const Home = lazy(() => import('./page/Home/Home'));
const MyContacts = lazy(() => import('./page/MyContacts/MyContacts'));

const RegisterPage = lazy(() => import('./page/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./page/LoginPage/LoginPage'));

const NotFoundPage = lazy(() => import('./page/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/my-contacts" element={<MyContacts />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
