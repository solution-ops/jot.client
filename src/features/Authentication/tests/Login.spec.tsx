import userEvent from '@testing-library/user-event';

// local dependencies
import { render, waitFor } from 'src/tests/test-utils';
import Login from '../Login';

const getComponent = () => {
  const { getByLabelText, getByRole } = render(<Login />);
  const emailInput = getByLabelText(/email/i);
  const passwordInput = getByLabelText(/password/i);
  const loginSubmitButton = getByRole('button');

  return { emailInput, passwordInput, loginSubmitButton };
};

describe('src/features/Authentication/Login', () => {
  test('should render the Login page with default values', () => {
    // arrange
    const { emailInput, passwordInput, loginSubmitButton } = getComponent();

    // assert
    expect(emailInput).toHaveValue('');
    expect(emailInput).not.toBeDisabled();
    expect(passwordInput).toHaveValue('');
    expect(passwordInput).not.toBeDisabled();
    expect(loginSubmitButton).not.toBeDisabled();
  });

  test('should change the email value when values are input into the email input', () => {
    // arrange
    const { emailInput } = getComponent();

    // act
    userEvent.type(emailInput, 'test@test.com');

    // assert
    expect(emailInput).toHaveValue('test@test.com');
  });

  test('should change the password value when values are input into the password input', () => {
    // arrange
    const { passwordInput } = getComponent();

    // act
    userEvent.type(passwordInput, 'p@ssw0rd');

    // assert
    expect(passwordInput).toHaveValue('p@ssw0rd');
  });

  test('should disable email, password, and submit inputs on submit button click', () => {
    // arrange
    const { emailInput, passwordInput, loginSubmitButton } = getComponent();

    // act
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, 'p@ssw0rd');
    userEvent.click(loginSubmitButton);

    // assert
    expect(emailInput).toBeDisabled();
    expect(passwordInput).toBeDisabled();
    expect(loginSubmitButton).toBeDisabled();
  });

  test('should reenable email, password, and submit inputs after form submission is handled', async () => {
    // arrange
    const { emailInput, passwordInput, loginSubmitButton } = getComponent();

    // act
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, 'p@ssw0rd');
    userEvent.click(loginSubmitButton);

    // assert
    await waitFor(() => {
      expect(emailInput).not.toBeDisabled();
      expect(passwordInput).not.toBeDisabled();
      expect(loginSubmitButton).not.toBeDisabled();
    });
  });
});
