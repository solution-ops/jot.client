// local dependencies
import { render } from 'src/tests/test-utils';
import PrivateApp from '../PrivateApp';

const getComponent = () => render(<PrivateApp />);

describe('src/features/Authentication/PrivateApp', () => {
  test('should render the PrivateApp page', () => {
    getComponent();
  });
});
