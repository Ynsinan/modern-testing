import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function MyComponent() {

  return (
    <div>
      <select multiple>
        <option value="elma">Elma</option>
        <option value="armut">Armut</option>
        <option value="muz">Muz</option>
      </select>
    </div>
  );
}

it('should wait for loading message to be removed', async () => {
  const user = userEvent.setup();
  render(<MyComponent />);

  const fruits = screen.getByRole('listbox');

  await user.selectOptions(fruits, ['Elma']);

  expect(screen.getByRole('option', { name: 'Elma' }).selected).toBe(true);

  await user.deselectOptions(fruits, ['Elma']);
  expect(screen.getByRole('option', { name: 'Elma' }).selected).toBe(false);

});
