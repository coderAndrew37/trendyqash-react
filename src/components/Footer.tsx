// src/components/Footer.tsx

import React from "react";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { colors } from "../colors/colors"; // adjust the import path if needed
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer
      className="py-10 px-6"
      style={{ backgroundColor: colors.dark, color: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Trendyqash</h3>
          <p style={{ color: "#cccccc" }}>
            Your trusted financial companion in the digital age.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1">
            {["FAQ", "Methods"].map((label, idx) => (
              <li key={idx}>
                <Link
                  to={`/${label.toLowerCase()}`}
                  className="hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="flex items-center gap-1 hover:underline"
              style={{ color: colors.accent }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} /> Facebook
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              className="flex items-center gap-1 hover:underline"
              style={{ color: colors.accent }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={18} /> Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="flex items-center gap-1 hover:underline"
              style={{ color: colors.accent }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </div>

      <Separator
        className="my-6"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      />

      <div className="text-center text-sm" style={{ color: "#cccccc" }}>
        © {new Date().getFullYear()} Trendyqash. All rights reserved.
      </div>
    </footer>
  );
};
