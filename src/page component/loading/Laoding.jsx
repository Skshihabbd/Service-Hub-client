
const Laoding = () => {
    return (
       <div 
      className="fixed inset-0 bg-[#FAF9F6] flex flex-col items-center justify-center z-50 transition-opacity duration-500 ease-in-out"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative flex items-center justify-center">
        {/* Outer Ring: Slow spin */}
        <div className="w-16 h-16 border-4 border-[#AE9467]/30 border-t-[#AE9467] rounded-full animate-spin-slow"></div>
        
        {/* Inner Ring: Faster spin */}
        <div className="absolute w-10 h-10 border-4 border-gray-900/30 border-b-gray-900 rounded-full animate-spin-fast"></div>
        
        {/* Center Logo/Text */}
        <div className="absolute flex items-center justify-center w-8 h-8 bg-[#AE9467] rounded-full shadow-lg">
          <span className="text-white font-serif font-bold text-xs italic">H</span>
        </div>
      </div>
      
      <p className="mt-8 text-gray-900 font-serif italic tracking-[0.3em] uppercase text-sm animate-pulse">
        Loading Service Hub...
      </p>
    </div>
    );
};

export default Laoding;






