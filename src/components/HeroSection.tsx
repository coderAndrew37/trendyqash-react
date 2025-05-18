import { TwoColumn } from "./TwoColumn";

export const HeroSection = () => {
  return (
    <section id="home" className="relative w-full py-24 bg-white">
      <div className="container mx-auto">
        <TwoColumn
          left={
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-dark">
                🚀 Say Hello to Easy Earnings
              </h1>
              <p className="text-lg mt-4 text-textSecondary max-w-xl">
                We built Trendyqash for people just like you — no fluff, no tech
                skills, just real ways to earn from your phone.
              </p>

              <p
                id="countdown"
                className="text-secondary font-semibold text-base mt-4"
              />

              <a
                href="https://www.heroqash.com/user/register.php?ref=sydney"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-primary text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
              >
                🔥 Join Now & Start Earning
              </a>
            </div>
          }
          right={
            <div className="flex justify-center">
              <img
                src="/images/heroqash-hero.webp"
                alt="Money Growth"
                className="max-w-sm md:max-w-md animate-bounceIn"
              />
            </div>
          }
        />
      </div>
    </section>
  );
};
