import React from "react";
import { render } from "@testing-library/react";
import AboutPage from "./about";

test("renders AboutPage correctly", () => {
  const { asFragment } = render(<AboutPage />);
  expect(asFragment()).toMatchSnapshot();
});
