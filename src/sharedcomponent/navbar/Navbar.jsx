/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaPlusCircle,
  FaTasks,
  FaBookmark,
} from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { Tooltip } from "react-tooltip";
import Custom from "../custom/Custom";

const Navbar = () => {
  const { users, logOut } = Custom();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper for active link styling
  const isActive = (path) =>
    location.pathname === path
      ? "text-amber-200 border-b-2 border-amber-200"
      : "hover:text-amber-100 transition-colors";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#AE9467]/90 backdrop-blur-md shadow-lg py-2"
          : "bg-[#AE9467] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                className="w-12 h-12 rounded-full border-2 border-amber-200 transition-transform group-hover:scale-110"
                src="https://i.ibb.co/Gpwqh9F/1600w-oqe3ybe-Ec-QQ.webp"
                alt="Logo"
              />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <span className="text-2xl font-serif tracking-wide font-bold text-white">
              Service<span className="text-amber-200">Hub</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 text-[16px] font-medium text-white uppercase tracking-wider">
            <Link to="/" className={`${isActive("/")} py-2`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/allservice"
                className={`${isActive(
                  "/allservice"
                )} flex items-center gap-2 py-2`}
              >
                All Services{" "}
                <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform" />
              </Link>

              {users && (
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ul className="w-56 bg-white text-gray-800 shadow-2xl rounded-xl overflow-hidden border border-gray-100">
                    <DropdownItem
                      to="/useradddata"
                      icon={<FaPlusCircle />}
                      text="Add Service"
                    />
                    <DropdownItem
                      to="/myservice"
                      icon={<FaTasks />}
                      text="Manage Service"
                    />
                    <DropdownItem
                      to="/booked"
                      icon={<FaBookmark />}
                      text="Booked Service"
                    />
                  </ul>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center pl-4 border-l border-white/20">
              <input
                type="checkbox"
                className="toggle toggle-warning toggle-sm theme-controller"
              />
            </div>
          </div>

          {/* User Section */}
          <div className="hidden lg:flex items-center ml-4">
            {users ? (
              <div className="relative group">
                <div className="flex items-center gap-3 cursor-pointer bg-white/10 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition">
                  <span className="text-sm font-medium">
                    {users?.displayName?.split(" ")[0]}
                  </span>
                  <img
                    className="w-8 h-8 rounded-full border border-amber-200"
                    src={users?.photoURL}
                    alt="Profile"
                  />
                </div>

                <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="w-64 bg-white text-gray-800 p-5 shadow-2xl rounded-2xl border border-gray-100">
                    <div className="flex flex-col items-center mb-4">
                      <img
                        className="w-16 h-16 rounded-full border-2 border-amber-500 mb-2"
                        src={users?.photoURL}
                        alt=""
                      />
                      <p className="font-bold text-lg">{users?.displayName}</p>
                      <p className="text-xs text-gray-500 italic">
                        {users?.email}
                      </p>
                    </div>
                    <button
                      onClick={logOut}
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2.5 rounded-xl font-semibold hover:shadow-lg transition active:scale-95"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/signin"
                className="login bg-white text-[#AE9467] p-2.5 rounded-full hover:bg-amber-100 transition-colors shadow-lg"
              >
                <GrUserManager className="text-xl" />
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-visibility ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Drawer Content */}
        <div
          className={`absolute right-0 top-0 h-full w-3/4 max-w-sm bg-[#AE9467] shadow-2xl p-8 transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold tracking-widest">MENU</span>
            <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer" />
          </div>

          <div className="flex flex-col space-y-5 text-lg font-medium">
            <MobileLink to="/" onClick={toggleMenu} text="Home" />
            <MobileLink
              to="/allservice"
              onClick={toggleMenu}
              text="All Services"
            />

            {users && (
              <div className="flex flex-col space-y-4 pt-4 border-t border-white/20">
                <MobileLink
                  to="/useradddata"
                  onClick={toggleMenu}
                  text="Add Service"
                />
                <MobileLink
                  to="/myservice"
                  onClick={toggleMenu}
                  text="Manage Service"
                />
                <MobileLink
                  to="/booked"
                  onClick={toggleMenu}
                  text="Booked Service"
                />
                <button
                  onClick={logOut}
                  className="text-left text-red-200 font-bold pt-4"
                >
                  Sign Out
                </button>
              </div>
            )}

            {!users && (
              <Link
                to="/signin"
                onClick={toggleMenu}
                className="bg-white text-[#AE9467] text-center py-3 rounded-xl font-bold mt-4 shadow-xl"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      <Tooltip
        anchorSelect=".login"
        content="Login to your account"
        className="!bg-white !text-gray-800 !rounded-lg !shadow-xl"
      />
    </nav>
  );
};

// Sub-components for cleaner code
const DropdownItem = ({ to, icon, text }) => (
  <li className="hover:bg-amber-50 transition-colors">
    <Link
      to={to}
      className="flex items-center gap-3 px-5 py-4 text-sm font-semibold text-gray-700"
    >
      <span className="text-amber-600">{icon}</span> {text}
    </Link>
  </li>
);

const MobileLink = ({ to, onClick, text }) => (
  <Link
    to={to}
    onClick={onClick}
    className="hover:text-amber-200 transition-colors py-2 border-b border-white/5"
  >
    {text}
  </Link>
);

export default Navbar;
