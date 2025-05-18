import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { Button } from "./ui/button";

export const HeroNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-dark text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="flex items-center space-x-2">
          <img
            src="/images/heroqash.webp"
            alt="Heroqash Logo"
            className="w-8 h-8"
          />
          <span className="text-lg font-semibold">Trendyqash Agencies</span>
        </a>

        <nav className="hidden md:flex space-x-8 items-center mx-auto">
          <a href="#home" className="hover:text-primary transition">
            Home
          </a>
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#testimonials" className="hover:text-primary transition">
            Testimonials
          </a>
        </nav>

        <a
          href="https://www.heroqash.com/user/register.php?ref=Prixess"
          target="_blank"
          className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          Join Now
        </a>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                className="w-6 h-6"
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
          <SheetContent side="left" className="bg-dark text-white w-64">
            <nav className="mt-8 space-y-4">
              <a
                href="#home"
                className="block text-lg hover:text-primary transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-lg hover:text-primary transition"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block text-lg hover:text-primary transition"
              >
                Testimonials
              </a>
              <a
                href="https://www.heroqash.com/user/register.php?ref=Prixess"
                target="_blank"
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
