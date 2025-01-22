import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Menu } from "@/components";

describe("Menu Component", () => {
  test("does not render when open is false", () => {
    render(<Menu open={false} archorEl={null} onClose={jest.fn()}>{null}</Menu>);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  test("renders correctly in the portal when open is true", () => {
    const archorEl = document.createElement("div");
    document.body.appendChild(archorEl);

    render(
      <Menu open={true} archorEl={archorEl} onClose={jest.fn()}>
        <li>Option 1</li>
        <li>Option 2</li>
      </Menu>
    );

    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveTextContent("Option 1");
    expect(menu).toHaveTextContent("Option 2");
  });

  test("closes the menu when clicking outside", async () => {
    const user = userEvent.setup();
    const archorEl = document.createElement("div");
    document.body.appendChild(archorEl);

    const onClose = jest.fn();
    render(
      <Menu open={true} archorEl={archorEl} onClose={onClose}>
        <li>Option 1</li>
        <li>Option 2</li>
      </Menu>
    );

    await user.click(document.body);
    expect(onClose).toHaveBeenCalled();
  });
});
