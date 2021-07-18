import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Redirect } from 'react-router-dom';

// local dependenmcies
import type { UseAuthStateReturn } from 'src/config/firebase.types';
import { firebaseAuth } from 'src/config/firebase.config';

// local dependencies
import type { PrivateRouteProps } from './types';

export const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
  const [user]: UseAuthStateReturn = useAuthState(firebaseAuth);
  return (
    <Route
      {...rest}
      // eslint-disable-next-line no-confusing-arrow
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
