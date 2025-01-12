import React from "react";
import { render } from "@testing-library/react";
import TeamPage from "./team";

test("renders TeamPage correctly", () => {
  const { asFragment } = render(<TeamPage />);
  expect(asFragment()).toMatchSnapshot();
});
