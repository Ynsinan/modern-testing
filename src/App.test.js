import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

function MyComponent() {
  const [count,setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

it('should wait for loading message to be removed', async () => {
  const user = userEvent.setup();
  render(<MyComponent />);

 await user.pointer({
    keys: '[MouseLeft]',
    target: screen.getByRole('button', { name: /increment/i }),
  });
  const headingElement = await screen.findByRole('heading');
  expect(headingElement).toHaveTextContent('1');
});
