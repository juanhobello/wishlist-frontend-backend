import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Header from "@/layout/Header"

describe('Header component', () => {
  test("matches snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("Header should render correctly", async () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    expect(screen.getByRole("link", { name: /Wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Logo/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /User/i })).toBeInTheDocument();
  });
})