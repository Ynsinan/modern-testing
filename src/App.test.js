import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function MyComponent() {

  return (
    <div>
      <select multiple>
        <input />
      </select>
    </div>
  );
}

it('should wait for loading message to be removed', async () => {
  const user = userEvent.setup();
  render(<MyComponent />);

  const inputElement = screen.getByRole('textbox');
  await user.type(inputElement, 'Hello, World!');
  expect(inputElement).toHaveValue('Hello, World!');


});
