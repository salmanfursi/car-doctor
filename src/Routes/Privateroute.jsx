import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({children}) => {
   const location =useLocation()
   const { user, Loading } = useContext(AuthContext)

   if (Loading) {
      return <span className="loading loading-infinity loading-lg"></span>
   }
   if (user?.email) {
      return children
   }

   return (
      <Navigate to="/login" state={{ from: location }} replace />
    
   );
};

export default Privateroute;
