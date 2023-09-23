import { render, screen } from "@testing-library/react";

const TestComponent = () => (
	<>
		<button>Button 1</button>
		<button>Button 2</button>
	</>
);

it('should render the element correctly"', () => {
	render(<TestComponent />);
	const element = screen.getByRole("button",{name: "Button 1"});
	expect(element).toBeInTheDocument();
});
