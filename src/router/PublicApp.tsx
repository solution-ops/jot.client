import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import cuid from 'cuid';

// Local Dependencies
import type { Route as RouteType } from './types';

// Lazy Load Routes
// Auth
const LoginPage = lazy(() => import('../features/Authentication/Login'));
const RegisterPage = lazy(() => import('../features/Authentication/Register'));

export const routes: RouteType[] = [
  {
    component: <LoginPage />,
    path: '/',
    label: 'Login',
    accessLevel: ['Employee'],
    private: false,
    navBar: false,
  },
  {
    component: <LoginPage />,
    path: '/login',
    label: 'Login',
    accessLevel: ['Employee'],
    private: false,
    navBar: false,
  },
  {
    component: <RegisterPage />,
    path: '/register',
    label: 'Register',
    accessLevel: ['Employee'],
    private: false,
    navBar: false,
  },
];

const PublicApp = () => (
  <Suspense fallback={<p>Loading public app . . .</p>}>
    {routes.map((route) => (
      <Route key={cuid()} exact path={route.path}>
        {route.component}
      </Route>
    ))}
  </Suspense>
);

export default PublicApp;
