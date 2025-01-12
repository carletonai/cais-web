import React from "react";
import { render } from "@testing-library/react";
import Projects from "./page";
test("renders Projects page correctly", () => {
  const { asFragment } = render(<Projects />);
  expect(asFragment()).toMatchSnapshot();
});
