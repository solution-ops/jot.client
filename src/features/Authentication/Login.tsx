import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

// @material-ui dependencies
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// local dependencies
import { firebaseAuth, signInWithGoogle } from 'src/config/firebase.config';
import type { AuthError } from './types/AuthError';

const Login = () => {
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
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      history.replace(from);
      if (isMountedRef.current) {
        setIsDisabled(false);
      }
    } catch (err) {
      setIsDisabled(false);
      setError(err as AuthError);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Button
          variant="outlined"
          onClick={signInWithGoogle}
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          disabled={isDisabled}
        >
          Sign in with google
        </Button>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            disabled={isDisabled}
            id="login-email-input"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            disabled={isDisabled}
            id="login-password-input"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isDisabled}
          >
            Sign In
          </Button>
          {error ? (
            <Typography className="text-red-500 text-center">
              {error?.message}
            </Typography>
          ) : null}
          <Grid container>
            <Grid item xs />

            <Grid item>
              <Link
                to="/register"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                Don&apos;t have an account? Sign up here.
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
