import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import Slider from "../slider/Slider";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import PopularService from "./PopularService";
import { Suspense } from "react";
import Laoding from "../loading/Laoding";

const Home = () => {
  const datas = useLoaderData();

  return (
    <Suspense fallback={<Laoding/>}>
      <div className="bg-white">
      <Helmet>
        <title>Service Hub || Professional Solutions</title>
      </Helmet>

      {/* Navbar Container */}
   

      <main>
        {/* Elegant Announcement Bar */}
        <div className="bg-[#AE9467] text-white py-2.5 px-4 text-center text-xs md:text-sm tracking-widest uppercase font-medium mt-16 md:mt-20">
          <p>✨ We ship nationwide. 30-day return policy. Free shipping on orders over $75 ✨</p>
        </div>

        {/* Hero Slider Section */}
        <section className="relative">
          <Slider />
        </section>

        {/* Optional Page Title Header */}
        <div className="mt-[-50px] relative z-20">
            <TiTleMenu title="Expert Services" route="Home" />
        </div>

        {/* Popular Services Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <Fade direction="left" triggerOnce>
                <span className="text-[#AE9467] font-bold uppercase tracking-[0.2em] text-sm">Top Rated</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2">
                  Our Most Popular <span className="text-[#AE9467]">Services</span>
                </h2>
              </Fade>
            </div>
            <Fade direction="right" triggerOnce>
              <Link to="/allservice" className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#AE9467] transition-all duration-300 shadow-xl">
                Explore All <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </Fade>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {datas?.slice(0, 6).map((data) => (
              <PopularService key={data._id} data={data} />
            ))}
          </div>
        </section>

        {/* Parallax Image / Features Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://i.ibb.co/j6FLhBr/humphrey-muleba-d-Dp-6p-Xr-Yik-unsplash.jpg" 
            alt="Feature Background" 
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 text-center text-white px-6">
            <Fade direction="up">
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Need a Custom Solution?</h2>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
                  Our experts are ready to help you with personalized services tailored specifically for your goals.
                </p>
                <Link to="/">
                    <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-[#AE9467] hover:text-white transition-all shadow-2xl">
                        Get in Touch Now
                    </button>
                </Link>
            </Fade>
          </div>
        </section>

        {/* All Services Mini Banner */}
        <div className="bg-gray-50 py-16 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-400 font-medium mb-4 italic">Looking for something specific?</p>
                <Link to="/allservice" className="text-2xl font-serif font-bold text-gray-800 hover:text-[#AE9467] transition-colors border-b-2 border-[#AE9467] pb-1">
                    View our full service catalog
                </Link>
            </div>
        </div>
      </main>

      <Footer />
    </div>
    </Suspense>
  );
};

export default Home;