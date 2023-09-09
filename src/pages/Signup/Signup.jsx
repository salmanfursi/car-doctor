import { Link } from 'react-router-dom';
import img from './../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Signup = () => {
   const {createUser}=useContext(AuthContext)

   const handleSignup=event=>{
      event.preventDefault();
      const form=event.target;
      const name =form.name.value;
      const password =form.password.value;
      const email =form.email.value;
       
      createUser(email, password)
      .then((result) => {
         const user = result.user;
         console.log(user)
       })
       .catch(error => {
         console.log(error)
       })
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
                  <form onSubmit={handleSignup}>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input name='name' type="text" placeholder="name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input name='email' type="text" placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Confirm Password</span>
                     </label>
                     <input type="text" name='password' placeholder="password" className="input input-bordered" />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <input type="submit" value="Sign up" className='btn btn-primary' name="" id="" />
                  </div>
                  </form>
                  <p className='my-4 text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>login</Link></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Signup;