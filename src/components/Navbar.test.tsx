import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

const renderNavbar = () => {
  return render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
};

describe("Navbar Component", () => {
  it("renders the logo", () => {
    renderNavbar();
    const logo = screen.getByAltText("CAIS Logo") as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain("header-club.png");
  });

  it("renders navigation links", () => {
    renderNavbar();
    const links = ["Home", "About", "Events", "Team", "Projects", "Contact"];
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThan(0);
    });
  });

  it("shows mobile menu when hamburger button is clicked", () => {
    renderNavbar();
    const menuButton = screen.getByRole("button", { name: /open main menu/i });

    expect(
      screen.queryByRole("navigation", { name: /mobile/i }),
    ).not.toBeInTheDocument();

    fireEvent.click(menuButton);

    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(
      screen.queryByRole("navigation", { name: /mobile/i }),
    ).not.toBeInTheDocument();
  });

  it("closes mobile menu when a link is clicked", () => {
    renderNavbar();
    const menuButton = screen.getByRole("button", { name: /open main menu/i });

    fireEvent.click(menuButton);

    const aboutLink = screen.getAllByText("About")[1];
    fireEvent.click(aboutLink);

    expect(
      screen.queryByRole("navigation", { name: /mobile/i }),
    ).not.toBeInTheDocument();
  });
});
