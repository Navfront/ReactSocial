import { createRef, useEffect } from "react";

import { render, screen } from "@testing-library/react";

import { setClassToRef } from "./set-class-to-ref";

const TestElem = () => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    setClassToRef(ref, "active", "add");
  }, []);

  return <div ref={ref}>123</div>;
};

describe("SetClassToRef should works fine", () => {
  test("Should add class to element by ref", () => {
    render(<TestElem />);
    expect(screen.getByText(/123/)).toHaveClass("active");
  });
});
