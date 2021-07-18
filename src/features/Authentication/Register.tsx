import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

// local dependencies
import type { FirebaseUser } from 'src/config/firebase.types';
import {
  createUserProfileDocument,
  firebaseAuth,
  signInWithGoogle,
} from 'src/config/firebase.config';
import type { AuthError } from './types/AuthError';

const Register = () => {
  const history = useHistory();
  const location = useLocation<{ from: string }>();
  const { from } = location.state || { from: { pathname: '/' } };
  // local state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  // https://stackoverflow.com/questions/63213549/warning-cant-perform-a-react-state-update-on-an-unmounted-component-in-a-func
  const isMountedRef = useRef(true);
  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    [],
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError(null);
    setIsDisabled(true);
    try {
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password,
      );
      history.replace(from);
      await createUserProfileDocument(user as FirebaseUser);
      if (isMountedRef.current) {
        setIsDisabled(false);
      }
    } catch (err) {
      setIsDisabled(false);
      setError(err as AuthError);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={signInWithGoogle}
        // iconType="logoGoogleG"
      >
        Sign up with Google
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            required
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            required
          />
        </label>
        <button type="submit" disabled={isDisabled}>
          Register
        </button>
        {error ? <p className="text-red-500">{error?.message}</p> : null}
      </form>
      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
        <Link
          to="/login"
          className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          Have an account? Sign in here.
        </Link>
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
      </div>
    </>
  );
};

export default Register;
