import { Outlet } from "react-router-dom";
import Navbar from "../../../sharedcomponent/navbar/Navbar";
import { Suspense } from "react";
import Laoding from "../../../page component/loading/Laoding";

const Root = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      
      {/* Suspense ekhane add kora hoyeche jate Outlet (pages) load hobar somoy fallback dekhay */}
      <Suspense 
        fallback={
         <Laoding/>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Root;