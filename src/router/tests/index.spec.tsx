// local dependencies
import { render } from 'src/tests/test-utils';
import { AppRouter } from '../';

const getComponent = () => render(<AppRouter />);

describe('src/features/Authentication/AppRouter', () => {
  test('should render the AppRouter page', () => {
    getComponent();
  });
});
