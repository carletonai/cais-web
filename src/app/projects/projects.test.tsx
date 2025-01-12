import React from "react";
import { render } from "@testing-library/react";
import ProjectsPage from "./projects";

test("renders ProjectsPage correctly", () => {
  const { asFragment } = render(<ProjectsPage />);
  expect(asFragment()).toMatchSnapshot();
});
