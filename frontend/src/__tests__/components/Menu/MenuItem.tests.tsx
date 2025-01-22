import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MenuItem } from "@/components";

describe("MenuItem Component", () => {
  test("renders children correctly", () => {
    render(<MenuItem>Test Item</MenuItem>);
    expect(screen.getByRole("menuitem")).toHaveTextContent("Test Item");
  });

  test("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();

    render(<MenuItem onClick={onClickMock}>Clickable Item</MenuItem>);

    const menuItem = screen.getByRole("menuitem", { name: /Clickable Item/i });
    await user.click(menuItem);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
