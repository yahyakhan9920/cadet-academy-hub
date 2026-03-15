import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm shadow-subtle">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg tracking-tight">
          <Shield className="h-6 w-6 text-primary-action" />
          <span>Bahria Force Academy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                location.pathname === link.href
                  ? "text-primary-action bg-primary-action/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">Dashboard</Button>
          </Link>
          <Link to="/courses">
            <Button variant="action" size="sm">Enroll Now</Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-surface animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  location.pathname === link.href
                    ? "text-primary-action bg-primary-action/5"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t">
              <Link to="/dashboard" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">Dashboard</Button>
              </Link>
              <Link to="/courses" className="flex-1">
                <Button variant="action" size="sm" className="w-full">Enroll Now</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
