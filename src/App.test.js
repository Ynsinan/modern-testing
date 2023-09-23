import { render, screen } from "@testing-library/react";

const TestComponent = ({products}) => (
	<ul>
    {products.map((product) => (
      <li key={product.id} onClick={() => {}}>{product.name}</li>
    ))}
	</ul>
);

it('should render the element correctly"', () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
  ];
  render(<TestComponent products={products} />);
  //multiple query select
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(products?.length);


});
