/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { SlEarphonesAlt } from "react-icons/sl";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaCcPaypal, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F9F8F6] border-t border-gray-200">
      {/* Desktop & Tablet Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img className="w-12 h-12 rounded-full border-2 border-[#AE9467]" src='https://i.ibb.co/Gpwqh9F/1600w-oqe3ybe-Ec-QQ.webp' alt="Logo" />
              <span className="text-2xl font-serif font-bold text-[#312c25]">Service<span className="text-[#AE9467]">Hub</span></span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your one-stop solution for professional services. We connect experts with those who need them most.
            </p>
            <div className="flex gap-4 text-[#AE9467]">
                <FaFacebook className="cursor-pointer hover:text-black transition-colors" />
                <FaInstagram className="cursor-pointer hover:text-black transition-colors" />
                <FaTwitter className="cursor-pointer hover:text-black transition-colors" />
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-[#312c25] mb-6 border-b-2 border-[#AE9467] w-fit">Contact Us</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3 hover:text-[#AE9467] transition-colors">
                <GrMapLocation className="text-xl mt-1 shrink-0" />
                <span className="text-sm">Dhaka Uttara, Sector 13, Road 5, House 12</span>
              </li>
              <li className="flex items-center gap-3 hover:text-[#AE9467] transition-colors">
                <SlEarphonesAlt className="text-xl shrink-0" />
                <span className="text-sm">(+880) 123-456-7890</span>
              </li>
              <li className="flex items-center gap-3 hover:text-[#AE9467] transition-colors">
                <MdOutlineMarkEmailRead className="text-xl shrink-0" />
                <span className="text-sm">support@servicehub.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-lg font-bold text-[#312c25] mb-6 border-b-2 border-[#AE9467] w-fit">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/allservice" text="All Services" />
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/contact" text="Contact" />
            </ul>
          </div>

          {/* Column 4: Newsletter/Support */}
          <div>
            <h4 className="text-lg font-bold text-[#312c25] mb-6 border-b-2 border-[#AE9467] w-fit">Support</h4>
            <ul className="space-y-3">
              <FooterLink to="/faqs" text="Help Center & FAQ" />
              <FooterLink to="/terms" text="Terms of Service" />
              <FooterLink to="/privacy" text="Privacy Policy" />
              <FooterLink to="/shipping" text="Service Areas" />
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Accordion & Mini Navbar Layout */}
      <div className="lg:hidden px-4 py-8 space-y-2">
        <MobileAccordion title="Our Information">
            <div className="space-y-4 text-gray-600 p-2">
                <p className="flex items-center gap-3"><GrMapLocation /> Dhaka, Bangladesh</p>
                <p className="flex items-center gap-3"><SlEarphonesAlt /> +880 123 456 7890</p>
            </div>
        </MobileAccordion>

        <MobileAccordion title="Services">
            <ul className="grid grid-cols-2 gap-2 p-2 text-sm">
                <li><Link to="/allservice">Cleaning</Link></li>
                <li><Link to="/allservice">Repairing</Link></li>
                <li><Link to="/allservice">Delivery</Link></li>
                <li><Link to="/allservice">Plumbing</Link></li>
            </ul>
        </MobileAccordion>

        {/* Mobile Mini Navbar (Bottom Icons) */}
        <div className="mt-8 flex justify-center gap-6 py-4 border-t border-gray-200">
            <Link to="/" className="text-xs uppercase font-bold text-[#AE9467]">Home</Link>
            <Link to="/allservice" className="text-xs uppercase font-bold text-gray-400">Services</Link>
            <Link to="/about" className="text-xs uppercase font-bold text-gray-400">About</Link>
            <Link to="/contact" className="text-xs uppercase font-bold text-gray-400">Contact</Link>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-white py-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs md:text-sm text-center">
            © 2024 <span className="font-bold text-[#AE9467]">Service Hub</span>. All Rights Reserved. Powered by Gym.
          </p>
          <div className="flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <FaCcPaypal className="text-4xl text-[#003087]" />
            <div className="h-6 w-[1px] bg-gray-300"></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Secure Payment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="group flex items-center gap-1 text-sm text-gray-500 hover:text-[#AE9467] transition-all">
      <IoIosArrowRoundForward className="text-xl opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
      {text}
    </Link>
  </li>
);

const MobileAccordion = ({ title, children }) => (
  <div className="collapse collapse-arrow bg-white border border-gray-100 rounded-lg">
    <input type="checkbox" /> 
    <div className="collapse-title text-sm font-bold text-[#312c25]">
      {title}
    </div>
    <div className="collapse-content border-t border-gray-50">
      {children}
    </div>
  </div>
);

export default Footer;