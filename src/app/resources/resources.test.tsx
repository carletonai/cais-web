import React from "react";
import { render, screen } from "@testing-library/react";
import Resources from "./resources";

describe("Resources", () => {
  it("renders resources page", () => {
    render(<Resources />);
    expect(screen.getByText("Resources")).toBeInTheDocument();
  });
});
