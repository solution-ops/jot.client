import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// local dependencies
import 'src/styles/index.css';
import { App } from 'src/App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
