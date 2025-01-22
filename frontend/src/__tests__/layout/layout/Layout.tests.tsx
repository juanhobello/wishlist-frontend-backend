import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/layout/Layout";
import { JSX } from "react";

export const setupTestRouter = (initialRoute: string): JSX.Element => (
  <MemoryRouter initialEntries={[initialRoute]}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home Page</div>} />
        <Route path="wishlist" element={<div>Wishlist Page</div>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  </MemoryRouter>
);

describe("Layout Component", () => {
  test("renders Header and navigates correctly", async () => {
    const user = userEvent.setup();

    render(setupTestRouter("/"));

    expect(screen.getByRole("link", { name: /Wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Logo/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /User/i })).toBeInTheDocument();

    expect(screen.getByText("Home Page")).toBeInTheDocument();

    const wishlistLink = screen.getByRole("link", { name: /Wishlist/i });
    await user.click(wishlistLink);

    expect(screen.getByText("Wishlist Page")).toBeInTheDocument();
  });

  test("Validates the rendering of fallback content for non-existent routes", () => {
    render(setupTestRouter("/non-existent-route"));

    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
  });
});
