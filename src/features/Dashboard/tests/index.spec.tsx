// local dependencies
import { render } from 'src/tests/test-utils';
import Dashboard from '../';

const getComponent = () => render(<Dashboard />);

describe('src/features/Authentication/Dashboard', () => {
  test('should render the Dashboard page', () => {
    getComponent();
  });
});
