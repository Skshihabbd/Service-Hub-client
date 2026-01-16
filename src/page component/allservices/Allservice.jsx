import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AllserviceCard from "./AllserviceCard";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Footer from "../../sharedcomponent/footer/Footer";
import { Helmet } from "react-helmet";
import { FaSearch, FaFilter } from "react-icons/fa";

const Allservice = () => {
  const loadedData = useLoaderData();
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen flex flex-col">
      <Helmet>
        <title>Service Hub || All Services</title>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <div className="bg-gray-900 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Explore All <span className="text-[#AE9467]">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
            Discover professional fitness and wellness solutions tailored to your lifestyle.
          </p>

          <div className="mt-10 max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a service..."
                className="w-full bg-white/10 border border-gray-700 py-4 pl-12 pr-4 rounded-2xl text-white outline-none focus:border-[#AE9467]"
              />
            </div>
            <button className="bg-[#AE9467] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-gray-900">
              <FaFilter /> Filter
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="flex-grow max-w-7xl mx-auto w-11/12 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Available Services</h2>
            <div className="h-1 w-12 bg-[#AE9467] mt-2"></div>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            Showing {Math.min(visibleCount, loadedData.length)} of {loadedData.length}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loadedData.length > 0 ? (
            loadedData
              .slice(0, visibleCount)
              .map((datas) => (
                <AllserviceCard key={datas._id} datas={datas} />
              ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed">
              <p className="text-gray-400 font-serif italic text-xl">
                No services found at the moment.
              </p>
            </div>
          )}
        </div>

        {/* Load More */}
        {visibleCount < loadedData.length && (
          <div className="flex justify-center mt-14">
            <button
              onClick={handleLoadMore}
              className="px-10 py-4 rounded-2xl bg-gray-900 text-[#AE9467] font-bold hover:bg-[#AE9467] hover:text-white transition-all active:scale-95"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Allservice;
