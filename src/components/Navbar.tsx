import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setAtTop(currentScroll === 0);
      setScrolled(currentScroll > lastScroll && currentScroll > 20);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg
      ${atTop 
      ? 'translate-y-0 bg-background/20 py-3' 
      : scrolled 
      ? 'translate-y-0 bg-background/80 shadow-md py-2.5' 
      : 'translate-y-0 bg-background/60 py-2.5'}`}>
      <div className="container mx-auto px-4 lg:px-8">
      <div className={`flex justify-between items-center transition-all duration-300`}>
        <div className="flex items-center">
        <Link to="/cais-web/" className="flex items-center group">
          <img
          src="/cais-web/header-club.png"
          alt="CAIS Logo"
            className={`transition-all duration-300 group-hover:scale-105 ${atTop ? 'h-9' : 'h-8'}`}
          />
        </Link>
        </div>

        <div className="hidden sm:flex sm:items-center sm:space-x-2">
        {NAV_ITEMS.map((item) => (
          <div key={item.path} className="relative group">
          <Link
            to={item.path}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 
            inline-flex items-center gap-1.5 hover:bg-primary/10 
            ${location.pathname === item.path
              ? "text-primary bg-primary/15 shadow-sm"
              : "text-foreground/90 hover:text-primary"
            }`}
          >
            {item.label}
            {item.children && (
            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            )}

                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-1 w-52 py-2 
                  bg-gradient-to-b from-background to-background/98 
                  backdrop-blur-2xl rounded-lg shadow-lg border border-border/20
                  after:absolute after:inset-0 after:bg-black/50 after:pointer-events-none
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100">
                  {item.children.map((child) => (
                  <Link
                  key={child.path}
                  to={child.path}
                  className={`relative z-10 block px-4 py-2.5 text-sm font-medium transition-colors duration-200 
                    ${location.pathname === child.path
                    ? "text-primary bg-primary/20"
                    : "text-white hover:text-primary hover:bg-primary/10"
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
              className="inline-flex items-center justify-center p-2.5 rounded-lg 
                text-foreground hover:text-primary hover:bg-primary/10 
                transition-colors duration-300"
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
        className={`${isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"} 
          sm:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 
          bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-xl shadow-lg border-t border-border/20`}
        >
        <div className="px-4 py-3 space-y-2">
          {NAV_ITEMS.map((item) => (
          <React.Fragment key={item.path}>
            <Link
            to={item.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-300 
              ${location.pathname === item.path
              ? "text-primary bg-primary/20"
              : "text-foreground hover:text-primary hover:bg-primary/10"
              }`}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </div>
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1 border-l-2 border-primary/20 ml-4">
                  {item.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 
                    ${location.pathname === child.path
                      ? "text-primary bg-primary/20"
                      : "text-foreground/95 hover:text-primary hover:bg-primary/10"
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
