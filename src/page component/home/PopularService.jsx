/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaTag } from "react-icons/fa";
import { Suspense } from "react";
import Laoding from "../loading/Laoding";

const PopularService = ({ data }) => {
  const { ServiceImage, _id, userImage, description, ServiceName, price, username } = data;

  return (
  <Suspense fallback={<Laoding/>}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl  duration-500 border border-gray-100 flex flex-col h-full">
      {/* Image Container with Zoom Effect */}
      <div className="relative overflow-hidden h-64">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={ServiceImage}
          alt={ServiceName}
        />
        {/* Price Tag Overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
          <FaTag className="text-[#AE9467] text-sm" />
          <span className="font-bold text-gray-800">${price}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Service Name */}
        <h3 className="text-xl font-serif font-bold text-gray-800 mb-2 group-hover:text-[#AE9467] transition-colors line-clamp-1">
          {ServiceName}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Footer: Provider & Action */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
                <img
                className="w-10 h-10 rounded-full object-cover border-2 border-[#AE9467]/20"
                src={userImage || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
                alt={username}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Provider</span>
                <span className="text-sm font-semibold text-gray-700">{username}</span>
            </div>
          </div>

          <Link to={`/cardview/${_id}`}>
            <button className="flex items-center justify-center gap-2 bg-[#AE9467] hover:bg-black text-white px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-[#AE9467]/30 text-sm font-bold">
              Details <FaExternalLinkAlt className="text-[10px]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  </Suspense>
  );
};

export default PopularService;