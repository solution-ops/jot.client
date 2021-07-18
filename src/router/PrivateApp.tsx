import { lazy, Suspense } from 'react';
import cuid from 'cuid';

// Local Dependencies
import { Navigation } from 'src/components/Navigation';
import type { Route as RouteType } from './types';
import { PrivateRoute } from './PrivateRoute';

// Lazy Load Routes
// Nav Items
const DashboardPage = lazy(() => import('../features/Dashboard'));

export const routes: RouteType[] = [
  // Navbar routes
  {
    component: <DashboardPage />,
    path: '/',
    // icon: <HomeIcon />,
    label: 'Home',
    accessLevel: ['Employee'],
    private: true,
    navBar: true,
    title: 'Home',
    tooltipTitle: 'Home',
    ariaLabel: 'view dashboard page',
    exact: true,
  },
  {
    component: <DashboardPage />,
    path: '/dashboard',
    // icon: <HomeIcon />,
    label: 'Home',
    accessLevel: ['Employee'],
    private: true,
    navBar: false,
    title: 'Home',
    tooltipTitle: 'Home',
    ariaLabel: 'view dashboard page',
    exact: true,
  },
];

const PrivateApp = () => (
  <>
    <Navigation />
    <Suspense fallback={<p>Loading private app . . .</p>}>
      {routes.map((route) => (
        <PrivateRoute
          key={cuid()}
          exact={route.exact || true}
          path={route.path}
        >
          {route.component}
        </PrivateRoute>
      ))}
    </Suspense>
  </>
);

export default PrivateApp;
