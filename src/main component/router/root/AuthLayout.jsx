import { Suspense, useContext, useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Laoding from "../../../page component/loading/Laoding";
import { LoadingContext } from "../../Auth provider/LoadingProvider";
import GlobalLoader from "../../Auth provider/GlobalLoader";

const AuthLayout = () => {
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
    <div>
      <Suspense fallback={<Laoding/>}>
       
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;
