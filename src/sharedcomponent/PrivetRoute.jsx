/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Laoding from "../page component/loading/Laoding";
import Custom from "./custom/Custom";


const PrivetRoute = ({children}) => {

    const { users, loading } = Custom()
    const location =useLocation()
    
  
    if (loading) {
      return (
       <div>
        <Laoding/>
       </div>
        
      );
    }
    if (users?.email) {
      return children;
    }
    return <Navigate state={location.pathname}  to={"/signin"} replace></Navigate>;
};

export default PrivetRoute;