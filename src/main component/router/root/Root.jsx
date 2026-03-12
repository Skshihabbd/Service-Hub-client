import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../../sharedcomponent/navbar/Navbar";
import { Suspense, useContext, useEffect } from "react";
import { LoadingContext } from "../../Auth provider/LoadingProvider";
import GlobalLoader from "../../Auth provider/GlobalLoader";

const Root = () => {
  const navigation = useNavigation();
  const { loadings } = useContext(LoadingContext);
  const routeLoading = navigation.state === "loading";
 

  // hide preloader when loading finishes
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (!loadings && preloader) {
      preloader.style.display = "none"; // loading false হলে hide
    }
  }, [loadings]);

 if( routeLoading) {
  return <GlobalLoader />
 }

  return (
     <div className="bg-[#FAF9F6] min-h-screen">

      

     
     
      
      <Navbar />

      {/* Suspense for lazy-loaded components */}
      <Suspense fallback={<GlobalLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Root;
