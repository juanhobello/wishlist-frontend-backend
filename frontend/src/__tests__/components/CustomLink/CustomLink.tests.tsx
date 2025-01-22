import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CustomLink } from "@/components";

const path = "/wishlist";

const setupTestCustomLink = () => (
  <BrowserRouter>
    <CustomLink path={path}>
      <span>Home</span>
    </CustomLink>
  </BrowserRouter>
);

describe("CustomLink component", () => {
  test("matches snapshot", () => {
    const { container } = render(setupTestCustomLink());
    expect(container).toMatchSnapshot();
  });

  test("renders Link with correct path", () => {
    render(setupTestCustomLink());

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", path);
  });
})