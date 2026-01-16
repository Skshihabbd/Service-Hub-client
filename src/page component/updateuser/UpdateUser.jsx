import Swal from "sweetalert2";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import { useState } from "react";
import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaEdit, FaMapMarkerAlt, FaDollarSign, FaImage, FaAlignLeft } from "react-icons/fa";

const UpdateUser = () => {
  const userUpdate = useLoaderData();
  const navigate = useNavigate();
  const { _id, ServiceName: initialName, ServiceArea, price, description, ServiceImage } = userUpdate;

  const [serviceName, setServiceName] = useState(initialName);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    
    const updatedInfo = {
      ServiceArea: form.Area.value,
      price: form.price.value,
      description: form.details.value,
      ServiceImage: form.photourl.value,
      ServiceName: serviceName,
    };

    fetch(`https://server-shihab.vercel.app/usersenddata/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((info) => {
        if (info.acknowledged || info.modifiedCount > 0) {
          Swal.fire({
            title: "Update Successful!",
            text: "Your service details have been refreshed.",
            icon: "success",
            confirmButtonColor: "#AE9467",
          });
          navigate("/myservice"); // Update er por dashboard e niye jabe
        }
      });
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Helmet>
        <title>Service Hub || Edit Service</title>
      </Helmet>
      
      <Navbar />
      <TiTleMenu title="Refine Service" route="Update" />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
          
          {/* Header Section */}
          <div className="bg-gray-900 p-10 text-center text-white relative">
            <div className="absolute top-4 right-4 text-[#AE9467] opacity-20 text-6xl rotate-12">
                <FaEdit />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3 italic">Modify Your Listing</h1>
            <p className="text-gray-400 max-w-lg mx-auto font-light">
              Make adjustments to your service details to keep your offerings up to date and attractive to clients.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Service Selection */}
              <div className="col-span-full">
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Service Category</label>
                <select
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 py-4 px-4 rounded-xl focus:ring-2 focus:ring-[#AE9467] outline-none transition-all cursor-pointer"
                >
                  <option value="Personal training">Personal Training</option>
                  <option value="Group Fitness">Group Fitness</option>
                  <option value="Nutrition Coaching">Nutrition Coaching</option>
                  <option value="Gym Memberships">Gym Memberships</option>
                  <option value="Speciality Program">Speciality Program</option>
                  <option value="Wellness Service">Wellness Service</option>
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  <FaMapMarkerAlt className="text-[#AE9467]" /> Service Area
                </label>
                <input
                  required
                  defaultValue={ServiceArea}
                  name="Area"
                  type="text"
                  className="w-full bg-gray-50 border border-gray-200 py-4 px-4 rounded-xl focus:bg-white focus:border-[#AE9467] outline-none transition-all shadow-sm"
                />
              </div>

              {/* Price */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  <FaDollarSign className="text-[#AE9467]" /> New Price ($)
                </label>
                <input
                  required
                  defaultValue={price}
                  name="price"
                  type="number"
                  className="w-full bg-gray-50 border border-gray-200 py-4 px-4 rounded-xl focus:bg-white focus:border-[#AE9467] outline-none transition-all shadow-sm"
                />
              </div>

              {/* Photo URL */}
              <div className="col-span-full">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  <FaImage className="text-[#AE9467]" /> Image Resource URL
                </label>
                <input
                  required
                  defaultValue={ServiceImage}
                  name="photourl"
                  type="url"
                  className="w-full bg-gray-50 border border-gray-200 py-4 px-4 rounded-xl focus:bg-white focus:border-[#AE9467] outline-none transition-all shadow-sm font-mono text-sm text-blue-600"
                />
              </div>

              {/* Description */}
              <div className="col-span-full">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  <FaAlignLeft className="text-[#AE9467]" /> Detailed Description
                </label>
                <textarea
                  required
                  defaultValue={description}
                  name="details"
                  rows="4"
                  className="w-full bg-gray-50 border border-gray-200 py-4 px-4 rounded-xl focus:bg-white focus:border-[#AE9467] outline-none transition-all shadow-sm resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full bg-[#AE9467] text-white font-bold py-5 rounded-2xl hover:bg-gray-900 transition-all duration-500 shadow-xl uppercase tracking-[0.2em] active:scale-95"
              >
                Save Changes & Publish
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UpdateUser;