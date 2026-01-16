/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { FaCalendarAlt, FaEnvelope, FaUserTie, FaDollarSign } from "react-icons/fa";

const BookedCard = ({ infos }) => {
  const {
    servicePhoto,
    prices,
    Servicsename,
    ServiceproviderName,
    provideremail,
    Servicedate,
    servicequery,
    status
  } = infos;

  // Status-er upor base kore color change hobe
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'working': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completed': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="flex flex-col sm:flex-row">
        
        {/* Left Side: Image with Date Badge */}
        <div className="sm:w-2/5 relative overflow-hidden h-48 sm:h-auto">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={servicePhoto} 
            alt={Servicsename} 
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
            <FaCalendarAlt className="text-[#AE9467] text-xs" />
            <span className="text-[10px] font-bold text-gray-800 uppercase tracking-tight">
              {Servicedate || "Date TBD"}
            </span>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="sm:w-3/5 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-serif font-bold text-gray-900 leading-tight">
                {Servicsename}
              </h2>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getStatusStyle(status)}`}>
                {status}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {/* Provider Info */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <FaUserTie className="text-[#AE9467] text-sm" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">Provider</p>
                  <p className="text-sm font-semibold text-gray-700">{ServiceproviderName}</p>
                </div>
              </div>

              {/* Price Info */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <FaDollarSign className="text-[#AE9467] text-sm" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">Amount Paid</p>
                  <p className="text-sm font-bold text-gray-900">${prices}</p>
                </div>
              </div>
            </div>

            {/* Instruction/Query */}
            <div className="mt-5 p-3 bg-[#FAF9F6] rounded-xl border border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Your Instruction</p>
              <p className="text-xs text-gray-600 italic line-clamp-2">
                "{servicequery || "No specific instructions provided"}"
              </p>
            </div>
          </div>

          {/* Footer Contact */}
          <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2">
             <FaEnvelope className="text-gray-300 text-xs" />
             <span className="text-[11px] text-gray-400 font-medium">{provideremail}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedCard;