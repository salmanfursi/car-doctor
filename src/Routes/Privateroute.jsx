import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
<<<<<<< HEAD
import { Navigate, useLocation } from "react-router-dom";
=======
import { Navigate } from "react-router-dom";
>>>>>>> 2a4929f3727b90d99583cc1494a634c5b50aec54

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
<<<<<<< HEAD
      <Navigate to="/login" state={{ from: location }} replace />
    
=======
      <Navigate to='/login' replace></Navigate>
>>>>>>> 2a4929f3727b90d99583cc1494a634c5b50aec54
   );
};

export default Privateroute;
