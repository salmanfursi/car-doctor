import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from './../../../assets/images/login/login.svg';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

   const { signin } = useContext(AuthContext);
   const [userEmail, setUserEmail] = useState('');

   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const navigate = useNavigate()
   navigate(from, { replace: true })

   const handlelogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const password = form.password.value;
      const email = form.email.value;

      signin(email, password)
         .then((result) => {
            // Access the user's email from the result object
            const user = result.user;
            setUserEmail(user.email);
            navigate(from, { replace: true })
            console.log(user);

         })
         .catch((error) => {
            console.log(error);
         });

   }


   return (
      <div className="hero min-h-[500px] bg-base-200">
         <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
               <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <div className="card-body">
                  <h1 className="text-3xl text-center font-bold text-orange-600">Login</h1>
                  <form onSubmit={handlelogin}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="text" defaultValue={userEmail} placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <input type="submit" value="login" className="btn btn-primary" />
                     </div>
                  </form>
                  <p className="my-4 text-center">
                     New to cars doctor <Link className="text-orange-600 font-bold" to="/signup">sign up</Link>
                  </p>
                  <SocialLogin></SocialLogin>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
