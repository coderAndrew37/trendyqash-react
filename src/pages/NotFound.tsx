import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="h-[90vh]  flex flex-col items-center justify-center px-8 py-16 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">Oops! 404</h1>
      <p className="text-lg  mb-6 ">
        The page you're looking for doesn't exist. Let's get you back on track.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-all flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <a
          href="https://wa.me/254707995729" // replace with actual number
          className="border border-primary  px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
        >
          Chat with Us
        </a>
      </div>

      <div className="mt-10 text-sm text-textSecondary max-w-md">
        Lost while browsing? We can help you pick the right method for your
        goals.
      </div>
    </div>
  );
};

export default NotFound;
