// components/RegistrationSection.tsx

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { colors } from "../colors/colors"; // adjust import path

export const RegistrationSection = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold" style={{ color: colors.dark }}>
          Join Trendyqash Agencies
        </h2>
        <p className="text-lg mt-4">
          To join Trendyqash Agencies, click on the link below 👇👇
        </p>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.heroqash.com/user/register.php?ref=Prixess"
                target="_blank"
                className="mt-6 inline-block text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition"
                style={{ backgroundColor: colors.primary }}
              >
                Register Now
              </a>
            </TooltipTrigger>
            <TooltipContent
              className="text-sm"
              style={{
                backgroundColor: colors.dark,
                color: "#ffffff",
              }}
            >
              Opens Trendyqash registration page
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <h4 className="mt-8 text-xl font-semibold">
          Follow these simple steps to create an account:
        </h4>
        <ol
          className="text-left mx-auto max-w-lg mt-4 space-y-3 text-lg"
          style={{ color: "#888888" }}
        >
          <li>
            Use a{" "}
            <span style={{ color: colors.primary, fontWeight: 700 }}>
              unique username
            </span>{" "}
            (no spaces).
          </li>
          <li>
            Insert your{" "}
            <span style={{ color: colors.primary, fontWeight: 700 }}>
              email correctly
            </span>{" "}
            and choose your country.
          </li>
          <li>
            Enter your{" "}
            <span style={{ color: colors.primary, fontWeight: 700 }}>
              phone number
            </span>{" "}
            accurately.
          </li>
          <li>
            Click{" "}
            <span style={{ color: "#16a34a", fontWeight: 700 }}>Sign Up</span>{" "}
            and proceed to login.
          </li>
          <li>
            Follow the{" "}
            <span style={{ color: "#facc15", fontWeight: 700 }}>
              payment procedure
            </span>{" "}
            for activation.
          </li>
        </ol>
      </div>
    </section>
  );
};
