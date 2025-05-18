import React from "react";
import { colors } from "../colors/colors";
import { Button } from "./ui/button";

export const CtaBanner: React.FC = () => {
  return (
    <section
      id="contact"
      className="text-white text-center py-20 px-6"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">Start Earning Today!</h2>
        <p className="text-lg mt-4">
          Join <strong>Trendyqash</strong> and unlock multiple income
          opportunities.
        </p>
        <Button
          asChild
          className="mt-6 text-lg font-semibold px-6 py-3 bg-white text-primary shadow-lg hover:bg-opacity-90 transition hover:scale-105"
        >
          <a
            href="https://www.heroqash.com/user/register.php?ref=Prixess"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Portal
          </a>
        </Button>
      </div>
    </section>
  );
};
