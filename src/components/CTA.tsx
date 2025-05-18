// components/CtaBanner.tsx
import { TwoColumn } from "./TwoColumn";
import { colors } from "../colors/colors"; // adjust path as needed

export const CtaBanner = () => {
  return (
    <section
      id="contact"
      className="text-white py-20"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="container mx-auto px-6">
        <TwoColumn
          left={
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">Start Earning Today!</h2>
              <p className="text-lg mt-4">
                Join Trendyqash and unlock multiple income opportunities.
              </p>
            </div>
          }
          right={
            <div className="flex justify-center md:justify-end">
              <a
                href="https://www.heroqash.com/user/register.php?ref=Prixess"
                target="_blank"
                className="mt-6 inline-block bg-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition transform hover:scale-105"
                style={{ color: colors.primary }}
              >
                Go to Portal
              </a>
            </div>
          }
        />
      </div>
    </section>
  );
};
