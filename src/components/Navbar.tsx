import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import capsoLogo from "@/assets/capso-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "State Commission", to: "/state-commission" },
  { label: "Branches", to: "/branches" },
  { label: "Opportunities", to: "/opportunities" },
  { label: "Resources", to: "/resources" },
  { label: "Connect", to: "/connect" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur border-b border-primary/80">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={capsoLogo} alt="CAPSO" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.to
                    ? "text-primary-foreground font-semibold bg-primary-foreground/15"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary-foreground/20 bg-primary">
          <ul className="flex flex-col py-2 px-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.to
                      ? "text-primary-foreground font-semibold bg-primary-foreground/15"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
