// local dependencies
import { render } from 'src/tests/test-utils';
import { Navigation } from '../Navigation';

const getComponent = () => render(<Navigation />);

describe('src/components/Navigation', () => {
  test('should render the Navigation page', () => {
    getComponent();
  });
});
