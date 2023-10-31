import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function MyComponent() {

  const handleCopy = () => {
    window.navigator.clipboard.writeText("Hello World");
  };

  return (
    <div>
      <button onClick={handleCopy}>Copy</button>
      <input type='text' />
    </div>
  );
}

it('should wait for loading message to be removed', async () => {
  const user = userEvent.setup();
  render(<MyComponent />);
  
  await user.keyboard("[tab]");
  await user.keyboard("[enter]");

  const inputElement = screen.getByRole('textbox');
  inputElement.focus();

  await user.paste();

  expect(inputElement).toHaveValue('Hello World');

});
