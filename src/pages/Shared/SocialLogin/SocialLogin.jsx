import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
   const {googleSignin} =useContext(AuthContext)
   const handleGoogleSignin=()=>{
      googleSignin()
      .then(result => {
         console.log(result);
      })
      .catch(error => console.log(error))
   }
   return (
      <div>
         <div className="divider">OR</div>

         <div className="text-center">
         <button onClick={handleGoogleSignin} className="btn btn-circle">
            G
         </button>
         </div>
      </div>
   );
};

export default SocialLogin;