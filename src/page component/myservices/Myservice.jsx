/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Custom from "../../sharedcomponent/custom/Custom";
import Swal from "sweetalert2";
import MyserviceCard from "./MyserviceCard";
import Footer from "../../sharedcomponent/footer/Footer";
import { Helmet } from "react-helmet";
import { FaPlus, FaServicestack } from "react-icons/fa";
import { Link } from "react-router-dom";

const Myservice = () => {
  const { users } = Custom();
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (users?.email) {
      setIsLoading(true);
      fetch(`https://server-shihab.vercel.app/usersendcollection?email=${users?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setState(data);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [users?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This service will be permanently removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#AE9467",
      cancelButtonColor: "#111827",
      confirmButtonText: "Yes, delete it!",
      background: "#fff",
      customClass: {
        title: 'font-serif',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-shihab.vercel.app/usersenddata/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been removed.",
                icon: "success",
                confirmButtonColor: "#AE9467",
              });
              const remain = state.filter((item) => item._id !== id);
              setState(remain);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Helmet>
        <title>Dashboard || My Services</title>
      </Helmet>
      
      <Navbar />

      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 pt-28 pb-10">
        <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Manage Your <span className="text-[#AE9467]">Services</span></h1>
            <p className="text-gray-500 mt-2">You have published {state.length} professional services.</p>
          </div>
          <Link to="/useradddata">
            <button className="flex items-center gap-2 bg-gray-900 text-[#AE9467] px-6 py-3 rounded-xl font-bold hover:bg-[#AE9467] hover:text-white transition-all shadow-lg active:scale-95">
              <FaPlus /> Add New Service
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 min-h-[60vh]">
        {isLoading ? (
          /* Basic Loading State */
          <div className="flex justify-center items-center h-40">
             <span className="loading loading-spinner loading-lg text-[#AE9467]"></span>
          </div>
        ) : state.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-10/12 mx-auto">
            {state.map((data) => (
              <MyserviceCard
                handleDelete={handleDelete}
                key={data._id}
                data={data}
              />
            ))}
          </div>
        ) : (
          /* Empty State Design */
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="bg-white p-10 rounded-full shadow-sm mb-6">
                <FaServicestack className="text-6xl text-gray-200" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">No Services Found</h2>
            <p className="text-gray-500 mt-2 max-w-sm">
              It looks like you haven't added any services yet. Start sharing your expertise today!
            </p>
            <Link to="/useradddata" className="mt-8 text-[#AE9467] font-bold border-b-2 border-[#AE9467] pb-1 hover:text-black hover:border-black transition-all">
              Create Your First Service
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Myservice;