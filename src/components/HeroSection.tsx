import { TwoColumn } from "./TwoColumn";

export const HeroSection = () => {
  return (
    <section id="home" className="relative w-full py-20 animate-fadeIn">
      <div className="container mx-auto">
        <TwoColumn
          left={
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold leading-tight">
                💰 Earn Money Online – No Experience Needed!
              </h1>
              <p className="text-lg mt-4">
                Join Trendyqash & start earning from referrals and simple tasks
                today!
              </p>
              <p id="countdown" className="text-lg font-bold mt-4"></p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xl font-bold px-8 py-4 rounded-lg shadow-xl hover:opacity-90 transition transform hover:scale-105 bg:blue-500 hover:bg-blue-600"
                onClick={() => {
                  window.open(
                    "https://www.heroqash.com/user/register.php?ref=sydney",
                    "_blank"
                  );
                }}
              >
                🔥 Join Now & Start Earning!
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
