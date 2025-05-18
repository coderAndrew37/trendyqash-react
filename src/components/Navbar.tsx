// src/components/HeroNavbar.tsx
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { Button } from "./ui/button";
import { colors } from "../colors/colors";
import { Link, useLocation } from "react-router-dom";

export const HeroNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Methods", href: "/methods" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/heroqash.webp"
            alt="Heroqash Logo"
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold text-dark">
            Trendyqash Agencies
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition hover:opacity-80 ${
                location.pathname === link.href ? "text-primary" : "text-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://www.heroqash.com/user/register.php?ref=Sydney"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
          style={{ backgroundColor: colors.primary }}
        >
          Join Now
        </a>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                className="w-6 h-6 text-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            style={{ backgroundColor: colors.dark }}
            className="text-white w-64"
          >
            <nav className="mt-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-white hover:opacity-80 transition"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.heroqash.com/user/register.php?ref=Sydney"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-white text-lg px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Join Now
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
