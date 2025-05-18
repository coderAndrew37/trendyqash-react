// src/components/Footer.tsx

import React from "react";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Trendyqash</h3>
          <p className="text-muted-foreground">
            Your trusted financial companion in the digital age.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Join
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 items-center">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-accent flex items-center gap-1"
            >
              <Facebook size={18} /> Facebook
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-accent flex items-center gap-1"
            >
              <Twitter size={18} /> Twitter
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-accent flex items-center gap-1"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-white/10" />

      <div className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Trendyqash. All rights reserved.
      </div>
    </footer>
  );
};
