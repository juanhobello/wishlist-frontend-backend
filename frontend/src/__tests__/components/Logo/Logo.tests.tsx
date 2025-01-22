import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Logo } from "@/components";

const path = "/home";

export const setupTestLogo = () => (
  <BrowserRouter>
    <Logo path={path} />
  </BrowserRouter>
);

describe("Logo component", () => {
  test("matches snapshot", () => {
    const { container } = render(setupTestLogo());
    expect(container).toMatchSnapshot();
  });

  test("renders Link with correct path", () => {
    render(setupTestLogo());

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", path);
  });
})