import React from "react";
import { render } from "@testing-library/react";
import Events from "./page";
test("renders Events page correctly", () => {
  const { asFragment } = render(<Events />);
  expect(asFragment()).toMatchSnapshot();
});
