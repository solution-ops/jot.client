/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const render = (ui: any) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children = null }) => <Router>{children}</Router>;

  // @ts-ignore
  return rtlRender(ui, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
