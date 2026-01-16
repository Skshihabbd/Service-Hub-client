/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Custom from "../../sharedcomponent/custom/Custom";
import BookedCard from "./BookedCard";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Footer from "../../sharedcomponent/footer/Footer";
import { Helmet } from "react-helmet";
import { FaBookmark, FaCalendarAlt } from "react-icons/fa";

const Booked = () => {
    const { users } = Custom();
    const [info, setInfo] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        if (users?.email) {
            setDataLoading(true);
            fetch(`https://server-shihab.vercel.app/requestsendcollection?Usersemail=${users?.email}`)
                .then(res => res.json())
                .then(data => {
                    setInfo(data);
                    setDataLoading(false);
                })
                .catch(() => setDataLoading(false));
        }
    }, [users]);

    return (
        <div className="bg-[#FAF9F6] min-h-screen flex flex-col">
            <Helmet>
                <title>Service Hub || My Bookings</title>
            </Helmet>
            
            <Navbar />

            {/* Elegant Header Section */}
            <div className="bg-gray-900 pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-[#AE9467]/10 rounded-2xl mb-4">
                        <FaBookmark className="text-[#AE9467] text-2xl" />
                    </div>
                    <h1 className="text-4xl font-serif font-bold text-white mb-2">
                        My <span className="text-[#AE9467]">Bookings</span>
                    </h1>
                    <p className="text-gray-400 font-light tracking-widest uppercase text-[10px]">
                        Manage and track your scheduled services
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="flex-grow max-w-7xl mx-auto w-11/12 py-12">
                
                {dataLoading ? (
                    /* Inner Page Loader */
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-10 h-10 border-4 border-[#AE9467]/20 border-t-[#AE9467] rounded-full animate-spin"></div>
                        <p className="mt-4 text-gray-400 text-xs tracking-widest uppercase animate-pulse">Syncing Bookings...</p>
                    </div>
                ) : info?.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        {info.map(infos => (
                            <BookedCard key={infos._id} infos={infos} />
                        ))}
                    </div>
                ) : (
                    /* No Data State */
                    <div className="text-center py-24 bg-white rounded-[2.5rem] shadow-sm border border-dashed border-gray-200">
                        <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaCalendarAlt className="text-gray-300 text-3xl" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-gray-800">No Bookings Yet</h3>
                        <p className="text-gray-500 mt-2 font-light max-w-xs mx-auto">
                            You haven't booked any services. Explore our services to get started.
                        </p>
                        <button className="mt-8 bg-gray-900 text-[#AE9467] px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#AE9467] hover:text-white transition-all">
                            Browse Services
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Booked;