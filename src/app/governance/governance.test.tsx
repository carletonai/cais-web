import React from "react";
import { render, screen } from "@testing-library/react";
import Governance from "./governance";

describe("Governance", () => {
  it("renders governance page", () => {
    render(<Governance />);
    expect(screen.getByText("Governance")).toBeInTheDocument();
  });
});
