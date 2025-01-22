import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {HeartButton} from "@/components";

describe("HeartButton Component", () => {
  test("renders correctly with default props", () => {
    render(<HeartButton isActive={false} aria-label="like-button" />);

    const button = screen.getByRole("button", { name: /like-button/i });
    expect(button).toBeInTheDocument();

    expect(button.querySelector("svg")).toBeInTheDocument();
  });


  test("forwards additional props", () => {
    render(
      <HeartButton
        isActive={false}
        aria-label="like button"
        data-testid="heart-button"
      />
    );

    const button = screen.getByTestId("heart-button");
    expect(button).toHaveAttribute("aria-label", "like button");
  });
});
