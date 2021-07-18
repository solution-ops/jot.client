// local dependencies
import { render } from 'src/tests/test-utils';
import PublicApp from '../PublicApp';

const getComponent = () => render(<PublicApp />);

describe('src/features/Authentication/PublicApp', () => {
  test('should render the PublicApp page', () => {
    getComponent();
  });
});
