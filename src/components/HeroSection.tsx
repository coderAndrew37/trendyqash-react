import { TwoColumn } from "./TwoColumn";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-white text-black py-20 animate-fadeIn"
    >
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
              <p
                id="countdown"
                className="text-red-500 font-bold text-lg mt-4"
              ></p>
              <a
                href="#"
                target="_blank"
                className="mt-4 inline-block bg-green-500 text-white text-xl font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-green-600 transition transform hover:scale-105"
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
