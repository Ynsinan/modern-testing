import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button';

const randomFunction = jest.fn();

describe('Button', () => {
  it("should call onClick Function when clicked", async () => {
    const user = userEvent.setup();
    render(<Button onClick={randomFunction}>Click me</Button>);
    const button = screen.getByRole('button', {name: /click me/i});
    await user.click(button);

    expect(randomFunction).toHaveBeenCalled();


  }
  )}
);