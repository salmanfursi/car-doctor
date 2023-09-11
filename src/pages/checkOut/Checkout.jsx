import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {
   const service = useLoaderData();
   const { title, price, _id,img } = service;
   const { user } = useContext(AuthContext);

   const handlCheckout = (event) => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value
      const date = form.date.value
      const email = form.email.value
      const price = form.price.value

      const order = {
         name: name,
         date: date,
         email: email,
         service_id: _id,
         price: price,
         img:img
      }
      console.log(order)
      fetch('http://localhost:5000/checkout', {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body:JSON.stringify(order)

      })
         .then((res) => res.json())
         .then((data) => {
            if(data.insertedId){
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
                })
            }
            console.log(data);
         })

   }
   return (
      <div>
         <h2 className="text-center text-3xl font-bold">book service: {title}</h2>
         <form onSubmit={handlCheckout}>
            <div className="grid md:grid-cols-2 gap-6">

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">name</span>
                  </label>
                  <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" />
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">date</span>
                  </label>
                  <input type="date" name="date" placeholder="date" className="input input-bordered" />
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Due amount</span>
                  </label>
                  <input type="text"name="price" defaultValue={"$" + price} className="input input-bordered" />
               </div>

            </div>
            <div className="form-control mt-6">
               <input type="submit" className="btn btn-primary btn-block " value='order confirm' />
            </div>
         </form>

      </div>



   );
};

export default Checkout;