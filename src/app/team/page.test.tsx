import React from "react";
import { render } from "@testing-library/react";
import Team from "./page";
test("renders Team page correctly", () => {
  const { asFragment } = render(<Team />);
  expect(asFragment()).toMatchSnapshot();
});
