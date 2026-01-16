/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaTag, FaUserCircle, FaArrowRight } from "react-icons/fa";

const AllserviceCard = ({ datas }) => {
  const {
    ServiceImage,
    userImage,
    description,
    ServiceName,
    price,
    _id,
    username,
  } = datas;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500">
      <div className="relative">

        {/* Image */}
        <div className="h-64 overflow-hidden">
          <img
            src={ServiceImage}
            alt={ServiceName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-slate-900 flex items-center gap-2 shadow">
          <FaTag className="text-[#AE9467]" /> ${price}
        </div>

        {/* Provider Image */}
        <img
          src={userImage || "https://i.ibb.co/mS7y69j/user-placeholder.png"}
          alt={username}
          className="absolute -bottom-6 right-6 w-12 h-12 rounded-full ring-4 ring-white object-cover shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="p-6 pt-10 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#AE9467] transition-colors">
          {ServiceName}
        </h2>

        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-[#AE9467] text-xl" />
            <div>
              <p className="text-xs text-slate-400">Service Owner</p>
              <p className="text-sm font-semibold text-slate-800">
                {username || "Expert Provider"}
              </p>
            </div>
          </div>

          <Link to={`/cardview/${_id}`}>
            <button className="flex items-center gap-2 bg-slate-900 text-[#AE9467] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#AE9467] hover:text-white transition-all active:scale-95">
              View
              <FaArrowRight className="text-xs" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllserviceCard;
