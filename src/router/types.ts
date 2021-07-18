import { LazyExoticComponent, ReactNode } from 'react';

export type Route = {
  component:
    | ReactNode
    | LazyExoticComponent<() => JSX.Element> /* eslint-disable-line no-undef */;
  icon?:
    | ReactNode
    | LazyExoticComponent<() => JSX.Element> /* eslint-disable-line no-undef */;
  path: string;
  label: string;
  accessLevel: string[];
  private: boolean;
  navBar: boolean;
  tooltipTitle?: string;
  title?: string;
  ariaLabel?: string;
  routes?: Route[];
  exact?: boolean;
};

export type PrivateRouteProps = {
  children:
    | ReactNode
    | LazyExoticComponent<() => JSX.Element> /* eslint-disable-line no-undef */;
  exact: boolean;
  path: string;
};
