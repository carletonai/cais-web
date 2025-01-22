import React from "react";
import { render, screen } from "@testing-library/react";
import Contribute from "./contribute";

describe("Contribute", () => {
	it("renders contribute page", () => {
		render(<Contribute />);
		expect(screen.getByText("Contribute")).toBeInTheDocument();
	});
});