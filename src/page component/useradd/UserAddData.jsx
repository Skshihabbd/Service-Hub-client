import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import { useState } from "react";
import Custom from "../../sharedcomponent/custom/Custom";
import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import { Helmet } from "react-helmet";
import { FaCloudUploadAlt, FaDollarSign, FaMapMarkerAlt, FaFileAlt, FaSpinner } from "react-icons/fa";

const UserAddData = () => {
  const { users } = Custom();
  const [serviceName, setServiceName] = useState("");
  const [loading, setLoading] = useState(false); // Uploading state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading

    const form = event.target;
    const ServiceArea = form.Area.value;
    const price = form.price.value;
    const description = form.details.value;
    const imageFile = form.image.files[0]; // Get the file from input

    try {
      // 1. Image Upload to ImgBB
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=9c8539154be0bafb013ab02d1bbf342b`,
        formData
      );

      if (imgRes.data.success) {
        const ServiceImage = imgRes.data.data.display_url; // Get URL from ImgBB response

        // 2. Prepare Final Data Object
        const Serviceinfo = {
          ServiceArea,
          price,
          useremail: users?.email,
          username: users?.displayName,
          userImage: users?.photoURL,
          description,
          ServiceImage, // Use the uploaded URL
          ServiceName: serviceName,
        };

        // 3. Send to Server
        const res = await fetch("https://server-shihab.vercel.app/usersenddata", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Serviceinfo),
        });
        
        const info = await res.json();

        if (info.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Service published with image successfully.",
            icon: "success",
            confirmButtonColor: "#AE9467",
          });
          form.reset();
          setServiceName("");
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire("Error", "Failed to upload image. Try again.", "error");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Helmet>
        <title>Service Hub || Add New Service</title>
      </Helmet>
      
      <Navbar />
      <TiTleMenu title="Partner With Us" route="Add Service" />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
          <div className="bg-[#AE9467] p-10 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 italic">Register Your Service</h1>
            <p className="text-amber-50 leading-relaxed max-w-2xl mx-auto font-light">
              Upload your service details and image to join our elite marketplace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Category */}
              <div className="col-span-full">
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Select Category</label>
                <select
                  onChange={(e) => setServiceName(e.target.value)}
                  required
                  className="w-full bg-gray-50 border border-gray-200 py-3.5 px-4 rounded-xl outline-none"
                >
                  <option value="" disabled selected>Service Type</option>
                  <option value="Personal training">Personal Training</option>
                  <option value="Group Fitness">Group Fitness</option>
                  <option value="Nutrition Coaching">Nutrition Coaching</option>
                  <option value="Gym Memberships">Gym Memberships</option>
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider"><FaMapMarkerAlt className="text-[#AE9467]"/> Area</label>
                <input required name="Area" type="text" placeholder="e.g. Dhaka" className="w-full bg-gray-50 border border-gray-200 py-3.5 px-4 rounded-xl outline-none" />
              </div>

              {/* Price */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider"><FaDollarSign className="text-[#AE9467]"/> Price</label>
                <input required name="price" type="number" placeholder="0.00" className="w-full bg-gray-50 border border-gray-200 py-3.5 px-4 rounded-xl outline-none" />
              </div>

              {/* Image File Input (Replaced URL Input) */}
              <div className="col-span-full">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider"><FaCloudUploadAlt className="text-[#AE9467]"/> Upload Service Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-200 border-dashed rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="space-y-1 text-center">
                    <FaCloudUploadAlt className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="image-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#AE9467] hover:text-[#8e7853] focus-within:outline-none px-2">
                        <span>Upload a file</span>
                        <input id="image-upload" name="image" type="file" accept="image/*" className="sr-only" required />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="col-span-full">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider"><FaFileAlt className="text-[#AE9467]"/> Description</label>
                <textarea required name="details" rows="4" placeholder="Service description..." className="w-full bg-gray-50 border border-gray-200 py-3.5 px-4 rounded-xl outline-none resize-none"></textarea>
              </div>
            </div>

            <button 
              disabled={loading}
              type="submit" 
              className={`w-full bg-gray-900 text-[#AE9467] font-bold py-5 rounded-2xl hover:bg-[#AE9467] hover:text-white transition-all duration-500 shadow-xl flex justify-center items-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Publish Service"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserAddData;