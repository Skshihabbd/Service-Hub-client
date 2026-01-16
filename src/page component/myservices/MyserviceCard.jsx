/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaTag } from "react-icons/fa";

const MyserviceCard = ({ data, handleDelete }) => {
  const { ServiceImage, _id, userImage, ServiceName, price } = data;

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 h-[440px] flex flex-col">

      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={ServiceImage}
          alt={ServiceName}
        />

        {/* Gradient Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-semibold tracking-wide">View Details</span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow flex items-center gap-2 font-bold text-gray-800 text-sm">
          <FaTag className="text-[#AE9467]" /> ${price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-[#AE9467] transition-colors line-clamp-2">
            {ServiceName}
          </h3>

          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-100 object-cover"
            src={userImage || "https://i.pravatar.cc/150"}
            alt="User"
          />
        </div>

        <p className="text-gray-500 text-sm line-clamp-3 mb-6 font-light italic">
          Professional service offered with guaranteed quality and support.
        </p>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-3">
          <Link to={`/update/${_id}`} className="w-full">
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FAF7F2] to-[#F2F2F2] text-gray-800 py-3 rounded-2xl hover:from-[#AE9467] hover:to-[#9E8F6E] hover:text-white transition-all duration-300 text-sm font-semibold shadow-sm">
              <FaEdit className="text-xs" /> Update
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 text-sm font-semibold shadow-sm"
          >
            <FaTrashAlt className="text-xs" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyserviceCard;
