import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

// local dependencies
import { firebaseAuth } from 'src/config/firebase.config';
import type { UseAuthStateReturn } from 'src/config/firebase.types';

const PrivateApp = lazy(() => import('./PrivateApp'));
const PublicApp = lazy(() => import('./PublicApp'));

export const AppRouter = () => {
  const [user, loadingUser]: UseAuthStateReturn = useAuthState(firebaseAuth);

  if (loadingUser) {
    return null;
  }

  return (
    <Suspense fallback={<p>Loading . . .</p>}>
      <Router>
        <Switch>{user ? <PrivateApp /> : <PublicApp />}</Switch>
      </Router>
    </Suspense>
  );
};
