import { useContext } from "react";
import { AuthContext } from "../../main component/Auth provider/AuthProviderS";

const Custom = () => {
    const context=useContext(AuthContext)
    return context ;
       
    
};

export default Custom;