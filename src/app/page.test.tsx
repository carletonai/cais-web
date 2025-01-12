import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./page";
test("renders Home page correctly", () => {
  const { asFragment } = render(<HomePage />);
  expect(asFragment()).toMatchSnapshot();
});
