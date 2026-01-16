import { useLoaderData } from "react-router-dom";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Custom from "../../sharedcomponent/custom/Custom";
import Footer from "../../sharedcomponent/footer/Footer";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaEnvelope, FaUser, FaIdBadge, FaMoneyBillWave } from "react-icons/fa";

const Cradviewdetailsmake = () => {
  // Modal state default-e false rakha bhalo
  let [isOpen, setIsOpen] = useState(false);
  const { users } = Custom();
  const data = useLoaderData();

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const {
    ServiceImage,
    price,
    ServiceArea,
    username,
    useremail,
    description,
    ServiceName,
    _id,
  } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const allitem = {
      servicePhoto: ServiceImage,
      Usersname: users?.displayName,
      prices: price,
      Usersemail: users?.email,
      Servicsename: ServiceName,
      Serviceid: _id,
      ServiceproviderName: username,
      provideremail: useremail,
      Servicedate: form.Servicedate.value,
      servicequery: form.servicequery.value,
      status: "pending",
    };

    fetch("https://server-shihab.vercel.app/requestsend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allitem),
    })
      .then((res) => res.json())
      .then((info) => {
        if (info.acknowledged) {
          Swal.fire({
            title: "Booking Successfull!",
            text: "Your service request has been sent.",
            icon: "success",
            confirmButtonColor: "#1E1E1E",
          });
          form.reset();
          closeModal();
        }
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-20">
      <Helmet>
        <title>Service Hub || {ServiceName}</title>
      </Helmet>
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden grid lg:grid-cols-2 gap-0 border border-gray-100">
          
          {/* Service Image Section */}
          <div className="relative group overflow-hidden bg-gray-200 h-[400px] lg:h-full">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={ServiceImage}
              alt={ServiceName}
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-bold text-gray-800">Available in {ServiceArea}</span>
            </div>
          </div>

          {/* Service Details Section */}
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">{ServiceName}</h1>
              <div className="flex items-center gap-2 text-green-600 font-bold text-2xl">
                <FaMoneyBillWave />
                <span>${price}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg italic">"{description}"</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-700">
                <FaUser className="text-[#AE9467]" />
                <span className="text-sm font-medium">{username} (Provider)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-[#AE9467]" />
                <span className="text-sm font-medium">{useremail}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-[#AE9467]" />
                <span className="text-sm font-medium">{ServiceArea}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaIdBadge className="text-[#AE9467]" />
                <span className="text-[10px] font-mono uppercase bg-gray-100 px-2 py-1 rounded">ID: {_id}</span>
              </div>
            </div>

            <button
              disabled={users?.email === useremail}
              onClick={openModal}
              className={`w-full py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                users?.email === useremail 
                ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                : "bg-gray-900 text-white hover:bg-black shadow-lg"
              }`}
            >
              {users?.email === useremail ? "Your Own Service" : "Book Service Now"}
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-[2.5rem] bg-white p-8 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-gray-900 mb-6 border-b pb-4">
                    Complete Your Booking
                  </Dialog.Title>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Read Only Fields for context */}
                      <div className="space-y-1 opacity-70">
                        <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Service</label>
                        <input type="text" readOnly defaultValue={ServiceName} className="w-full px-4 py-3 rounded-xl bg-gray-100 border-none text-sm" />
                      </div>
                      <div className="space-y-1 opacity-70">
                        <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Price</label>
                        <input type="text" readOnly defaultValue={`$${price}`} className="w-full px-4 py-3 rounded-xl bg-gray-100 border-none text-sm" />
                      </div>
                    </div>

                    <div className="space-y-4 mt-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-gray-500 ml-2">Execution Date</label>
                        <input required name="Servicedate" type="date" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#AE9467] outline-none transition-all" />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-gray-500 ml-2">Special Requirements / Address</label>
                        <textarea required name="servicequery" rows="3" placeholder="Tell us about your specific needs..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#AE9467] outline-none transition-all"></textarea>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6">
                      <button type="submit" className="flex-1 py-4 bg-[#AE9467] hover:bg-[#8e7853] text-white rounded-xl font-bold shadow-lg transition-all transform active:scale-95">
                        Confirm Purchase
                      </button>
                      <button type="button" onClick={closeModal} className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl font-bold transition-all">
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Footer />
    </div>
  );
};

export default Cradviewdetailsmake;