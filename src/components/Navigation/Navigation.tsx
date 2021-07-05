// import { Link } from 'react-router-dom';
// import cuid from 'cuid';

// // local dependencies
// import { firebaseAuth } from 'src/config/firebase.config';
// import { routes } from 'src/router/PrivateApp';

export const Navigation = () => (
  <div>
    NAV WILL GO HERE
    {/* {routes
      .filter((route) => route.navBar)
      .map((route) => (
        <Link key={cuid()} to={route.path}>
          {route.title}
        </Link>
      ))}
    <button onClick={() => firebaseAuth.signOut()} type="button">
      Sign out
    </button> */}
  </div>
);
