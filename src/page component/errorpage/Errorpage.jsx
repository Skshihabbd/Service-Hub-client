import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-center items-center text-center px-4">
      {/* Error Icon */}
      <MdErrorOutline className="text-yellow-500 text-[120px] md:text-[200px] animate-bounce" />

      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-white mt-6">
        404
      </h1>

      {/* Sub Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mt-2">
        OOPS! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-2 md:mt-4 max-w-xl">
        The page you are looking for doesn’t exist or has been moved.  
        Try going back to the homepage.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Errorpage;
