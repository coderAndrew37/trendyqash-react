import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const RegistrationSection = () => {
  return (
    <section className="bg-light py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-dark">
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
                className="mt-6 inline-block bg-primary text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition"
              >
                Register Now
              </a>
            </TooltipTrigger>
            <TooltipContent className="bg-dark text-white text-sm">
              Opens Trendyqash registration page
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <h4 className="mt-8 text-xl font-semibold">
          Follow these simple steps to create an account:
        </h4>
        <ol className="text-left mx-auto max-w-lg mt-4 space-y-3 text-lg text-muted-foreground">
          <li>
            Use a{" "}
            <span className="text-primary font-bold">unique username</span> (no
            spaces).
          </li>
          <li>
            Insert your{" "}
            <span className="text-primary font-bold">email correctly</span> and
            choose your country.
          </li>
          <li>
            Enter your{" "}
            <span className="text-primary font-bold">phone number</span>{" "}
            accurately.
          </li>
          <li>
            Click <span className="text-green-600 font-bold">Sign Up</span> and
            proceed to login.
          </li>
          <li>
            Follow the{" "}
            <span className="text-yellow-500 font-bold">payment procedure</span>{" "}
            for activation.
          </li>
        </ol>
      </div>
    </section>
  );
};
