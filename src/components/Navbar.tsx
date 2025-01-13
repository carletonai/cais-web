import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const THEME = {
  colors: {
    primary: "red",
    text: {
      default: "gray-700",
      hover: "red-600",
    },
    background: {
      default: "white",
      hover: "gray-50",
    },
    border: {
      active: "red-600",
      hover: "red-300",
    },
  },
  spacing: {
    navHeight: "16",
    mobileMenuPadding: "3",
  },
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Events", path: "/events" },
  { label: "Team", path: "/team" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const STYLES = {
  nav: "bg-white shadow-md",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  innerContainer: "flex justify-between h-16",

  logoContainer: "flex-shrink-0 flex items-center",
  logoText: `text-xl font-bold text-${THEME.colors.primary}-600 hover:text-${THEME.colors.primary}-700`,

  desktopNav: "hidden sm:ml-6 sm:flex sm:space-x-8",
  desktopLink: (isActive: boolean) => `
    inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
    ${
      isActive
        ? `border-${THEME.colors.border.active} text-${THEME.colors.text.hover}`
        : `border-transparent text-${THEME.colors.text.default} hover:text-${THEME.colors.text.hover} hover:border-${THEME.colors.border.hover}`
    }
  `,

  mobileMenuButton: `
    inline-flex items-center justify-center p-2 rounded-md 
    text-${THEME.colors.text.default} 
    hover:text-${THEME.colors.text.hover} 
    hover:bg-${THEME.colors.background.hover} 
    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${THEME.colors.primary}-500
  `,
  mobileMenuContainer: "sm:hidden",
  mobileMenuInner: "pt-2 pb-3 space-y-1",
  mobileLink: (isActive: boolean) => `
    block pl-3 pr-4 py-2 border-l-4 text-base font-medium
    ${
      isActive
        ? `bg-${THEME.colors.primary}-50 border-${THEME.colors.border.active} text-${THEME.colors.text.hover}`
        : `border-transparent text-${THEME.colors.text.default} hover:bg-${THEME.colors.background.hover} hover:border-${THEME.colors.border.hover} hover:text-${THEME.colors.text.hover}`
    }
  `,
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const Logo = () => (
    <div className={STYLES.logoContainer}>
      <Link to="/" className={STYLES.logoText}>
        CAIS
      </Link>
    </div>
  );

  const DesktopNav = () => (
    <div className={STYLES.desktopNav}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={STYLES.desktopLink(location.pathname === item.path)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  const MobileMenuButton = () => (
    <div className="flex items-center sm:hidden">
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={STYLES.mobileMenuButton}
        aria-controls="mobile-menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );

  const MobileMenu = () =>
    isMobileMenuOpen && (
      <div className={STYLES.mobileMenuContainer} id="mobile-menu">
        <div className={STYLES.mobileMenuInner}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={STYLES.mobileLink(location.pathname === item.path)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );

  return (
    <nav className={STYLES.nav}>
      <div className={STYLES.container}>
        <div className={STYLES.innerContainer}>
          <div className="flex">
            <Logo />
            <DesktopNav />
          </div>
          <MobileMenuButton />
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
}
