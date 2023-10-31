import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

function MyComponent() {

  return (
    <div>
      <p className='primary-text'>Modern Testing</p>
    </div>
  );
}

it('should wait for loading message to be removed', async () => {
  render(<MyComponent />);
  screen.debug();
  const element = screen.getByText(/Modern Testing/i);
  expect(element).toBeInTheDocument();

});
