import React from "react";
import { render } from "@testing-library/react";
import About from "./about";
test("renders About page correctly", () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});
