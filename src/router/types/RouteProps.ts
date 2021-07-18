import type { FirebaseUser } from 'src/config/firebase.types';

export type RouteProps = {
  user: FirebaseUser | undefined | null;
};
