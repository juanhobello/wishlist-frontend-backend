import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {ProductCard} from "@/components";

const productMock = {
  code: "123",
  name: "Product Name",
  image: "image-url.jpg",
  rating: 4.5,
  available: true,
  visible: true,
  fullPriceInCents: '5000',
  salePriceInCents: '4000',
  details: {
    name: "Product Name",
    description: "Description"
  },
  stockAvailable: true
};

describe("ProductCard component", () => {
  test("matches snapshot", () => {
    const { container } = render(<ProductCard product={productMock} />);
    expect(container).toMatchSnapshot();
  });

  test("renders product details correctly", () => {
    render(<ProductCard product={productMock} />);

    expect(screen.getByText(productMock.name)).toBeInTheDocument();

    const img = screen.getByAltText(productMock.name);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", productMock.image);

    expect(screen.getByText("R$ 50,00")).toBeInTheDocument();
    expect(screen.getByText("R$ 40,00")).toBeInTheDocument();

    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  test("renders floatButton when provided", () => {
    render(
      <ProductCard
        product={productMock}
        floatButton={<button>Buy</button>}
      />
    );
    expect(screen.getByText("Buy")).toBeInTheDocument();
  });

  test("does not render floatButton when not provided", () => {
    render(<ProductCard product={productMock} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
})
