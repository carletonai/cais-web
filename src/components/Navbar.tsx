import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/cais-web/" },
  { label: "Events", path: "/cais-web/events" },
  { label: "Projects", path: "/cais-web/projects" },
  { 
    label: "About",
    path: "/cais-web/about",
    children: [
      { label: "Team", path: "/cais-web/team" },
      { label: "Governance", path: "/cais-web/governance" },
      { label: "Contact", path: "/cais-web/contact" },
    ]
  },
  {
    label: "Get Involved",
    path: "/cais-web/contribute",
    children: [
      { label: "Resources", path: "/cais-web/resources" },
      { label: "Contribute", path: "/cais-web/contribute" },
    ]
  }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
        <Link to="/cais-web/" className="flex items-center group">
          <img
          src="/cais-web/header-club.png"
          alt="CAIS Logo"
          className="h-8 w-auto transition-all duration-300 group-hover:brightness-125"
          />
        </Link>
        </div>

        <div className="hidden sm:flex sm:items-center sm:space-x-2">
        {NAV_ITEMS.map((item) => (
          <div key={item.path} className="relative group">
          <Link
            to={item.path}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 inline-flex items-center gap-1 hover:bg-primary/5 ${
            location.pathname === item.path
              ? "text-primary bg-primary/10"
              : "text-foreground hover:text-primary"
            }`}
          >
            {item.label}
            {item.children && (
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            )}
          </Link>
          {item.children && (
            <div className="absolute top-full left-0 mt-1 w-48 py-1 bg-background/95 backdrop-blur-sm rounded-md shadow-lg border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
                  {item.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    location.pathname === child.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {child.label}
                  </Link>
                  ))}
                </div>
                )}
              </div>
              ))}
            </div>

            <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
              className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
              className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            </div>
          </div>
          </div>

          <div
          data-testid="mobile-menu"
          className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden absolute top-full left-0 right-0 border-b border-border/50 bg-background/95 backdrop-blur-md`}
          >
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
            <React.Fragment key={item.path}>
              <Link
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                location.pathname === item.path
                ? "text-primary bg-primary/10"
                : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
              >
              <div className="flex items-center justify-between">
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </div>
              </Link>
              {item.children && (
              <div className="pl-4 space-y-1 border-l border-border/50 ml-3">
                {item.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  location.pathname === child.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/90 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {child.label}
                </Link>
                ))}
              </div>
            )}
          </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
