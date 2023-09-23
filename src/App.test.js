import { render, screen } from "@testing-library/react";

const TestComponent = ({text}) => (
  <div>
    {text && <p>{text}</p>}
    {!text && <p>text yok</p>}
  </div>
);

it('should render the element correctly"', () => {
  render(<TestComponent text="test" />);
  const element = screen.getByText(/test/i);
  const emptyElement = screen.queryByText(/text yok/i);

  expect(emptyElement).not.toBeInTheDocument();
  expect(element).toBeInTheDocument();

});
