import React from "react";
import { render } from "@testing-library/react";
import Contact from "./page";
test("renders Contact page correctly", () => {
  const { asFragment } = render(<Contact />);
  expect(asFragment()).toMatchSnapshot();
});
