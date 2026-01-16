/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const TiTleMenu = ({ title = "About Us", route = "About" }) => {
  return (
    <div className="relative w-full h-[45vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Zoom Effect on Hover */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url('https://i.ibb.co/G9bcsbX/victor-freitas-Yuv-iw-By-VRQ-unsplash.jpg')` }}
      ></div>

      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#AE9467]/50"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Main Title */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight animate-fade-in">
          {title}
        </h1>

        {/* Modern Breadcrumb */}
        <nav className="flex justify-center items-center">
          <ul className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            <li>
              <Link 
                to="/" 
                className="text-amber-200 hover:text-white transition-colors duration-300 text-sm md:text-base font-medium uppercase tracking-widest"
              >
                Home
              </Link>
            </li>
            
            <li className="text-white/60">
              <FaChevronRight className="text-[10px]" />
            </li>
            
            <li className="text-white text-sm md:text-base font-medium uppercase tracking-widest">
              {route}
            </li>
          </ul>
        </nav>
      </div>

      {/* Decorative Bottom Shape (Optional) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,105.74,124.3,101,185,86.32,245.7,71.64,289.87,67.63,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default TiTleMenu;