import { screen, render, fireEvent } from "@testing-library/react";

import { Dropdown } from "./dropdown";

const DROPDOWN_CLASS = "dropdown";
const OPEN_CLASS = "dropdown--open";

const TestDropdown = (
  <Dropdown button={<button>CLICK ME</button>}>
    <li key={"1"}>one</li>
    <li key={"2"}>two</li>
    <li key={"3"}>three</li>
  </Dropdown>
);

describe("Dropdown should works fine", () => {
  test("Dropdown should be in DOM", () => {
    render(TestDropdown);
    expect(screen.getByText(/CLICK ME/i)).toBeInTheDocument();
  });

  test(`Dropdown should correcty adding "${OPEN_CLASS}" class to ${DROPDOWN_CLASS} by clicking on button`, () => {
    const { container } = render(TestDropdown);
    const dd = container.querySelector(`.${DROPDOWN_CLASS}`) as Element;
    expect(dd).toBeInTheDocument();
    expect(dd).not.toHaveClass(OPEN_CLASS);
    const button = screen.getByText(/CLICK ME/i);
    fireEvent.click(button as Element);
    expect(dd).toHaveClass(OPEN_CLASS);
  });
});
