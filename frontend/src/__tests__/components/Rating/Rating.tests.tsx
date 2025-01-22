import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Rating } from "@/components";

describe("Rating Component", () => {
  test("renders the correct number of stars", () => {
    render(<Rating rating={3.5} />);

    const stars = screen.getAllByRole("img", { name: /star/i });
    expect(stars).toHaveLength(5);
  });

  test("displays the correct rating value", () => {
    const ratingValue = 4.2;
    render(<Rating rating={ratingValue} />);

    expect(screen.getByText(ratingValue.toFixed(1))).toBeInTheDocument();
  });

  test("renders stars with correct percentage based on rating", () => {
    const ratingValue = 3.5;
    render(<Rating rating={ratingValue} />);

    const stars = screen.getAllByRole("img", { name: /star/i });
    expect(stars).toHaveLength(5);

    stars.forEach((star, index) => {
      const expectedPercentage = Math.min(Math.max(ratingValue - index, 0), 1) * 100;
      const gradientId = `grad-${expectedPercentage}`;
      expect(star.innerHTML).toContain(gradientId);
    });
  });

  test("renders empty stars for rating 0", () => {
    render(<Rating rating={0} />);
    const stars = screen.getAllByRole("img", { name: /star/i });
    stars.forEach((star) => {
      expect(star.innerHTML).toContain("grad-0");
    });
  });

  test("renders full stars for rating 5", () => {
    render(<Rating rating={5} />); const stars = screen.getAllByRole("img", { name: /star/i });
    stars.forEach((star) => {
      expect(star.innerHTML).toContain("grad-100");
    });
  });

  test("renders correct star gradients for rating 3.7", () => {
    render(<Rating rating={3.7} />);
    const stars = screen.getAllByRole("img", { name: /star/i });

    stars.slice(0, 3).forEach((star) => {
      expect(star.innerHTML).toContain("grad-100");
    });

    expect(stars[3].innerHTML).toContain("grad-70");
    expect(stars[4].innerHTML).toContain("grad-0");
  });
});
